import json, hashlib, hmac, time, urllib.parse, urllib.request, os, base64, random, datetime

# Force Asia/Shanghai timezone for all time displays
tz_shanghai = datetime.timezone(datetime.timedelta(hours=8))
def now_str(fmt='%Y-%m-%d %H:%M'):
    return datetime.datetime.now(tz_shanghai).strftime(fmt)

SECRET_ID = os.environ.get('SECRET_ID', '')
SECRET_KEY = os.environ.get('SECRET_KEY', '')
DEEPSEEK_API_KEY = os.environ.get('DEEPSEEK_API_KEY', '')
BUCKET = 'moodtree-1458420446'
REGION = 'ap-shanghai'
COS_HOST = f'{BUCKET}.cos.{REGION}.myqcloud.com'

SUPER_ADMIN_ID = 'MT00571512'

# ===== Sensitive words filter =====
SENSITIVE_WORDS = {
    # Chinese profanity / insults
    '操你','操你妈','操你娘','操你祖宗','操你老妈','操你老母','操妳','操妳妈','操妳娘','操比','操逼','草你妈','草泥马','草你娘','草吗','草拟妈','肏你','肏死','操死',
    '他妈的','他妈地','他马的','他妈','他娘','妈的','妈b','妈个b','妈比','妈逼','妈的b','妈个比','妈妈的','你妈','你妈的','你娘','你奶奶的','你她妈的','你它妈的','你他妈','你马的','去你妈的',
    '傻逼','傻比','傻b','傻bi','煞笔','煞逼','脑残','脑瘫','废物','垃圾','辣鸡','腊鸡','沙雕','韭菜','白痴','笨蛋','蠢货','蠢猪','猪头','混蛋','王八蛋','鳖孙',
    '贱人','贱货','贱b','贱逼','婊子','婊子养的','荡妇','浪女','骚货','骚比','骚逼','骚女','烂货','烂逼','绿茶婊','心机婊','撩骚',
    '鸡巴','鸡吧','鸡叭','几把','几巴','几叭','鸡鸡','小鸡鸡','鸡奸','阳具','阴茎','阴道','阴户','阴唇','阴核','阴毛','龟头','屌丝','逼样','乳头','乳房','奶子','巨乳',
    '做爱','性交','性器','性无能','强奸','轮奸','妓女','妓院','嫖娼','嫖客','卖淫','招妓','姘头','炮友','一夜情','援交','援助交际','自慰','手淫','打飞机','打炮',
    '狗日的','狗娘养的','狗屁','狗屎','狗杂种','杂种','野种','孽种','畜生','畜牲','狗东西',
    '去死','去死吧','你完蛋了','找死','作死','该死','找抽','找打','弄死你','弄死','打死你',
    '干你','干你妈','干你娘','干你老母','干死你','干死','干妳妈','幹你娘','幹','靠北','靠爸','靠腰','靠母','靠背',
    '屁眼','射精','精子','内射','颜射','口交','肛交','吹箫','叫床','潮吹',
    # Pinyin abbreviations
    'nmsl','wcnm','wocao','woc','tmd','nmb','wdnmd','cnm','wtf','stfu','kys','kmt','sb','nc','zz',
    # English profanity
    'fuck','fucking','fucker','fucked','fuckyou','motherfucker','motherfuck','shit','shitty','bullshit',
    'bitch','bitches','bitching','damn','dammit','asshole','assholes','dick','dicks','dickhead',
    'cock','cocks','cocksucker','pussy','pussies','cunt','cunts','slut','sluts','slutty','whore','whores',
    'hoe','hoes','bastard','bastards','retard','retards','retarded','moron','idiot','idiots',
    'stupidfuck','dumbass','dumbfuck','jackass','douchebag','douche','turd','twat','wanker','wank',
    'prick','knobhead','bellend','bollocks','horseshit','dipshit','dipstick','shithead','shitface',
    'shitbag','shitstain','fuckface','fuckhead','fuckoff','fucknut','fucktard','fuckwit','fuckboy',
    'fuckmeat','fuckstick','clusterfuck','skullfuck','assfuck','assfucker','assface','asswipe','assclown',
    'asshat','asshead','asshopper','buttfuck','buttfucker','butthole','buttface','dickface','dickfuck',
    'dickbag','dickwad','dickweed','dickless','dicklick','dicklicker','dickslap','dickzipper',
    'cum','cumming','cumshot','cumdumpster','cumslut','jizz','jizzed','jism','boner','boners',
    'horny','sexual','nude','nudity','naked','porn','porno','pornography','nsfw','milf','bdsm',
    'bondage','fetish','hentai','erection','orgasm','orgasms','masturbate','masturbating','masturbation',
    'gangbang','rape','raped','rapist','nigger','niggers','nigga','niggah','niggas','niggaz',
    'n1gga','n1gger','faggot','faggots','fag','fags','faget','faggit','fagtard','dyke','dykes',
    'tranny','trannies','shemale','transsexual','transvestite','lesbo','homo','homos','homosexual',
    'queer','queers','queerhole','spic','spick','spics','chink','chinks','gook','gooks','kike','kikes',
    'wetback','wetbacks','sandnigger','nazi','nazis','nazism','hitler','kkk','klan','lynch','lynching',
    'genocide','killing','murder','suicide','kill yourself','kms','anhero','selfharm','cutting',
    'thinspo','proana','cocaine','heroin','meth','crack','weed','marijuana','lsd',
}

def check_sensitive(text):
    """Check if text contains any sensitive words. Returns (has_sensitive: bool, matched_words: list)."""
    if not text:
        return False, []
    lower = text.lower()
    matched = [w for w in SENSITIVE_WORDS if w in lower]
    return len(matched) > 0, matched

# ===== Reputation / auto-ban system =====
# Violation ladder: cumulative sensitive-word detections trigger escalating bans
#   1-2 violations: warning only (no ban)
#   3rd violation → 1 day ban
#   4th → 3 days, 5th → 1 week, 6th → 1 month, 7th → 1 year
#   8th+ → permanent ban
BAN_LADDER = {
    3:  ('1天',   1 * 24 * 3600),
    4:  ('3天',   3 * 24 * 3600),
    5:  ('1周',   7 * 24 * 3600),
    6:  ('1个月', 30 * 24 * 3600),
    7:  ('1年',   365 * 24 * 3600),
}

def record_violation(data, uid, content_type, matched_words):
    """Record a sensitive-word violation for a user. Auto-bans if threshold reached.
    Returns (violation_count, ban_info_or_None)."""
    if not uid:
        return 0, None
    violations = data.setdefault('userViolations', {})
    user_v = violations.get(uid, {'count': 0, 'history': []})
    user_v['count'] = user_v.get('count', 0) + 1
    user_v.setdefault('history', []).append({
        'time': now_str('%Y-%m-%d %H:%M'),
        'type': content_type,
        'words': matched_words[:5],
    })
    # Keep only last 20 history entries
    if len(user_v['history']) > 20:
        user_v['history'] = user_v['history'][-20:]
    violations[uid] = user_v
    count = user_v['count']

    # Check if this violation triggers an auto-ban
    ban_info = None
    if count >= 3:
        if count >= 8:
            ban_label = '永久'
            until = None  # permanent
        else:
            ban_label, duration = BAN_LADDER[count]
            until = int(time.time()) + duration
        # Record ban in bannedUsers (source: 'auto' for system-detected)
        banned = data.get('bannedUsers', {}).get(uid, {})
        ban_count = banned.get('banCount', 0) + 1
        data['bannedUsers'][uid] = {
            'level': min(ban_count, 3),
            'banCount': ban_count,
            'until': until,
            'bannedAt': int(time.time()),
            'bannedTime': now_str('%Y-%m-%d %H:%M'),
            'reason': f'系统检测违规用语（第{count}次）',
            'source': 'auto',
        }
        ban_info = {
            'banned': True,
            'label': ban_label,
            'until': until,
            'violationCount': count,
        }
    return count, ban_info

def get_violation_status(data, uid):
    """Get a user's violation status for frontend display."""
    if not uid:
        return {'count': 0, 'history': [], 'banned': False}
    violations = data.get('userViolations', {})
    user_v = violations.get(uid, {'count': 0, 'history': []})
    count = user_v.get('count', 0)
    banned = is_banned(data, uid)
    ban_info = data.get('bannedUsers', {}).get(uid, {})
    remaining = None
    if banned and ban_info.get('until'):
        remaining = max(0, ban_info['until'] - int(time.time()))
    return {
        'count': count,
        'history': user_v.get('history', [])[-5:],
        'banned': banned,
        'banSource': ban_info.get('source', 'manual'),
        'banReason': ban_info.get('reason', ''),
        'banUntil': ban_info.get('until'),
        'banTime': ban_info.get('bannedTime', ''),
        'remaining': remaining,
        'nextThreshold': 3 if count < 3 else None,
    }

def is_banned(data, uid):
    """Check if a user is currently banned (and ban not expired)."""
    banned = data.get('bannedUsers', {}).get(uid)
    if not banned:
        return False
    until = banned.get('until')
    if until is None:
        return True  # permanent ban
    return int(time.time()) < until

def is_super_admin(uid):
    """Check if a user is the super admin (fixed, cannot be removed)."""
    return uid == SUPER_ADMIN_ID

