import json, hashlib, hmac, time, urllib.parse, urllib.request, os, base64, random

SECRET_ID = os.environ.get('SECRET_ID', '')
SECRET_KEY = os.environ.get('SECRET_KEY', '')
DEEPSEEK_API_KEY = os.environ.get('DEEPSEEK_API_KEY', '')
BUCKET = 'moodtree-1458420446'
REGION = 'ap-shanghai'
COS_HOST = f'{BUCKET}.cos.{REGION}.myqcloud.com'

# ===== COS helpers =====
def _sign_cos(method, uri, headers, params):
    t = int(time.time())
    key_time = f"{t};{t + 600}"
    sign_key = hmac.new(SECRET_KEY.encode('utf-8'), key_time.encode('utf-8'), hashlib.sha1).hexdigest()
    uri_encoded = urllib.parse.quote(uri, safe='/')
    param_list = sorted(params.items()) if params else []
    param_str = '&'.join(f'{k}={urllib.parse.quote(str(v), safe="")}' for k, v in param_list)
    header_list = sorted((k.lower(), str(v)) for k, v in headers.items()) if headers else []
    header_str = '&'.join(f'{k}={urllib.parse.quote(v, safe="")}' for k, v in header_list)
    format_string = f"{method.lower()}\n{uri_encoded}\n{param_str}\n{header_str}\n"
    format_sha1 = hashlib.sha1(format_string.encode('utf-8')).hexdigest()
    string_to_sign = f"sha1\n{key_time}\n{format_sha1}\n"
    signature = hmac.new(sign_key.encode('utf-8'), string_to_sign.encode('utf-8'), hashlib.sha1).hexdigest()
    header_keys = ';'.join(k for k, _ in header_list)
    param_keys = ';'.join(k for k, _ in param_list)
    return f"q-sign-algorithm=sha1&q-ak={SECRET_ID}&q-sign-time={key_time}&q-key-time={key_time}&q-header-list={header_keys}&q-url-param-list={param_keys}&q-signature={signature}"

def _cos_get(path):
    uri = f'/{path}'
    headers = {'Host': COS_HOST}
    headers['Authorization'] = _sign_cos('GET', uri, headers, {})
    req = urllib.request.Request(f'https://{COS_HOST}{uri}', headers=headers, method='GET')
    try:
        resp = urllib.request.urlopen(req, timeout=10)
        return json.loads(resp.read().decode('utf-8'))
    except:
        return None

def _cos_put(path, body_bytes, content_type='application/json', public_read=False):
    uri = f'/{path}'
    headers = {'Host': COS_HOST, 'Content-Type': content_type, 'Content-Length': str(len(body_bytes))}
    if public_read:
        headers['x-cos-acl'] = 'public-read'
    headers['Authorization'] = _sign_cos('PUT', uri, headers, {})
    req = urllib.request.Request(f'https://{COS_HOST}{uri}', data=body_bytes, headers=headers, method='PUT')
    urllib.request.urlopen(req, timeout=15)
    return True

# ===== Data layer =====
def read_data():
    data = _cos_get('data.json')
    if not data:
        return {"posts": [], "users": [], "friendRequests": [], "friendships": [], "rooms": [], "diaries": []}
    data.setdefault("posts", [])
    data.setdefault("users", [])
    data.setdefault("friendRequests", [])
    data.setdefault("friendships", [])
    data.setdefault("rooms", [])
    data.setdefault("diaries", [])
    return data

def write_data(data):
    body = json.dumps(data, ensure_ascii=False).encode('utf-8')
    _cos_put('data.json', body, 'application/json')
    return True

def upload_image(filename, b64data):
    # b64data may include data URI prefix
    if ',' in b64data and b64data.startswith('data:'):
        header, b64data = b64data.split(',', 1)
        ct = header.split(';')[0].split(':')[1] if ':' in header else 'image/jpeg'
    else:
        ct = 'image/jpeg'
    ext = 'png' if 'png' in ct else 'jpg'
    path = f'images/{filename}.{ext}'
    body = base64.b64decode(b64data)
    _cos_put(path, body, ct, public_read=True)
    return f'https://{COS_HOST}/{path}'