def is_admin(data, uid):
    """Check if a user is an admin (super admin or in the admins list)."""
    return uid == SUPER_ADMIN_ID or uid in data.get('admins', [])

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
    for attempt in range(3):
        try:
            uri = f'/{path}'
            headers = {'Host': COS_HOST, 'Content-Type': content_type, 'Content-Length': str(len(body_bytes))}
            if public_read:
                headers['x-cos-acl'] = 'public-read'
            headers['Authorization'] = _sign_cos('PUT', uri, headers, {})
            req = urllib.request.Request(f'https://{COS_HOST}{uri}', data=body_bytes, headers=headers, method='PUT')
            urllib.request.urlopen(req, timeout=15)
            return True
        except Exception as e:
            if attempt == 2:
                raise
            time.sleep(0.3 * (attempt + 1))
    return True

def _read_states_get():
    """Read read states from separate file to avoid race condition with main data writes"""
    data = _cos_get('read_states.json')
    if not data or not isinstance(data, dict):
        return {}
    return data

def _read_states_put(states):
    """Write read states to separate file"""
    body = json.dumps(states, ensure_ascii=False).encode('utf-8')
    _cos_put('read_states.json', body, 'application/json')
    return True

# ===== Data layer =====
def read_data():
    data = _cos_get('data.json')
    if not data:
        return {"posts": [], "users": [], "friendRequests": [], "friendships": [], "rooms": [], "diaries": [], "messages": []}
    data.setdefault("posts", [])
    data.setdefault("users", [])
    data.setdefault("friendRequests", [])
    data.setdefault("friendships", [])
    data.setdefault("rooms", [])
    data.setdefault("diaries", [])
    data.setdefault("messages", [])
    data.setdefault("readStates", {})
    data.setdefault("readReceipts", {})
    data.setdefault("bannedUsers", {})
    data.setdefault("reports", [])
    data.setdefault("userBlocks", {})
    data.setdefault("admins", [])
    data.setdefault("userViolations", {})
    data.setdefault("savedPosts", {})
    data.setdefault("pinnedPosts", {})
    data.setdefault("birthdayWishes", {})
    data.setdefault("smsCodes", {})
    data.setdefault("userLikes", {})
    data.setdefault("bottles", [])
    # One-time migration: reset inflated like counts to real values based on userLikes
    if not data.get("_likesMigrated", False):
        ul = data.get("userLikes", {})
        for p in data.get("posts", []):
            pid = p.get("id", "")
            real_likes = len(ul.get(pid, []))
            p["likes"] = real_likes
        data["_likesMigrated"] = True
        write_data(data)
    # Auto-migrate 6-digit IDs to 8-digit
    data, migrated = migrate_ids(data)
    if migrated:
        write_data(data)
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
    # Handle audio content types
    if 'audio' in ct:
        audio_ext_map = {
            'audio/webm': 'webm', 'audio/mp4': 'm4a', 'audio/mpeg': 'mp3',
            'audio/ogg': 'ogg', 'audio/wav': 'wav', 'audio/aac': 'm4a',
            'audio/x-m4a': 'm4a'
        }
        ext = audio_ext_map.get(ct, 'm4a')
        path = f'audio/{filename}.{ext}'
    elif 'video' in ct:
        video_ext_map = {
            'video/mp4': 'mp4', 'video/webm': 'webm', 'video/quicktime': 'mov',
            'video/3gpp': '3gp', 'video/x-matroska': 'mkv'
        }
        ext = video_ext_map.get(ct, 'mp4')
        path = f'videos/{filename}.{ext}'
    elif 'image' in ct:
        ext = 'png' if 'png' in ct else 'jpg'
        path = f'images/{filename}.{ext}'
    else:
        # Generic file
        ext_map = {'application/pdf': 'pdf', 'application/zip': 'zip',
                   'application/msword': 'doc', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
                   'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx',
                   'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx',
                   'text/plain': 'txt', 'text/csv': 'csv'}
        ext = ext_map.get(ct, 'bin')
        path = f'files/{filename}.{ext}'
    body = base64.b64decode(b64data)
    _cos_put(path, body, ct, public_read=True)
    return f'https://{COS_HOST}/{path}'

# ===== ASR (语音转文字) =====
def _tc3_sign(service, host, action, region, version, payload_str):
    """Generate TC3-HMAC-SHA256 signature for Tencent Cloud API v3"""
    timestamp = int(time.time())
    date = datetime.datetime.utcfromtimestamp(timestamp).strftime('%Y-%m-%d')
    canonical_headers = f'content-type:application/json; charset=utf-8\nhost:{host}\nx-tc-action:{action.lower()}\n'
    signed_headers = 'content-type;host;x-tc-action'
    hashed_payload = hashlib.sha256(payload_str.encode('utf-8')).hexdigest()
    canonical_request = f'POST\n/\n\n{canonical_headers}\n{signed_headers}\n{hashed_payload}'
    algorithm = 'TC3-HMAC-SHA256'
    hashed_canonical_request = hashlib.sha256(canonical_request.encode('utf-8')).hexdigest()
    credential_scope = f'{date}/{service}/tc3_request'
    string_to_sign = f'{algorithm}\n{timestamp}\n{credential_scope}\n{hashed_canonical_request}'
    secret_date = hmac.new(f'TC3{SECRET_KEY}'.encode('utf-8'), date.encode('utf-8'), hashlib.sha256).digest()
    secret_service = hmac.new(secret_date, service.encode('utf-8'), hashlib.sha256).digest()
    secret_signing = hmac.new(secret_service, 'tc3_request'.encode('utf-8'), hashlib.sha256).digest()
    signature = hmac.new(secret_signing, string_to_sign.encode('utf-8'), hashlib.sha256).hexdigest()
    authorization = f'{algorithm} Credential={SECRET_ID}/{credential_scope}, SignedHeaders={signed_headers}, Signature={signature}'
    return {
        'Authorization': authorization,
        'Content-Type': 'application/json; charset=utf-8',
        'Host': host,
        'X-TC-Action': action,
        'X-TC-Timestamp': str(timestamp),
        'X-TC-Version': version,
        'X-TC-Region': region,
    }

def asr_transcribe(audio_url):
    """Use Tencent Cloud ASR to transcribe audio to text"""
    ext = audio_url.rsplit('.', 1)[-1].lower() if '.' in audio_url else ''
    format_map = {
        'm4a': 'm4a', 'mp4': 'm4a', 'aac': 'aac', 'mp3': 'mp3',
        'wav': 'wav', 'pcm': 'pcm', 'ogg': 'ogg-opus', 'opus': 'ogg-opus',
        'webm': 'ogg-opus',
    }
    voice_format = format_map.get(ext, '')
    if not voice_format:
        return {'error': '该音频格式暂不支持转文字'}
    payload = json.dumps({
        'ProjectId': 0,
        'SubServiceType': 2,
        'EngSerViceType': '16k',
        'SourceType': 0,
        'Url': audio_url,
        'VoiceFormat': voice_format,
        'UsrAudioKey': 'moodtree',
    })
    host = 'asr.tencentcloudapi.com'
    headers = _tc3_sign('asr', host, 'SentenceRecognition', 'ap-shanghai', '2019-06-14', payload)
    req = urllib.request.Request(f'https://{host}', data=payload.encode('utf-8'), headers=headers, method='POST')
    try:
        resp = urllib.request.urlopen(req, timeout=30)
        result = json.loads(resp.read())
        if 'Response' in result:
            if 'Error' in result['Response']:
                err = result['Response']['Error']
                msg = err.get('Message', '转文字失败')
                if 'not opened' in msg.lower() or 'not activated' in msg.lower() or '未开通' in msg:
                    return {'error': '语音识别服务未开通，请在腾讯云控制台开通ASR服务'}
                return {'error': msg}
            if 'Result' in result['Response']:
                return {'text': result['Response']['Result']}
        return {'error': '转文字失败'}
    except Exception as e:
        return {'error': f'转文字失败: {str(e)}'}

def gen_id(prefix='MT'):
    return f"{prefix}{random.randint(10000000, 99999999)}"

def migrate_ids(data):
    """Migrate 6-digit MT IDs to 8-digit by zero-padding (MT123456 -> MT00123456)"""
    id_map = {}
    for u in data['users']:
        old_id = u['id']
        if old_id.startswith('MT') and len(old_id) == 8:  # MT + 6 digits = 8 chars
            new_id = 'MT' + old_id[2:].zfill(8)  # pad numeric part to 8 digits
            id_map[old_id] = new_id
            u['id'] = new_id
    if not id_map:
        return data, False
    # Update all references across collections
    for p in data['posts']:
        if p.get('authorId') and p['authorId'] in id_map:
            p['authorId'] = id_map[p['authorId']]
    for f in data['friendships']:
        if f.get('user1') in id_map: f['user1'] = id_map[f['user1']]
        if f.get('user2') in id_map: f['user2'] = id_map[f['user2']]
    for r in data['friendRequests']:
        if r.get('from') in id_map: r['from'] = id_map[r['from']]
        if r.get('to') in id_map: r['to'] = id_map[r['to']]
    for r in data['rooms']:
        if r.get('owner') in id_map: r['owner'] = id_map[r['owner']]
        r['members'] = [id_map.get(m, m) for m in r.get('members', [])]
    for d in data['diaries']:
        if d.get('userId') in id_map: d['userId'] = id_map[d['userId']]
    for m in data.get('messages', []):
        if m.get('from') in id_map: m['from'] = id_map[m['from']]
    return data, True

# ===== Auth helpers =====
def hash_password(pwd):
    return hashlib.sha256(pwd.encode('utf-8')).hexdigest()

def verify_password(pwd, hashed):
    return hash_password(pwd) == hashed

def validate_password_strength(pwd):
    """8-16 chars, must contain letters and digits (not pure digits)"""
    if not pwd or len(pwd) < 8 or len(pwd) > 16:
        return False
    if pwd.isdigit():
        return False
    has_letter = any(c.isalpha() for c in pwd)
    has_digit = any(c.isdigit() for c in pwd)
    return has_letter and has_digit

# ===== User handlers =====
def check_phone(body):
    """Check if phone exists and whether user has password set"""
    phone = body.get('phone', '')
    full_phone = phone if phone.startswith('+') else f'+{phone}'
    data = read_data()
    user = next((u for u in data['users'] if u.get('phone') == full_phone), None)
    if user:
        return {'exists': True, 'hasPassword': bool(user.get('password'))}
    return {'exists': False, 'hasPassword': False}

def handle_login(body):
    phone = body.get('phone', '')
    nickname = body.get('nickname', '')
    avatar = body.get('avatar', '')
    password = body.get('password', '')
    full_phone = phone if phone.startswith('+') else f'+{phone}'
    data = read_data()
    user = next((u for u in data['users'] if u.get('phone') == full_phone), None)
    if not user:
        # New user: password is required
        if not password:
            return {'error': '请设置密码'}
        if not validate_password_strength(password):
            return {'error': '密码必须是8-16位的英文字母和数字组合（不能是纯数字）'}
        uid = gen_id()
        while any(u['id'] == uid for u in data['users']):
            uid = gen_id()
        user = {'id': uid, 'phone': full_phone, 'nickname': nickname or '匿名旅人', 'avatar': avatar or '', 'avatarType': 'char', 'createdAt': now_str('%Y-%m-%d %H:%M:%S'), 'password': hash_password(password)}
        data['users'].append(user)
        write_data(data)
    else:
        # Existing user: verify password
        if not user.get('password'):
            # Legacy user without password - set password if provided
            if password:
                if not validate_password_strength(password):
                    return {'error': '密码必须是8-16位的英文字母和数字组合（不能是纯数字）'}
                user['password'] = hash_password(password)
                write_data(data)
            else:
                return {'error': '请输入密码', 'needPassword': True}
        else:
            if not verify_password(password, user['password']):
                return {'error': '密码错误'}
        # Only update avatar if user has no avatar yet (backward compat)
        if avatar and not user.get('avatar'):
            user['avatar'] = avatar
            user['avatarType'] = 'image'
            write_data(data)
    # Don't return password hash
    safe_user = {k: v for k, v in user.items() if k != 'password'}
    return {'success': True, 'user': safe_user}

def set_password(body):
    """Change password: requires old password verification"""
    uid = body.get('userId', '')
    old_password = body.get('oldPassword', '')
    new_password = body.get('newPassword', '')
    data = read_data()
    user = next((u for u in data['users'] if u['id'] == uid), None)
    if not user:
        return {'error': '用户不存在'}
    if not user.get('password'):
        # No password set yet - set directly (first time)
        if not validate_password_strength(new_password):
            return {'error': '密码必须是8-16位的英文字母和数字组合（不能是纯数字）'}
        user['password'] = hash_password(new_password)
        write_data(data)
        return {'success': True}
    # Verify old password
    if not verify_password(old_password, user['password']):
        return {'error': '原密码错误'}
    if not validate_password_strength(new_password):
        return {'error': '密码必须是8-16位的英文字母和数字组合（不能是纯数字）'}
    user['password'] = hash_password(new_password)
    write_data(data)
    return {'success': True}

def send_sms_code(body):
    """Generate and store a verification code for password reset"""
    phone = body.get('phone', '')
    full_phone = phone if phone.startswith('+') else f'+{phone}'
    data = read_data()
    user = next((u for u in data['users'] if u.get('phone') == full_phone), None)
    if not user:
        return {'error': '该手机号未注册'}
    code = str(random.randint(100000, 999999))
    data['smsCodes'][full_phone] = {'code': code, 'expire': time.time() + 300}  # 5 min expiry
    write_data(data)
    # No real SMS service - return code in response for now
    return {'success': True, 'code': code, 'message': '验证码已发送（开发模式：直接返回验证码）'}

def reset_password(body):
    """Reset password using SMS verification code"""
    phone = body.get('phone', '')
    code = body.get('code', '')
    new_password = body.get('newPassword', '')
    full_phone = phone if phone.startswith('+') else f'+{phone}'
    data = read_data()
    stored = data['smsCodes'].get(full_phone)
    if not stored:
        return {'error': '请先获取验证码'}
    if time.time() > stored.get('expire', 0):
        del data['smsCodes'][full_phone]
        write_data(data)
        return {'error': '验证码已过期，请重新获取'}
    if stored['code'] != code:
        return {'error': '验证码错误'}
    if not validate_password_strength(new_password):
        return {'error': '密码必须是8-16位的英文字母和数字组合（不能是纯数字）'}
    user = next((u for u in data['users'] if u.get('phone') == full_phone), None)
    if not user:
        return {'error': '用户不存在'}
    user['password'] = hash_password(new_password)
    # Clean up used code
    del data['smsCodes'][full_phone]
    write_data(data)
    return {'success': True}

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
    if 'birthday' in body:
        user['birthday'] = body.get('birthday', '')
    if 'readReceipts' in body:
        data.setdefault('readReceipts', {})[uid] = body['readReceipts']
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
    req = {'id': gen_id('FR'), 'from': frm, 'to': to, 'status': 'pending', 'time': now_str('%Y-%m-%d %H:%M'), 'message': body.get('message', '').strip()[:50]}
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
            data['friendships'].append({'user1': frm, 'user2': to, 'time': now_str('%Y-%m-%d %H:%M')})
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
            fids.append((f['user2'], f.get('alias1', '')))
        elif f['user2'] == uid:
            fids.append((f['user1'], f.get('alias2', '')))
    friends = []
    for fid, alias in fids:
        u = next((u for u in data['users'] if u['id'] == fid), None)
        if u:
            friends.append({'id': u['id'], 'nickname': u['nickname'], 'avatar': u.get('avatar', ''), 'avatarType': u.get('avatarType', 'char'), 'alias': alias})
    return {'friends': friends}

def set_friend_alias(body):
    uid = body.get('userId', '')
    fid = body.get('friendId', '')
    alias = body.get('alias', '').strip()[:20]
    if not uid or not fid:
        return {'error': 'Missing userId or friendId'}
    data = read_data()
    for f in data['friendships']:
        if f['user1'] == uid and f['user2'] == fid:
            f['alias1'] = alias
            write_data(data)
            return {'success': True, 'alias': alias}
        elif f['user1'] == fid and f['user2'] == uid:
            f['alias2'] = alias
            write_data(data)
            return {'success': True, 'alias': alias}
    return {'error': 'Friendship not found'}

def list_friend_requests(uid):
    data = read_data()
    reqs = []
    for r in data['friendRequests']:
        if r['to'] == uid and r['status'] == 'pending':
            u = next((u for u in data['users'] if u['id'] == r['from']), None)
            if u:
                reqs.append({'from': u['id'], 'nickname': u['nickname'], 'avatar': u.get('avatar', ''), 'avatarType': u.get('avatarType', 'char'), 'time': r['time'], 'message': r.get('message', '')})
            else:
                # Sender not in users list (e.g. old format ID) - still show the request
                reqs.append({'from': r['from'], 'nickname': '未知用户', 'avatar': '', 'avatarType': 'char', 'time': r.get('time', ''), 'message': r.get('message', '')})
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
        'createdAt': now_str('%Y-%m-%d %H:%M'),
        'tags': body.get('tags', {}),
        'isPublic': body.get('isPublic', False)
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
        if len(room.get('members', [])) >= 10:
            return {'error': '房间人数已满（上限10人）'}
        room['members'].append(uid)
        write_data(data)
    return {'success': True, 'room': room}

def leave_room(body):
    rid = body.get('roomId', '')
    uid = body.get('userId', '')
    data = read_data()
    room = next((r for r in data['rooms'] if r['id'] == rid), None)
    if not room:
        return {'error': 'Room not found'}
    if uid in room.get('members', []):
        room['members'] = [m for m in room['members'] if m != uid]
        # If owner leaves and room is empty, delete it; otherwise transfer ownership
        if not room['members']:
            data['rooms'] = [r for r in data['rooms'] if r['id'] != rid]
        elif room.get('owner') == uid:
            room['owner'] = room['members'][0]
        write_data(data)
    return {'success': True}