def gen_id(prefix='MT'):
    return f"{prefix}{random.randint(100000, 999999)}"

# ===== User handlers =====
def handle_login(body):
    phone = body.get('phone', '')
    nickname = body.get('nickname', '')
    avatar = body.get('avatar', '')
    data = read_data()
    user = next((u for u in data['users'] if u.get('phone') == f'+86{phone}'), None)
    if not user:
        uid = gen_id()
        while any(u['id'] == uid for u in data['users']):
            uid = gen_id()
        user = {'id': uid, 'phone': f'+86{phone}', 'nickname': nickname or '匿名旅人', 'avatar': avatar or '', 'avatarType': 'char', 'createdAt': time.strftime('%Y-%m-%d %H:%M:%S')}
        data['users'].append(user)
        write_data(data)
    elif nickname:
        user['nickname'] = nickname
        if avatar:
            user['avatar'] = avatar
            user['avatarType'] = 'image'
        write_data(data)
    return {'success': True, 'user': user}

def update_profile(body):
    uid = body.get('userId', '')
    data = read_data()
    user = next((u for u in data['users'] if u['id'] == uid), None)
    if not user:
        return {'error': 'User not found'}
    if body.get('nickname'):
        user['nickname'] = body['nickname']
    if body.get('avatar'):
        user['avatar'] = body['avatar']
        user['avatarType'] = 'image'
    if body.get('avatarType'):
        user['avatarType'] = body['avatarType']
    write_data(data)
    return {'success': True, 'user': user}

def search_user(query):
    data = read_data()
    user = next((u for u in data['users'] if u['id'].upper() == query.upper()), None)
    if not user:
        return {'error': 'User not found'}
    return {'user': {'id': user['id'], 'nickname': user['nickname'], 'avatar': user.get('avatar', ''), 'avatarType': user.get('avatarType', 'char')}}

def get_user(uid):
    data = read_data()
    user = next((u for u in data['users'] if u['id'] == uid), None)
    if not user:
        return {'error': 'User not found'}
    return {'user': user}

# ===== Friend handlers =====
def friend_request(body):
    frm = body.get('from', '')
    to = body.get('to', '')
    data = read_data()
    target = next((u for u in data['users'] if u['id'] == to), None)
    if not target:
        return {'error': 'User not found'}
    existing = next((r for r in data['friendRequests'] if r['from'] == frm and r['to'] == to and r['status'] == 'pending'), None)
    if existing:
        return {'error': 'Request already sent'}
    already = next((f for f in data['friendships'] if (f['user1'] == frm and f['user2'] == to) or (f['user1'] == to and f['user2'] == frm)), None)
    if already:
        return {'error': 'Already friends'}
    req = {'id': gen_id('FR'), 'from': frm, 'to': to, 'status': 'pending', 'time': time.strftime('%Y-%m-%d %H:%M')}
    data['friendRequests'].append(req)
    write_data(data)
    return {'success': True}

def friend_accept(body):
    frm = body.get('from', '')
    to = body.get('to', '')
    data = read_data()
    for r in data['friendRequests']:
        if r['from'] == frm and r['to'] == to and r['status'] == 'pending':
            r['status'] = 'accepted'
            data['friendships'].append({'user1': frm, 'user2': to, 'time': time.strftime('%Y-%m-%d %H:%M')})
            write_data(data)
            return {'success': True}
    return {'error': 'Request not found'}

def friend_decline(body):
    frm = body.get('from', '')
    to = body.get('to', '')
    data = read_data()
    for r in data['friendRequests']:
        if r['from'] == frm and r['to'] == to and r['status'] == 'pending':
            r['status'] = 'declined'
            write_data(data)
            return {'success': True}
    return {'error': 'Request not found'}