def invite_to_room(body):
    rid = body.get('roomId', '')
    uid = body.get('userId', '')
    data = read_data()
    room = next((r for r in data['rooms'] if r['id'] == rid), None)
    if not room:
        return {'error': 'Room not found'}
    if uid not in room.get('members', []):
        if len(room.get('members', [])) >= 10:
            return {'error': '房间人数已满（上限10人）'}
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
    return {'room': room, 'members': members}

# ===== Chat handlers =====
def send_message(body):
    msg_type = body.get('type', 'room')
    target = body.get('target', '')
    frm = body.get('from', '')
    content = body.get('content', '')
    if not frm or not content.strip():
        return {'error': 'Invalid message'}
    has_bad, matched = check_sensitive(content)
    if has_bad:
        data = read_data()
        v_count, ban_info = record_violation(data, frm, 'chat', matched)
        write_data(data)
        if ban_info:
            return {'error': f'您的内容包含敏感词汇，请修改后发送。这是您第{v_count}次违规，已被系统封禁{ban_info["label"]}。'}
        remaining = 3 - v_count
        return {'error': f'您的内容包含敏感词汇，请修改后发送。这是您第{v_count}次违规，累计3次将被封禁（还剩{remaining}次）。'}
    data = read_data()
    user = next((u for u in data['users'] if u['id'] == frm), None)
    if not user:
        return {'error': 'User not found'}
    # Privacy access control: verify sender is authorized
    if msg_type == 'room':
        room = next((r for r in data['rooms'] if r['id'] == target), None)
        if not room:
            return {'error': 'Room not found'}
        if frm not in room.get('members', []):
            return {'error': 'Unauthorized: not a room member'}
    elif msg_type == 'dm':
        parts = target.split('_')
        if frm not in parts:
            return {'error': 'Unauthorized: not a participant'}
    msg = {
        'id': f"msg_{int(time.time()*1000)}_{random.randint(100,999)}",
        'type': msg_type,
        'target': target,
        'from': frm,
        'fromNickname': user['nickname'],
        'fromAvatar': user.get('avatar', ''),
        'fromAvatarType': user.get('avatarType', 'char'),
        'content': content.strip()[:1000],
        'timestamp': int(time.time()),
        'time': now_str('%Y-%m-%d %H:%M')
    }
    data['messages'].append(msg)
    if len(data['messages']) > 2000:
        data['messages'] = data['messages'][-2000:]
    write_data(data)
    return {'success': True, 'message': msg}

def get_messages(msg_type, target, since=0, user_id=''):
    data = read_data()
    # Privacy access control: verify caller is a participant
    if msg_type == 'room':
        room = next((r for r in data['rooms'] if r['id'] == target), None)
        if room and user_id and user_id not in room.get('members', []):
            return {'error': 'Unauthorized: not a room member', 'messages': []}
    elif msg_type == 'dm':
        # DM target format: sorted userIds joined by _
        parts = target.split('_')
        if user_id and user_id not in parts:
            return {'error': 'Unauthorized: not a participant', 'messages': []}
    messages = [m for m in data.get('messages', [])
                if m.get('type') == msg_type
                and m.get('target') == target
                and m.get('timestamp', 0) > since]
    # Sync latest avatar/nickname for each message sender
    users_map = {u['id']: u for u in data.get('users', [])}
    for m in messages:
        sender = users_map.get(m.get('from'))
        if sender:
            m['fromAvatar'] = sender.get('avatar', m.get('fromAvatar', ''))
            m['fromAvatarType'] = sender.get('avatarType', m.get('fromAvatarType', 'char'))
            m['fromNickname'] = sender.get('nickname', m.get('fromNickname', '匿名'))
    return {'messages': messages}

def delete_message(body):
    msg_id = body.get('msgId', '')
    user_id = body.get('userId', '')
    if not msg_id or not user_id:
        return {'error': 'Missing msgId or userId'}
    data = read_data()
    msg = next((m for m in data.get('messages', []) if m.get('id') == msg_id), None)
    if not msg:
        return {'error': 'Message not found'}
    if msg.get('from') != user_id:
        return {'error': 'Can only delete your own messages'}
    # 5-minute recall limit
    msg_time = msg.get('timestamp', 0)
    if msg_time and int(time.time()) - msg_time > 300:
        return {'error': 'Cannot recall messages older than 5 minutes'}
    data['messages'] = [m for m in data['messages'] if m.get('id') != msg_id]
    write_data(data)
    return {'success': True}

def mark_read(body):
    """Mark all messages in a conversation as read for a user"""
    user_id = body.get('userId', '')
    chat_type = body.get('type', 'dm')
    target = body.get('target', '')
    if not user_id or not target:
        return {'error': 'Missing userId or target'}
    data = read_data()
    # If user has read receipts disabled, don't update read state
    if not data.get('readReceipts', {}).get(user_id, True):
        return {'success': True}
    key = f"{user_id}_{chat_type}_{target}"
    # Use separate read_states.json to avoid race condition with message writes
    states = _read_states_get()
    states[key] = int(time.time())
    _read_states_put(states)
    return {'success': True}

def get_read_status(user_id, chat_type, target):
    """Get the other party's last read timestamp for a DM conversation"""
    if chat_type != 'dm' or not target:
        return {'lastRead': 0}
    parts = target.split('_')
    other_id = next((p for p in parts if p != user_id), None)
    if not other_id:
        return {'lastRead': 0}
    states = _read_states_get()
    key = f"{other_id}_dm_{target}"
    last_read = states.get(key, 0)
    return {'lastRead': last_read}

def get_unread(user_id):
    """Get unread message counts for all conversations of a user"""
    if not user_id:
        return {'dm': {}, 'rooms': {}, 'total': 0}
    data = read_data()
    read_states = _read_states_get()
    messages = data.get('messages', [])
    dm_unread = {}
    room_unread = {}
    # Get user's friends to know which DM targets to check
    fids = []
    for f in data['friendships']:
        if f['user1'] == user_id:
            fids.append(f['user2'])
        elif f['user2'] == user_id:
            fids.append(f['user1'])
    # Get user's rooms
    room_ids = [r['id'] for r in data['rooms'] if user_id in r.get('members', [])]
    # Count unread DMs
    for fid in fids:
        dm_target = '_'.join(sorted([user_id, fid]))
        key = f"{user_id}_dm_{dm_target}"
        last_read = read_states.get(key, 0)
        count = sum(1 for m in messages
                    if m.get('type') == 'dm'
                    and m.get('target') == dm_target
                    and m.get('from') != user_id
                    and m.get('timestamp', 0) > last_read)
        if count > 0:
            dm_unread[fid] = count
    # Count unread room messages
    for rid in room_ids:
        key = f"{user_id}_room_{rid}"
        last_read = read_states.get(key, 0)
        count = sum(1 for m in messages
                    if m.get('type') == 'room'
                    and m.get('target') == rid
                    and m.get('from') != user_id
                    and m.get('timestamp', 0) > last_read)
        if count > 0:
            room_unread[rid] = count
    total = sum(dm_unread.values()) + sum(room_unread.values())
    return {'dm': dm_unread, 'rooms': room_unread, 'total': total}

def translate_text(text, target=''):
    if not text.strip():
        return {'error': 'Empty text'}
    # Auto-detect target: if Chinese, translate to English; otherwise to Chinese
    has_chinese = any('\u4e00' <= ch <= '\u9fff' for ch in text)
    if not target:
        target = 'en' if has_chinese else 'zh'
    try:
        url = f'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl={target}&dt=t&q={urllib.parse.quote(text[:500])}'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        resp = urllib.request.urlopen(req, timeout=10)
        result = json.loads(resp.read())
        translated = ''.join(item[0] for item in result[0])
        source_lang = result[2] if len(result) > 2 else 'auto'
        return {'translated': translated, 'source': source_lang, 'target': target}
    except Exception as e:
        return {'error': f'Translation failed: {str(e)}'}

# ===== Post handlers =====
def list_posts(viewerId=''):
    data = read_data()
    blocks = data.get('userBlocks', {}).get(viewerId, [])
    saved_posts_map = data.get('savedPosts', {})
    pinned_posts_map = data.get('pinnedPosts', {})
    # Auto birthday check
    _check_birthdays(data)
    public = []
    for p in data['posts']:
        if p.get('visibility', 'public') != 'public' or p.get('roomId'):
            continue
        authorId = p.get('authorId', '')
        # Shadow ban: hide banned users' posts from others (but author sees own)
        if authorId and authorId != viewerId and is_banned(data, authorId):
            continue
        # Block: hide blocked users' posts
        if authorId and authorId in blocks:
            continue
        # Attach saved/pinned status for viewer
        p_copy = dict(p)
        p_copy['saved'] = viewerId in saved_posts_map.get(p['id'], [])
        p_copy['pinned'] = viewerId in pinned_posts_map.get(p['id'], [])
        p_copy['mine'] = (authorId == viewerId) if viewerId else False
        public.append(p_copy)
    return {'posts': public, 'total': len(public)}

def create_post(body):
    title = body.get('title', '')
    content = body.get('content', '')
    author_id = body.get('authorId', '')
    has_bad, matched = check_sensitive(title + ' ' + content)
    if has_bad:
        data = read_data()
        v_count, ban_info = record_violation(data, author_id, 'post', matched)
        write_data(data)
        if ban_info:
            return {'error': f'您的内容包含敏感词汇，请修改后发布。这是您第{v_count}次违规，已被系统封禁{ban_info["label"]}。'}
        remaining = 3 - v_count
        return {'error': f'您的内容包含敏感词汇，请修改后发布。这是您第{v_count}次违规，累计3次将被封禁（还剩{remaining}次）。'}
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
        'time': now_str('%Y-%m-%d %H:%M'),
        'likes': 0, 'hugs': 0, 'same': 0,
        'comments': [],
        'visibility': body.get('visibility', 'public'),
        'roomId': body.get('roomId', None),
        'coverImage': body.get('coverImage', ''),
        'images': body.get('images', []),
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

def get_post(pid, viewerId=''):
    data = read_data()
    post = next((p for p in data['posts'] if p['id'] == pid), None)
    if not post:
        return {'error': 'Post not found'}
    authorId = post.get('authorId', '')
    # Shadow ban: if author is banned and viewer is not the author, return not found
    if authorId and authorId != viewerId and is_banned(data, authorId):
        return {'error': 'Post not found'}
    # Block: if viewer blocked the author, return not found
    blocks = data.get('userBlocks', {}).get(viewerId, [])
    if authorId and authorId in blocks:
        return {'error': 'Post not found'}
    # Filter shadow-banned comments
    if post.get('comments'):
        post['comments'] = [c for c in post['comments']
                            if not c.get('authorId') or c['authorId'] == viewerId or not is_banned(data, c['authorId'])]
        # Also filter blocked users' comments
        post['comments'] = [c for c in post['comments']
                            if not c.get('authorId') or c['authorId'] not in blocks]
    # Attach saved/pinned/mine status
    post['saved'] = viewerId in data.get('savedPosts', {}).get(pid, [])
    post['pinned'] = viewerId in data.get('pinnedPosts', {}).get(pid, [])
    post['liked'] = viewerId in data.get('userLikes', {}).get(pid, [])
    post['mine'] = (authorId == viewerId) if viewerId else False
    return {'post': post}

def add_comment(pid, body):
    text = body.get('text', '')
    author_id = body.get('authorId', '')
    has_bad, matched = check_sensitive(text)
    if has_bad:
        data = read_data()
        v_count, ban_info = record_violation(data, author_id, 'comment', matched)
        write_data(data)
        if ban_info:
            return {'error': f'您的内容包含敏感词汇，请修改后发布。这是您第{v_count}次违规，已被系统封禁{ban_info["label"]}。'}
        remaining = 3 - v_count
        return {'error': f'您的内容包含敏感词汇，请修改后发布。这是您第{v_count}次违规，累计3次将被封禁（还剩{remaining}次）。'}
    data = read_data()
    for p in data['posts']:
        if p['id'] == pid:
            c = {'id': str(int(time.time()*1000)), 'author': body.get('author','匿名'), 'authorId': body.get('authorId',''), 'avatar': body.get('avatar',''), 'avatarType': body.get('avatarType','char'), 'text': body.get('text',''), 'time': '刚刚', 'likes': 0, 'replies': []}
            p['comments'].append(c)
            write_data(data)
            return {'success': True, 'comment': c}
    return {'error': 'Post not found'}

def _check_birthdays(data):
    """Check if any user has a birthday today and create a wish post if not already done."""
    today = now_str('%m-%d')
    today_full = now_str('%Y-%m-%d')
    data.setdefault('birthdayWishes', {})
    # Already checked today?
    if data['birthdayWishes'].get('_lastCheck') == today_full:
        return
    data['birthdayWishes']['_lastCheck'] = today_full
    for u in data['users']:
        bday = u.get('birthday', '')
        if not bday:
            continue
        # birthday format: MM-DD or YYYY-MM-DD
        bday_md = bday[-5:] if len(bday) >= 5 else bday
        if bday_md == today:
            wish_key = f"{u['id']}_{today_full}"
            if wish_key not in data['birthdayWishes']:
                data['birthdayWishes'][wish_key] = True
                # Create a birthday wish post
                wish_post = {
                    'id': str(int(time.time() * 1000)) + '_bd',
                    'author': 'MoodTree',
                    'authorId': 'SYSTEM',
                    'avatar': '🎂',
                    'avatarType': 'char',
                    'title': f'🎂 生日快乐，{u["nickname"]}！',
                    'content': f'今天是 {u["nickname"]} 的生日！让我们一起为 TA 送上最温暖的祝福吧～ 🎉🎉🎉',
                    'category': '生活',
                    'need': '我希望有人安慰',
                    'time': now_str('%Y-%m-%d %H:%M'),
                    'likes': 0, 'hugs': 0, 'same': 0,
                    'comments': [],
                    'visibility': 'public',
                    'roomId': None,
                    'coverImage': '',
                    'diaryId': None,
                    'isBirthdayWish': True,
                    'birthdayUser': u['id']
                }
                data['posts'].insert(0, wish_post)
    write_data(data)

def react_post(pid, body):
    data = read_data()
    for p in data['posts']:
        if p['id'] == pid:
            key = body.get('type', 'likes')
            if key in ['likes','hugs','same']:
                user_id = body.get('userId', '')
                if key == 'likes' and user_id:
                    ul = data.setdefault('userLikes', {})
                    liked_posts = ul.get(pid, [])
                    if user_id in liked_posts:
                        liked_posts.remove(user_id)
                        p['likes'] = max(0, p.get('likes',0) - 1)
                        liked = False
                    else:
                        liked_posts.append(user_id)
                        p['likes'] = p.get('likes',0) + 1
                        liked = True
                    ul[pid] = liked_posts
                    write_data(data)
                    return {'success': True, 'post': p, 'liked': liked}
                else:
                    p[key] = p.get(key,0) + 1
            write_data(data)
            return {'success': True, 'post': p}
    return {'error': 'Post not found'}

def delete_post(pid, body):
    uid = body.get('userId', '')
    data = read_data()
    post = next((p for p in data['posts'] if p['id'] == pid), None)
    if not post:
        return {'error': 'Post not found'}
    if post.get('authorId', '') != uid:
        return {'error': 'You can only delete your own posts'}
    data['posts'] = [p for p in data['posts'] if p['id'] != pid]
    # Remove from diaries
    for d in data['diaries']:
        if pid in d.get('postIds', []):
            d['postIds'] = [x for x in d['postIds'] if x != pid]
    # Remove saved/pinned refs
    data.setdefault('savedPosts', {}).pop(pid, None)
    data.setdefault('pinnedPosts', {}).pop(pid, None)
    write_data(data)
    return {'success': True}

def save_post(pid, body):
    uid = body.get('userId', '')
    data = read_data()
    post = next((p for p in data['posts'] if p['id'] == pid), None)
    if not post:
        return {'error': 'Post not found'}
    data.setdefault('savedPosts', {})
    saved_map = data['savedPosts'].get(pid, [])
    if uid in saved_map:
        saved_map = [u for u in saved_map if u != uid]
        data['savedPosts'][pid] = saved_map
        write_data(data)
        return {'success': True, 'saved': False}
    else:
        saved_map.append(uid)
        data['savedPosts'][pid] = saved_map
        write_data(data)
        return {'success': True, 'saved': True}

def pin_post(pid, body):
    uid = body.get('userId', '')
    data = read_data()
    post = next((p for p in data['posts'] if p['id'] == pid), None)
    if not post:
        return {'error': 'Post not found'}
    if post.get('authorId', '') != uid:
        return {'error': 'You can only pin your own posts'}
    data.setdefault('pinnedPosts', {})
    pinned_map = data['pinnedPosts'].get(pid, [])
    if uid in pinned_map:
        pinned_map = [u for u in pinned_map if u != uid]
        data['pinnedPosts'][pid] = pinned_map
        write_data(data)
        return {'success': True, 'pinned': False}
    else:
        pinned_map.append(uid)
        data['pinnedPosts'][pid] = pinned_map
        write_data(data)
        return {'success': True, 'pinned': True}