def list_friends(uid):
    data = read_data()
    fids = []
    for f in data['friendships']:
        if f['user1'] == uid:
            fids.append(f['user2'])
        elif f['user2'] == uid:
            fids.append(f['user1'])
    friends = []
    for fid in fids:
        u = next((u for u in data['users'] if u['id'] == fid), None)
        if u:
            friends.append({'id': u['id'], 'nickname': u['nickname'], 'avatar': u.get('avatar', ''), 'avatarType': u.get('avatarType', 'char')})
    return {'friends': friends}

def list_friend_requests(uid):
    data = read_data()
    reqs = []
    for r in data['friendRequests']:
        if r['to'] == uid and r['status'] == 'pending':
            u = next((u for u in data['users'] if u['id'] == r['from']), None)
            if u:
                reqs.append({'from': u['id'], 'nickname': u['nickname'], 'avatar': u.get('avatar', ''), 'avatarType': u.get('avatarType', 'char'), 'time': r['time']})
    return {'requests': reqs}

# ===== Room handlers =====
def create_room(body):
    data = read_data()
    code = str(random.randint(1000, 9999))
    while any(r['inviteCode'] == code for r in data['rooms']):
        code = str(random.randint(1000, 9999))
    room = {
        'id': gen_id('R'),
        'name': body.get('name', '未命名房间'),
        'owner': body.get('owner', ''),
        'inviteCode': code,
        'members': [body.get('owner', '')],
        'cover': body.get('cover', ''),
        'createdAt': time.strftime('%Y-%m-%d %H:%M')
    }
    data['rooms'].append(room)
    write_data(data)
    return {'success': True, 'room': room}

def join_room(body):
    code = body.get('code', '')
    uid = body.get('userId', '')
    data = read_data()
    room = next((r for r in data['rooms'] if r['inviteCode'] == code), None)
    if not room:
        return {'error': 'Room not found'}
    if uid not in room['members']:
        room['members'].append(uid)
        write_data(data)
    return {'success': True, 'room': room}

def list_rooms(uid):
    data = read_data()
    rooms = []
    for r in data['rooms']:
        if uid in r.get('members', []):
            rooms.append(r)
    return {'rooms': rooms}

def get_room(rid):
    data = read_data()
    room = next((r for r in data['rooms'] if r['id'] == rid), None)
    if not room:
        return {'error': 'Room not found'}
    members = []
    for mid in room.get('members', []):
        u = next((u for u in data['users'] if u['id'] == mid), None)
        if u:
            members.append({'id': u['id'], 'nickname': u['nickname'], 'avatar': u.get('avatar', ''), 'avatarType': u.get('avatarType', 'char')})
    room_posts = [p for p in data['posts'] if p.get('roomId') == rid]
    return {'room': room, 'members': members, 'posts': room_posts}

# ===== Post handlers =====
def list_posts():
    data = read_data()
    public = [p for p in data['posts'] if p.get('visibility', 'public') == 'public' and not p.get('roomId')]
    return {'posts': public, 'total': len(public)}

def create_post(body):
    data = read_data()
    post = {
        'id': str(int(time.time() * 1000)),
        'author': body.get('author', '匿名'),
        'authorId': body.get('authorId', ''),
        'avatar': body.get('avatar', ''),
        'avatarType': body.get('avatarType', 'char'),
        'title': body.get('title', ''),
        'content': body.get('content', ''),
        'category': body.get('category', '其他'),
        'need': body.get('need', '我只想发泄'),
        'time': time.strftime('%Y-%m-%d %H:%M'),
        'likes': 0, 'hugs': 0, 'same': 0,
        'comments': [],
        'visibility': body.get('visibility', 'public'),
        'roomId': body.get('roomId', None),
        'coverImage': body.get('coverImage', ''),
        'diaryId': body.get('diaryId', None)
    }
    data['posts'].insert(0, post)
    if post.get('diaryId'):
        for d in data['diaries']:
            if d['id'] == post['diaryId']:
                d['postIds'].append(post['id'])
                break
    write_data(data)
    return {'success': True, 'post': post}