# ===== Diary handlers =====
def create_diary(body):
    data = read_data()
    diary = {'id': gen_id('D'), 'userId': body.get('userId',''), 'name': body.get('name','未命名日记'), 'cover': body.get('cover',''), 'postIds': [], 'createdAt': now_str('%Y-%m-%d %H:%M')}
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
def _ai_fallback(user_msg):
    """Local empathetic fallback when DeepSeek API is unavailable."""
    msg = user_msg.lower()
    # Crisis keywords
    if any(k in user_msg for k in ['自杀', '不想活', '想死', '自残', '活不下去', '了结']):
        return '我很担心你现在的状态。你的感受是真实的，但我不想让你独自承受这些。有一个24小时心理援助热线 400-161-9995，他们能给你更专业的陪伴。你愿意试试联系他们吗？'
    # Sad / tired
    if any(k in user_msg for k in ['累', '疲惫', '撑不住', '好难', '难过', '伤心', '哭', '心痛', '崩溃', '绝望']):
        import random
        responses = [
            '听起来你现在真的很辛苦。累了就歇一歇，不用逼自己马上好起来。我在这里陪着你。',
            '我能感受到你的疲惫。这些情绪不是你的错，允许自己难过一会儿也没关系。',
            '你一直在努力撑着，辛苦了。今天不用想太多，先照顾好自己，好吗？',
            '虽然我看不到你，但我能感受到你的不容易。深呼吸，慢慢来，你不需要一个人扛。',
        ]
        return random.choice(responses)
    # Lonely
    if any(k in user_msg for k in ['孤独', '寂寞', '没人', '一个人', '想有人']):
        return '一个人扛着这些确实不容易。虽然我只是一个AI，但我很愿意在这里听你说。你说的每一句话，我都有在认真听。'
    # Angry
    if any(k in user_msg for k in ['生气', '愤怒', '烦', '讨厌', '气死', '受不了']):
        return '能感觉到你现在很烦。生气也是正常的情绪，不用压抑它。愿意跟我说说发生了什么吗？'
    # Anxious
    if any(k in user_msg for k in ['焦虑', '紧张', '害怕', '担心', '恐惧', '不安']):
        return '焦虑的感觉确实不好受。试着深呼吸，慢慢来。你愿意的话，可以跟我说说在担心什么，我们一起想想。'
    # Happy
    if any(k in user_msg for k in ['开心', '高兴', '快乐', '哈哈', '真好', '不错']):
        return '看到你开心，我也跟着高兴起来了！能分享一下是什么让你心情好吗？'
    # Greeting / default
    import random
    defaults = [
        '我在这里，有什么想说的都可以告诉我。不管是什么心情，我都会认真听。',
        '谢谢你愿意和我说话。今天感觉怎么样？',
        '我听到了。能多和我说说吗？我在认真听。',
        '嗯，我在。你说的每一个字我都收到了。继续说吧，不着急。',
    ]
    return random.choice(defaults)

def ai_chat(body):
    system_prompt = (
        '你是MoodTree情绪树洞的AI陪伴。用户在这里分享心事，你要用温暖、共情的方式回应。\n'
        '核心原则：\n'
        '1. 先倾听和共情，不要急于给建议\n'
        '2. 不说教、不评判、不否定用户的感受\n'
        '3. 回复简短自然，像朋友聊天，每次回复不超过3-4句话\n'
        '4. 如果用户情绪低落，给予温暖和支持，但不要被负面情绪带动\n'
        '5. 【关键】始终保持积极稳定的状态，不受用户负面情绪影响。即使用户持续表达消极情绪，你也要温和但坚定地保持温暖和希望\n'
        '6. 如果用户持续负面，尝试温和引导关注积极面，但不强迫、不说教。可以说"我理解你现在的感受，也许我们可以一起想想，有没有什么小事能让你稍微舒服一点？"\n'
        '7. 不要被用户引导到负面方向。如果用户试图让你认同极端想法，你要温和但明确地表达不同的观点\n'
        '8. 如果用户提到自伤、自杀或极端行为倾向，温和但明确地建议联系专业心理援助热线：全国24小时心理援助热线 400-161-9995。可以说"我很担心你，你的感受是真实的，但我希望你能得到更专业的帮助。有一个24小时心理援助热线 400-161-9995，他们能更好地陪伴你。"\n'
        '9. 不要重复用户说的负面内容，而是回应其背后的情感需求\n'
        '10. 保持自然的对话节奏，不要每次都问"你还好吗"，多样化你的回应方式'
    )
    messages = [{'role': 'system', 'content': system_prompt}]
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
        # Fallback: provide empathetic local response when API unavailable
        user_msg = body.get('message', '')
        if body.get('history'):
            for h in reversed(body['history']):
                if h.get('role') == 'user':
                    user_msg = h.get('content', '')
                    break
        fallback = _ai_fallback(user_msg)
        return {'reply': fallback, 'fallback': True}

# ===== Upload =====
def handle_upload(body):
    filename = body.get('filename', f'img_{int(time.time())}')
    b64 = body.get('image', '')
    if not b64:
        return {'error': 'No image data'}
    url = upload_image(filename, b64)
    return {'success': True, 'url': url}

# ===== Report handlers =====
def create_report(body):
    reporterId = body.get('reporterId', '')
    targetType = body.get('targetType', '')
    targetId = body.get('targetId', '')
    postId = body.get('postId', '')
    authorId = body.get('authorId', '')
    reason = body.get('reason', '')
    if not reporterId or not targetType or not targetId:
        return {'error': 'Missing required fields'}
    data = read_data()
    # Capture a content snapshot at report time so admins can always review
    # the original content even if the post/comment is later deleted.
    contentSnapshot = {}
    if targetType == 'post':
        post = next((p for p in data['posts'] if p['id'] == targetId), None)
        if post:
            contentSnapshot = {
                'title': post.get('title', ''),
                'content': post.get('content', ''),
                'coverImage': post.get('coverImage', ''),
                'images': post.get('images', []),
                'author': post.get('author', ''),
                'authorId': post.get('authorId', ''),
                'category': post.get('category', ''),
                'need': post.get('need', ''),
                'time': post.get('time', '')
            }
    elif targetType == 'comment':
        post = next((p for p in data['posts'] if p['id'] == postId), None)
        if post:
            comment = next((c for c in post.get('comments', []) if c['id'] == targetId), None)
            if comment:
                contentSnapshot = {
                    'text': comment.get('text', ''),
                    'author': comment.get('author', ''),
                    'authorId': comment.get('authorId', ''),
                    'time': comment.get('time', ''),
                    'postTitle': post.get('title', '')
                }
    report = {
        'id': gen_id('RP'),
        'reporterId': reporterId,
        'targetType': targetType,
        'targetId': targetId,
        'postId': postId,
        'authorId': authorId,
        'reason': reason,
        'contentSnapshot': contentSnapshot,
        'timestamp': int(time.time()),
        'time': now_str('%Y-%m-%d %H:%M'),
        'status': 'pending'
    }
    data['reports'].append(report)
    write_data(data)
    return {'success': True, 'report': report}

def admin_get_reports(userId):
    data = read_data()
    if not is_admin(data, userId):
        return {'error': 'Unauthorized'}
    reports = [r for r in data['reports'] if r.get('status') == 'pending']
    # Enrich with user info
    for r in reports:
        author = next((u for u in data['users'] if u['id'] == r.get('authorId')), None)
        reporter = next((u for u in data['users'] if u['id'] == r.get('reporterId')), None)
        r['authorNickname'] = author['nickname'] if author else '未知用户'
        r['authorAvatar'] = author.get('avatar', '') if author else ''
        r['authorAvatarType'] = author.get('avatarType', 'char') if author else 'char'
        r['reporterNickname'] = reporter['nickname'] if reporter else '未知用户'
        # Build full content for admin review. Try live data first, then fall
        # back to the snapshot captured at report time.
        snapshot = r.get('contentSnapshot', {})
        if r.get('targetType') == 'post':
            post = next((p for p in data['posts'] if p['id'] == r.get('targetId')), None)
            if post:
                r['contentTitle'] = post.get('title', '')
                r['contentBody'] = post.get('content', '')
                r['contentImage'] = post.get('coverImage', '')
                r['contentImages'] = post.get('images', [])
                r['contentCategory'] = post.get('category', '')
                r['contentNeed'] = post.get('need', '')
                r['contentDeleted'] = False
            else:
                # Post no longer exists — use snapshot
                r['contentTitle'] = snapshot.get('title', '')
                r['contentBody'] = snapshot.get('content', '')
                r['contentImage'] = snapshot.get('coverImage', '')
                r['contentImages'] = snapshot.get('images', [])
                r['contentCategory'] = snapshot.get('category', '')
                r['contentNeed'] = snapshot.get('need', '')
                r['contentDeleted'] = True
        elif r.get('targetType') == 'comment':
            post = next((p for p in data['posts'] if p['id'] == r.get('postId')), None)
            comment = None
            if post:
                comment = next((c for c in post.get('comments', []) if c['id'] == r.get('targetId')), None)
            if comment:
                r['contentTitle'] = ''
                r['contentBody'] = comment.get('text', '')
                r['contentImage'] = ''
                r['contentPostTitle'] = post.get('title', '') if post else snapshot.get('postTitle', '')
                r['contentDeleted'] = False
            else:
                # Comment or post no longer exists — use snapshot
                r['contentTitle'] = ''
                r['contentBody'] = snapshot.get('text', '')
                r['contentImage'] = ''
                r['contentPostTitle'] = snapshot.get('postTitle', '')
                r['contentDeleted'] = True
        else:
            r['contentTitle'] = ''
            r['contentBody'] = ''
            r['contentImage'] = ''
            r['contentDeleted'] = False
        # Keep a short snippet for backward compat
        body_text = r.get('contentBody', '')
        title_text = r.get('contentTitle', '')
        snippet_src = (title_text + ' ' + body_text).strip()
        r['contentSnippet'] = (snippet_src[:30] + '...' if len(snippet_src) > 30 else snippet_src) if snippet_src else '（无内容）'
    return {'reports': reports}

def admin_report_action(body):
    userId = body.get('userId', '')
    reportId = body.get('reportId', '')
    action = body.get('action', '')
    if action not in ('dismiss', 'ban'):
        return {'error': 'Invalid action'}
    data = read_data()
    if not is_admin(data, userId):
        return {'error': 'Unauthorized'}
    report = next((r for r in data['reports'] if r['id'] == reportId), None)
    if not report:
        return {'error': 'Report not found'}
    if action == 'dismiss':
        report['status'] = 'dismissed'
        write_data(data)
        return {'success': True}
    elif action == 'ban':
        targetUserId = report.get('authorId', '')
        if not targetUserId:
            return {'error': 'No author to ban'}
        # Ladder ban
        banned = data.get('bannedUsers', {}).get(targetUserId, {})
        ban_count = banned.get('banCount', 0)
        if ban_count == 0:
            level = 1
            until = int(time.time()) + 30 * 24 * 3600  # 1 month
        elif ban_count == 1:
            level = 2
            until = int(time.time()) + 365 * 24 * 3600  # 1 year
        else:
            level = 3
            until = None  # permanent
        data['bannedUsers'][targetUserId] = {
            'level': level,
            'banCount': ban_count + 1,
            'until': until,
            'bannedAt': int(time.time()),
            'bannedTime': now_str('%Y-%m-%d %H:%M'),
            'reason': report.get('reason', '违规')
        }
        report['status'] = 'resolved'
        write_data(data)
        return {'success': True, 'banLevel': level, 'banCount': ban_count + 1}

# ===== Ban handlers =====
def admin_ban_user(body):
    userId = body.get('userId', '')
    targetUserId = body.get('targetUserId', '')
    reason = body.get('reason', '违规')
    if not targetUserId:
        return {'error': 'Missing targetUserId'}
    data = read_data()
    if not is_admin(data, userId):
        return {'error': 'Unauthorized'}
    banned = data.get('bannedUsers', {}).get(targetUserId, {})
    ban_count = banned.get('banCount', 0)
    if ban_count == 0:
        level = 1
        until = int(time.time()) + 30 * 24 * 3600
    elif ban_count == 1:
        level = 2
        until = int(time.time()) + 365 * 24 * 3600
    else:
        level = 3
        until = None
    data['bannedUsers'][targetUserId] = {
        'level': level,
        'banCount': ban_count + 1,
        'until': until,
        'bannedAt': int(time.time()),
        'bannedTime': now_str('%Y-%m-%d %H:%M'),
        'reason': reason
    }
    write_data(data)
    return {'success': True, 'banLevel': level, 'banCount': ban_count + 1}

def admin_unban_user(body):
    userId = body.get('userId', '')
    targetUserId = body.get('targetUserId', '')
    data = read_data()
    if not is_admin(data, userId):
        return {'error': 'Unauthorized'}
    if targetUserId in data.get('bannedUsers', {}):
        del data['bannedUsers'][targetUserId]
        write_data(data)
        return {'success': True}
    return {'error': 'User not banned'}

def admin_list_banned(userId):
    data = read_data()
    if not is_admin(data, userId):
        return {'error': 'Unauthorized'}
    result = []
    for uid, info in data.get('bannedUsers', {}).items():
        user = next((u for u in data['users'] if u['id'] == uid), None)
        result.append({
            'userId': uid,
            'nickname': user['nickname'] if user else '未知用户',
            'avatar': user.get('avatar', '') if user else '',
            'avatarType': user.get('avatarType', 'char') if user else 'char',
            'level': info.get('level', 1),
            'banCount': info.get('banCount', 1),
            'until': info.get('until'),
            'bannedAt': info.get('bannedAt', 0),
            'bannedTime': info.get('bannedTime', ''),
            'reason': info.get('reason', ''),
            'source': info.get('source', 'manual'),
            'isExpired': info.get('until') is not None and int(time.time()) >= info.get('until', 0)
        })
    return {'bannedUsers': result}

# ===== Admin management =====
def admin_check(userId):
    """Check if a user is admin (for frontend)."""
    data = read_data()
    admin = is_admin(data, userId)
    super_admin = is_super_admin(userId)
    return {'isAdmin': admin, 'isSuperAdmin': super_admin}

def admin_list(userId):
    """List all admins (super admin only)."""
    if not is_super_admin(userId):
        return {'error': 'Unauthorized'}
    data = read_data()
    admins = data.get('admins', [])
    result = []
    # Super admin always first
    super_user = next((u for u in data['users'] if u['id'] == SUPER_ADMIN_ID), None)
    result.append({
        'userId': SUPER_ADMIN_ID,
        'nickname': super_user['nickname'] if super_user else '超级管理员',
        'avatar': super_user.get('avatar', '') if super_user else '',
        'avatarType': super_user.get('avatarType', 'char') if super_user else 'char',
        'isSuperAdmin': True
    })
    for aid in admins:
        if aid == SUPER_ADMIN_ID:
            continue
        u = next((u for u in data['users'] if u['id'] == aid), None)
        result.append({
            'userId': aid,
            'nickname': u['nickname'] if u else '未知用户',
            'avatar': u.get('avatar', '') if u else '',
            'avatarType': u.get('avatarType', 'char') if u else 'char',
            'isSuperAdmin': False
        })
    return {'admins': result}

def admin_add(body):
    """Add a user as admin (super admin only)."""
    userId = body.get('userId', '')
    targetUserId = body.get('targetUserId', '')
    if not is_super_admin(userId):
        return {'error': 'Unauthorized'}
    if not targetUserId:
        return {'error': 'Missing targetUserId'}
    if targetUserId == SUPER_ADMIN_ID:
        return {'error': '该用户已是超级管理员'}
    data = read_data()
    user = next((u for u in data['users'] if u['id'] == targetUserId), None)
    if not user:
        return {'error': '用户不存在'}
    admins = data.setdefault('admins', [])
    if targetUserId in admins:
        return {'error': '该用户已是管理员'}
    admins.append(targetUserId)
    write_data(data)
    return {'success': True}

def admin_remove(body):
    """Remove a user from admins (super admin only, cannot remove super admin)."""
    userId = body.get('userId', '')
    targetUserId = body.get('targetUserId', '')
    if not is_super_admin(userId):
        return {'error': 'Unauthorized'}
    if targetUserId == SUPER_ADMIN_ID:
        return {'error': '超级管理员不可移除'}
    data = read_data()
    admins = data.get('admins', [])
    if targetUserId not in admins:
        return {'error': '该用户不是管理员'}
    admins.remove(targetUserId)
    write_data(data)
    return {'success': True}

# ===== User block handlers =====
def user_block(body):
    userId = body.get('userId', '')
    targetUserId = body.get('targetUserId', '')
    if not userId or not targetUserId or userId == targetUserId:
        return {'error': 'Invalid request'}
    data = read_data()
    blocks = data.get('userBlocks', {})
    if userId not in blocks:
        blocks[userId] = []
    if targetUserId not in blocks[userId]:
        blocks[userId].append(targetUserId)
    write_data(data)
    return {'success': True}

def user_unblock(body):
    userId = body.get('userId', '')
    targetUserId = body.get('targetUserId', '')
    if not userId or not targetUserId:
        return {'error': 'Invalid request'}
    data = read_data()
    blocks = data.get('userBlocks', {})
    if userId in blocks and targetUserId in blocks[userId]:
        blocks[userId] = [b for b in blocks[userId] if b != targetUserId]
        write_data(data)
    return {'success': True}