def get_post(pid):
    data = read_data()
    post = next((p for p in data['posts'] if p['id'] == pid), None)
    if not post:
        return {'error': 'Post not found'}
    return {'post': post}

def add_comment(pid, body):
    data = read_data()
    for p in data['posts']:
        if p['id'] == pid:
            c = {'id': str(int(time.time()*1000)), 'author': body.get('author','匿名'), 'authorId': body.get('authorId',''), 'avatar': body.get('avatar',''), 'avatarType': body.get('avatarType','char'), 'text': body.get('text',''), 'time': '刚刚', 'likes': 0, 'replies': []}
            p['comments'].append(c)
            write_data(data)
            return {'success': True, 'comment': c}
    return {'error': 'Post not found'}

def react_post(pid, body):
    data = read_data()
    for p in data['posts']:
        if p['id'] == pid:
            key = body.get('type', 'likes')
            if key in ['likes','hugs','same']:
                p[key] = p.get(key,0) + 1
            write_data(data)
            return {'success': True, 'post': p}
    return {'error': 'Post not found'}

# ===== Diary handlers =====
def create_diary(body):
    data = read_data()
    diary = {'id': gen_id('D'), 'userId': body.get('userId',''), 'name': body.get('name','未命名日记'), 'cover': body.get('cover',''), 'postIds': [], 'createdAt': time.strftime('%Y-%m-%d %H:%M')}
    data['diaries'].append(diary)
    write_data(data)
    return {'success': True, 'diary': diary}

def list_diaries(uid):
    data = read_data()
    diaries = [d for d in data['diaries'] if d['userId'] == uid]
    for d in diaries:
        d['posts'] = [p for p in data['posts'] if p['id'] in d.get('postIds', [])]
    return {'diaries': diaries}

def update_diary(did, body):
    data = read_data()
    for d in data['diaries']:
        if d['id'] == did:
            if body.get('name'): d['name'] = body['name']
            if body.get('cover'): d['cover'] = body['cover']
            write_data(data)
            return {'success': True, 'diary': d}
    return {'error': 'Diary not found'}

# ===== AI chat =====
def ai_chat(body):
    messages = [{'role': 'system', 'content': '你是MoodTree情绪树洞的AI陪伴。用户在这里分享心事，你要用温暖、共情的方式回应。原则：1.先倾听和共情，不要急于给建议 2.不说教、不评判 3.回复简短自然，像朋友聊天 4.如果用户情绪低落，给予温暖和支持 5.如果用户提到自伤倾向，温和建议联系专业心理援助热线'}]
    if body.get('postContent'):
        messages.append({'role': 'user', 'content': f"我分享的心事：{body['postContent']}"})
        if body.get('message'):
            messages.append({'role': 'assistant', 'content': '我在听，你说。'})
            messages.append({'role': 'user', 'content': body['message']})
    elif body.get('history'):
        messages.extend(body['history'])
    else:
        messages.append({'role': 'user', 'content': body.get('message', '你好')})
    req_data = json.dumps({'model': 'deepseek-chat', 'messages': messages, 'max_tokens': 500, 'temperature': 0.8}).encode('utf-8')
    req = urllib.request.Request('https://api.deepseek.com/v1/chat/completions', data=req_data, headers={'Content-Type': 'application/json', 'Authorization': f'Bearer {DEEPSEEK_API_KEY}'}, method='POST')
    try:
        resp = urllib.request.urlopen(req, timeout=25)
        result = json.loads(resp.read().decode('utf-8'))
        return {'reply': result['choices'][0]['message']['content']}
    except Exception as e:
        return {'error': 'AI暂时无法回应，请稍后再试', 'detail': str(e)}