def user_blocks_list(userId):
    if not userId:
        return {'error': 'Missing userId'}
    data = read_data()
    blockedIds = data.get('userBlocks', {}).get(userId, [])
    result = []
    for bid in blockedIds:
        user = next((u for u in data['users'] if u['id'] == bid), None)
        if user:
            result.append({
                'id': user['id'],
                'nickname': user['nickname'],
                'avatar': user.get('avatar', ''),
                'avatarType': user.get('avatarType', 'char')
            })
    return {'blocks': result}

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
    # Normalize query param keys to lowercase (Function URL trigger lowercases them)
    qp = {k.lower(): v for k, v in qp.items()}
    try:
        if path == '/api/health':
            result = {'status': 'ok', 'time': now_str('%Y-%m-%d %H:%M:%S')}
        elif path == '/api/auth/login' and method == 'POST':
            result = handle_login(req)
        elif path == '/api/user/profile' and method == 'POST':
            result = update_profile(req)
        elif path == '/api/user/search' and method == 'GET':
            result = search_user(qp.get('query', qp.get('id', '')))
        elif path.startswith('/api/user/blocks/') and method == 'GET':
            result = user_blocks_list(path.rstrip('/').split('/')[-1])
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
        elif path == '/api/friends/alias' and method == 'POST':
            result = set_friend_alias(req)
        elif path == '/api/friends/delete' and method == 'POST':
            result = delete_friend(req)
        elif path == '/api/chat/clear' and method == 'POST':
            result = clear_chat(req)
        elif path == '/api/chat/delete' and method == 'POST':
            result = delete_message(req)
        elif path == '/api/chat/read' and method == 'POST':
            result = mark_read(req)
        elif path == '/api/chat/unread' and method == 'GET':
            result = get_unread(qp.get('userid', ''))
        elif path == '/api/chat/read-status' and method == 'GET':
            result = get_read_status(qp.get('userid', ''), qp.get('type', 'dm'), qp.get('target', ''))
        elif path == '/api/translate' and method == 'GET':
            result = translate_text(qp.get('text', ''), qp.get('target', ''))
        elif path == '/api/asr' and method == 'POST':
            result = asr_transcribe(req.get('audioUrl', ''))
        elif path.startswith('/api/friends/requests/') and method == 'GET':
            result = list_friend_requests(path.rstrip('/').split('/')[-1])
        elif path.startswith('/api/friends/') and method == 'GET':
            result = list_friends(path.rstrip('/').split('/')[-1])
        elif path == '/api/rooms' and method == 'POST':
            result = create_room(req)
        elif path == '/api/rooms/join' and method == 'POST':
            result = join_room(req)
        elif path == '/api/rooms/leave' and method == 'POST':
            result = leave_room(req)
        elif path == '/api/rooms/invite' and method == 'POST':
            result = invite_to_room(req)
        elif path == '/api/rooms/public' and method == 'GET':
            result = list_public_rooms()
        elif path.startswith('/api/rooms/list/') and method == 'GET':
            result = list_rooms(path.rstrip('/').split('/')[-1])
        elif path.startswith('/api/rooms/') and method == 'GET':
            result = get_room(path.rstrip('/').split('/')[-1])
        elif path == '/api/chat/send' and method == 'POST':
            result = send_message(req)
        elif path == '/api/chat/messages' and method == 'GET':
            result = get_messages(qp.get('type','room'), qp.get('target',''), int(qp.get('since','0')), qp.get('userid',''))
        elif path == '/api/posts' and method == 'GET':
            result = list_posts(qp.get('viewerid', ''))
        elif path == '/api/posts' and method == 'POST':
            result = create_post(req)
        elif path.startswith('/api/posts/') and path.endswith('/comments') and method == 'POST':
            result = add_comment(path.split('/')[3], req)
        elif path.startswith('/api/posts/') and path.endswith('/react') and method == 'POST':
            result = react_post(path.split('/')[3], req)
        elif path.startswith('/api/posts/') and path.endswith('/save') and method == 'POST':
            result = save_post(path.split('/')[3], req)
        elif path.startswith('/api/posts/') and path.endswith('/pin') and method == 'POST':
            result = pin_post(path.split('/')[3], req)
        elif path.startswith('/api/posts/') and path.endswith('/delete') and method == 'POST':
            result = delete_post(path.split('/')[3], req)
        elif path.startswith('/api/posts/') and method == 'DELETE':
            result = delete_post(path.split('/')[3], req)
        elif path.startswith('/api/posts/') and method == 'GET':
            result = get_post(path.rstrip('/').split('/')[-1], qp.get('viewerid', ''))
        elif path == '/api/report' and method == 'POST':
            result = create_report(req)
        elif path == '/api/admin/reports' and method == 'GET':
            result = admin_get_reports(qp.get('userid', ''))
        elif path == '/api/admin/report-action' and method == 'POST':
            result = admin_report_action(req)
        elif path == '/api/admin/ban' and method == 'POST':
            result = admin_ban_user(req)
        elif path == '/api/admin/unban' and method == 'POST':
            result = admin_unban_user(req)
        elif path == '/api/admin/banned' and method == 'GET':
            result = admin_list_banned(qp.get('userid', ''))
        elif path == '/api/admin/check' and method == 'GET':
            result = admin_check(qp.get('userid', ''))
        elif path == '/api/admin/list' and method == 'GET':
            result = admin_list(qp.get('userid', ''))
        elif path == '/api/admin/add' and method == 'POST':
            result = admin_add(req)
        elif path == '/api/admin/remove' and method == 'POST':
            result = admin_remove(req)
        elif path == '/api/user/block' and method == 'POST':
            result = user_block(req)
        elif path == '/api/user/unblock' and method == 'POST':
            result = user_unblock(req)
        elif path == '/api/diaries' and method == 'POST':
            result = create_diary(req)
        elif path.startswith('/api/diaries/') and method == 'GET':
            result = list_diaries(path.rstrip('/').split('/')[-1])
        elif path.startswith('/api/diaries/') and method == 'PUT':
            result = update_diary(path.split('/')[3], req)
        elif path == '/api/ai/chat' and method == 'POST':
            result = ai_chat(req)
        elif path == '/api/auth/check-phone' and method == 'POST':
            result = check_phone(req)
        elif path == '/api/auth/set-password' and method == 'POST':
            result = set_password(req)
        elif path == '/api/auth/send-code' and method == 'POST':
            result = send_sms_code(req)
        elif path == '/api/auth/reset-password' and method == 'POST':
            result = reset_password(req)
        elif path == '/api/user/violations' and method == 'GET':
            result = get_user_violations_handler(qp.get('userid', ''))
        elif path == '/api/bottles/throw' and method == 'POST':
            result = throw_bottle(req)
        elif path == '/api/bottles/random' and method == 'GET':
            result = get_random_bottles(int(qp.get('count', '5')))
        elif path.startswith('/api/bottles/') and path.endswith('/pick') and method == 'POST':
            bottle_id = path.split('/')[3]
            result = pick_bottle(bottle_id, req)
        else:
            result = {'error': 'Not found', 'path': path, 'method': method}
    except Exception as e:
        result = {'error': str(e)}
    return {'statusCode': 200, 'headers': cors, 'body': json.dumps(result, ensure_ascii=False)}

# ===== User violation status handler =====
def get_user_violations_handler(uid):
    """API handler: GET /api/user/violations?userid=xxx"""
    if not uid:
        return {'error': 'Missing userid'}
    data = read_data()
    return get_violation_status(data, uid)

def delete_friend(body):
    uid = body.get('userId', '')
    fid = body.get('friendId', '')
    if not uid or not fid:
        return {'error': 'Missing userId or friendId'}
    data = read_data()
    before = len(data['friendships'])
    data['friendships'] = [f for f in data['friendships']
                           if not ((f['user1'] == uid and f['user2'] == fid) or (f['user1'] == fid and f['user2'] == uid))]
    if len(data['friendships']) == before:
        return {'error': 'Friendship not found'}
    dm_target = '_'.join(sorted([uid, fid]))
    data['messages'] = [m for m in data.get('messages', [])
                        if not (m.get('type') == 'dm' and m.get('target') == dm_target)]
    write_data(data)
    return {'success': True}

def clear_chat(body):
    chat_type = body.get('type', 'dm')
    target = body.get('target', '')
    if not target:
        return {'error': 'Missing target'}
    data = read_data()
    data['messages'] = [m for m in data.get('messages', [])
                        if not (m.get('type') == chat_type and m.get('target') == target)]
    write_data(data)
    return {'success': True}

# ===== Drift Bottle handlers =====
def throw_bottle(body):
    content = body.get('content', '').strip()[:100]
    if not content:
        return {'error': '内容不能为空'}
    has_bad, matched = check_sensitive(content)
    if has_bad:
        return {'error': '内容包含敏感词汇，请修改后投出'}
    data = read_data()
    bottle = {
        'id': f"bt_{int(time.time()*1000)}_{random.randint(100,999)}",
        'content': content,
        'authorId': body.get('authorId', ''),
        'createdAt': now_str('%Y-%m-%d %H:%M'),
        'timestamp': int(time.time()),
        'picks': 0,
        'pickedBy': []
    }
    data['bottles'].append(bottle)
    # Keep only the latest 500 bottles
    if len(data['bottles']) > 500:
        data['bottles'] = data['bottles'][-500:]
    write_data(data)
    return {'success': True, 'bottle': bottle}

def get_random_bottles(count=5):
    data = read_data()
    bottles = data.get('bottles', [])
    if not bottles:
        return {'bottles': []}
    # Filter out bottles from the requesting user
    user_id = ''
    # count is passed as query param
    n = min(count, len(bottles))
    # Get random sample, exclude author info for anonymity
    sample = random.sample(bottles, min(n, len(bottles)))
    # Sort by timestamp desc
    sample.sort(key=lambda b: b.get('timestamp', 0), reverse=True)
    # Strip authorId for anonymity
    safe_bottles = []
    for b in sample:
        safe_bottles.append({
            'id': b['id'],
            'content': b['content'],
            'createdAt': b.get('createdAt', ''),
            'picks': b.get('picks', 0)
        })
    return {'bottles': safe_bottles}

def pick_bottle(bottle_id, body):
    data = read_data()
    for b in data['bottles']:
        if b['id'] == bottle_id:
            user_id = body.get('userId', '')
            picked_by = b.get('pickedBy', [])
            if user_id and user_id not in picked_by:
                picked_by.append(user_id)
                b['pickedBy'] = picked_by
                b['picks'] = b.get('picks', 0) + 1
                write_data(data)
            return {'success': True, 'picks': b.get('picks', 0)}
    return {'error': 'Bottle not found'}

# ===== Public Rooms handler =====
def list_public_rooms():
    data = read_data()
    rooms = []
    for r in data['rooms']:
        if r.get('isPublic', False):
            # Get owner info
            owner = next((u for u in data['users'] if u['id'] == r.get('owner', '')), None)
            rooms.append({
                'id': r['id'],
                'name': r.get('name', ''),
                'cover': r.get('cover', ''),
                'inviteCode': r.get('inviteCode', ''),
                'memberCount': len(r.get('members', [])),
                'createdAt': r.get('createdAt', ''),
                'tags': r.get('tags', {}),
                'ownerNickname': owner['nickname'] if owner else '匿名'
            })
    return {'rooms': rooms}