# ===== Upload =====
def handle_upload(body):
    filename = body.get('filename', f'img_{int(time.time())}')
    b64 = body.get('image', '')
    if not b64:
        return {'error': 'No image data'}
    url = upload_image(filename, b64)
    return {'success': True, 'url': url}

# ===== Router =====
def main_handler(event, context):
    method = event.get('httpMethod', event.get('requestContext', {}).get('httpMethod', 'GET'))
    path = event.get('path', event.get('requestContext', {}).get('path', '/'))
    body = event.get('body', '{}')
    if event.get('isBase64Encoded'):
        body = base64.b64decode(body).decode('utf-8')
    cors = {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type,Authorization', 'Content-Type': 'application/json; charset=utf-8'}
    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors, 'body': ''}
    try:
        req = json.loads(body) if body else {}
    except:
        req = {}
    # Query params
    qp = event.get('queryString', event.get('queryStringParameters', {}))
    if not qp:
        qp = {}
    try:
        if path == '/api/health':
            result = {'status': 'ok', 'time': time.strftime('%Y-%m-%d %H:%M:%S')}
        elif path == '/api/auth/login' and method == 'POST':
            result = handle_login(req)
        elif path == '/api/user/profile' and method == 'POST':
            result = update_profile(req)
        elif path == '/api/user/search' and method == 'GET':
            result = search_user(qp.get('query', qp.get('id', '')))
        elif path.startswith('/api/user/') and method == 'GET':
            result = get_user(path.rstrip('/').split('/')[-1])
        elif path == '/api/upload' and method == 'POST':
            result = handle_upload(req)
        elif path == '/api/friends/request' and method == 'POST':
            result = friend_request(req)
        elif path == '/api/friends/accept' and method == 'POST':
            result = friend_accept(req)
        elif path == '/api/friends/decline' and method == 'POST':
            result = friend_decline(req)
        elif path.startswith('/api/friends/requests/') and method == 'GET':
            result = list_friend_requests(path.rstrip('/').split('/')[-1])
        elif path.startswith('/api/friends/') and method == 'GET':
            result = list_friends(path.rstrip('/').split('/')[-1])
        elif path == '/api/rooms' and method == 'POST':
            result = create_room(req)
        elif path == '/api/rooms/join' and method == 'POST':
            result = join_room(req)
        elif path.startswith('/api/rooms/list/') and method == 'GET':
            result = list_rooms(path.rstrip('/').split('/')[-1])
        elif path.startswith('/api/rooms/') and method == 'GET':
            result = get_room(path.rstrip('/').split('/')[-1])
        elif path == '/api/posts' and method == 'GET':
            result = list_posts()
        elif path == '/api/posts' and method == 'POST':
            result = create_post(req)
        elif path.startswith('/api/posts/') and path.endswith('/comments') and method == 'POST':
            result = add_comment(path.split('/')[3], req)
        elif path.startswith('/api/posts/') and path.endswith('/react') and method == 'POST':
            result = react_post(path.split('/')[3], req)
        elif path.startswith('/api/posts/') and method == 'GET':
            result = get_post(path.rstrip('/').split('/')[-1])
        elif path == '/api/diaries' and method == 'POST':
            result = create_diary(req)
        elif path.startswith('/api/diaries/') and method == 'GET':
            result = list_diaries(path.rstrip('/').split('/')[-1])
        elif path.startswith('/api/diaries/') and method == 'PUT':
            result = update_diary(path.split('/')[3], req)
        elif path == '/api/ai/chat' and method == 'POST':
            result = ai_chat(req)
        else:
            result = {'error': 'Not found', 'path': path, 'method': method}
    except Exception as e:
        result = {'error': str(e)}
    return {'statusCode': 200, 'headers': cors, 'body': json.dumps(result, ensure_ascii=False)}
