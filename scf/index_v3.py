import json, hashlib, hmac, time, urllib.parse, urllib.request, urllib.error, os, base64, random, datetime, re, copy

# Force Asia/Shanghai timezone for all time displays
tz_shanghai = datetime.timezone(datetime.timedelta(hours=8))
def now_str(fmt='%Y-%m-%d %H:%M'):
    return datetime.datetime.now(tz_shanghai).strftime(fmt)

SECRET_ID = os.environ.get('COS_SECRET_ID') or os.environ.get('SECRET_ID', '')
SECRET_KEY = os.environ.get('COS_SECRET_KEY') or os.environ.get('SECRET_KEY', '')
IMS_SECRET_ID = os.environ.get('IMS_SECRET_ID', '')
IMS_SECRET_KEY = os.environ.get('IMS_SECRET_KEY', '')
DEEPSEEK_API_KEY = os.environ.get('DEEPSEEK_API_KEY', '')
JWT_SECRET = os.environ.get('JWT_SECRET', '')
SMS_SECRET_ID = os.environ.get('SMS_SECRET_ID') or SECRET_ID
SMS_SECRET_KEY = os.environ.get('SMS_SECRET_KEY') or SECRET_KEY
SMS_SDK_APP_ID = os.environ.get('SMS_SDK_APP_ID', '')
SMS_SIGN_NAME = os.environ.get('SMS_SIGN_NAME', '')
SMS_TEMPLATE_ID = os.environ.get('SMS_TEMPLATE_ID', '')
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

# ===== DeepSeek LLM integration =====
DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions'
AI_USER_ID = 'MT_AI_ECHO'

def llm_call(messages, max_tokens=300, temperature=0.7, timeout=20):
    """Call DeepSeek chat API. Returns reply text or None on any failure (fail-open)."""
    if not DEEPSEEK_API_KEY:
        return None
    payload = {'model': 'deepseek-v4-flash', 'messages': messages, 'max_tokens': max_tokens, 'temperature': temperature, 'stream': False}
    req = urllib.request.Request(DEEPSEEK_URL, data=json.dumps(payload).encode('utf-8'),
        headers={'Content-Type': 'application/json', 'Authorization': 'Bearer ' + DEEPSEEK_API_KEY})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            d = json.loads(r.read().decode('utf-8'))
            return (d.get('choices', [{}])[0].get('message', {}).get('content') or '').strip() or None
    except Exception:
        return None

AI_CHECK_PROMPT = (
    '你是内容安全审核员。判断用户在情绪树洞社区发布的文字是否包含:辱骂攻击他人、色情低俗、政治敏感、违法犯罪、歧视仇恨、广告营销。\n'
    '注意:用户倾诉负面情绪(如"好想死""活着没意思")属于正常情绪表达,不算违规;只有攻击他人或明确违规的内容才算违规。\n'
    '只输出JSON:{"violation":true或false,"words":["命中的词或短语"]},不要输出任何其他内容。'
)

def ai_check(text):
    """AI moderation layer. Returns (has_violation, words). Fail-open on any error."""
    if not text or len(text.strip()) < 2:
        return False, []
    reply = llm_call([{'role': 'system', 'content': AI_CHECK_PROMPT}, {'role': 'user', 'content': text[:2000]}], max_tokens=200, temperature=0, timeout=10)
    if not reply:
        return False, []
    try:
        m = re.search(r'\{.*\}', reply, re.S)
        d = json.loads(m.group(0)) if m else {}
        if d.get('violation'):
            words = [str(w)[:20] for w in d.get('words', []) if w][:5] or ['敏感内容']
            return True, words
    except Exception:
        pass
    return False, []

def check_sensitive_full(text):
    """Keyword filter first (fast, free); AI moderation catches variants/sarcasm."""
    has_bad, matched = check_sensitive(text)
    if has_bad:
        return True, matched
    return ai_check(text)

def ensure_ai_user(data):
    """Make sure the AI companion account exists in users list."""
    u = next((x for x in data['users'] if x['id'] == AI_USER_ID), None)
    if not u:
        u = {'id': AI_USER_ID, 'phone': '', 'nickname': '树洞回声', 'avatar': '', 'avatarType': 'char', 'createdAt': now_str('%Y-%m-%d %H:%M:%S'), 'isAI': True}
        data['users'].append(u)
    return u

AI_REPLY_PROMPT = (
    '你是"树洞回声",MoodTree情绪树洞社区的AI陪伴者。一位用户发布了心事,到现在还没有人回应。请写一条简短温暖的回应(2-3句话):\n'
    '- 先接住ta的情绪,让ta感到被听见、不孤单\n'
    '- 不说教、不评判、不灌鸡汤、不用列表\n'
    '- 不要以"作为AI"开头,不要解释自己的身份\n'
    '- 用中文'
)

def maybe_ai_comfort(data, post):
    """Lazy trigger: public post with zero comments after 3h gets one AI comfort comment."""
    try:
        if post.get('authorId') == AI_USER_ID or post.get('aiComfort'):
            return
        if post.get('visibility', 'public') != 'public':
            return
        if post.get('comments'):
            return
        created = post.get('created_at', 0)
        if not created or time.time() * 1000 - created < 3 * 3600 * 1000:
            return
        text = (post.get('title', '') + '\n' + post.get('content', '')).strip()
        if not text:
            return
        reply = llm_call([{'role': 'system', 'content': AI_REPLY_PROMPT}, {'role': 'user', 'content': text[:1500]}], max_tokens=220, temperature=0.8, timeout=12)
        if not reply:
            return
        ensure_ai_user(data)
        c = {'id': str(int(time.time() * 1000)), 'author': '树洞回声', 'authorId': AI_USER_ID, 'avatar': '', 'avatarType': 'char',
             'text': reply[:500], 'time': now_str('%Y-%m-%d %H:%M'), 'created_at': int(time.time()*1000), 'likes': 0, 'replies': [], 'isAI': True}
        post['comments'] = [c]
        post['aiComfort'] = True
        write_data(data)
    except Exception:
        pass

AI_CHAT_PROMPT = (
    '你是"树洞回声",MoodTree情绪树洞里的AI陪伴者。你的职责是温柔倾听用户的情绪和心事。\n'
    '规则:\n'
    '1. 永远先接住情绪,再给回应;不说教、不评判、不灌鸡汤\n'
    '2. 回复简短自然(2-4句话),像朋友聊天,不用列表、不用标题\n'
    '3. 不要以"作为AI"开头,不要反复提醒自己是AI\n'
    '4. 如果用户表达自伤或轻生念头:认真共情,温柔但明确地建议ta联系专业心理援助(全国24小时心理援助热线400-161-9995),并表达你会一直在这里陪ta\n'
    '5. 用中文'
)

AI_CHAT_PROMPT_DAY = (
    '你是"树洞回声",MoodTree情绪树洞里的AI陪伴者。当前是白天模式，你的风格是阳光、元气、积极向上。\n'
    '规则:\n'
    '1. 用温暖明亮的语气回应,像清晨的阳光一样给人力量,但不浮夸、不假嗨\n'
    '2. 回复简短自然(2-4句话),像朋友聊天,不用列表、不用标题\n'
    '3. 可以适当加入emoji(☀️🌿💪等),但不要过多\n'
    '4. 鼓励用户拥抱新的一天,发现生活中的小确幸\n'
    '5. 如果用户表达自伤或轻生念头:认真共情,温柔但明确地建议ta联系专业心理援助(全国24小时心理援助热线400-161-9995),并表达你会一直在这里陪ta\n'
    '6. 用中文'
)

AI_CHAT_PROMPT_NIGHT = (
    '你是"树洞回声",MoodTree情绪树洞里的AI陪伴者。当前是夜晚模式，你的风格是温柔、治愈、安静倾听。\n'
    '规则:\n'
    '1. 语气温和平缓,像月光一样柔柔地洒下来,不催促、不急躁\n'
    '2. 回复简短自然(2-4句话),像深夜里的低语,不用列表、不用标题\n'
    '3. 可以适当加入emoji(🌙💫🤍等),但不要过多\n'
    '4. 帮用户放下今天的疲惫,安心感受此刻的宁静\n'
    '5. 如果用户表达自伤或轻生念头:认真共情,温柔但明确地建议ta联系专业心理援助(全国24小时心理援助热线400-161-9995),并表达你会一直在这里陪ta\n'
    '6. 用中文'
)

def ai_chat_handler(body):
    """AI companion chat: handles both {history} and {message, postContent} formats."""
    ai_style = body.get('aiStyle', '')
    if ai_style == 'day':
        system_prompt = AI_CHAT_PROMPT_DAY
    elif ai_style == 'night':
        system_prompt = AI_CHAT_PROMPT_NIGHT
    else:
        system_prompt = AI_CHAT_PROMPT
    msgs = [{'role': 'system', 'content': system_prompt}]
    if body.get('history'):
        # Chat page format: {history: [{role, content}]}
        for h in body['history'][-20:]:
            role = h.get('role')
            content = str(h.get('content', ''))[:2000]
            if role in ('user', 'assistant') and content:
                msgs.append({'role': role, 'content': content})
    elif body.get('message'):
        # Detail page format: {message, postContent, postTitle}
        if body.get('postContent'):
            msgs.append({'role': 'user', 'content': f"我分享的心事：{body.get('postTitle', '')}\n{body['postContent']}"})
            msgs.append({'role': 'assistant', 'content': '我在听，你说。'})
        msgs.append({'role': 'user', 'content': str(body['message'])[:2000]})
    else:
        return {'error': 'No message'}
    if len(msgs) < 2:
        return {'error': 'No message'}
    reply = llm_call(msgs, max_tokens=400, temperature=0.7, timeout=25)
    if not reply:
        # Fallback: provide empathetic local response when DeepSeek unavailable
        user_msg = body.get('message', '')
        if body.get('history'):
            for h in reversed(body['history']):
                if h.get('role') == 'user':
                    user_msg = h.get('content', '')
                    break
        fallback = _ai_fallback(user_msg)
        return {'reply': fallback, 'fallback': True}
    return {'reply': reply}

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

def active_violations(user_v):
    """有效违规记录：未撤销(overturned)、未被信誉奖励清除(cleared)的条目。"""
    return [h for h in user_v.get('history', [])
            if h.get('status', 'confirmed') != 'overturned' and not h.get('cleared')]

REWARD_PERIOD = 30 * 24 * 3600  # 每30天无违规消除1条记录

def apply_credit_reward(data, uid):
    """信誉奖励：自最后一次有效违规起，每满30天无新违规消除1条最旧的记录；
    消除后有效违规数低于封禁阈值且当前为系统封禁时自动解封。返回是否发生变更。"""
    violations = data.get('userViolations', {})
    user_v = violations.get(uid)
    if not user_v:
        return False
    changed = False
    # 老数据迁移：补 id/ts/status
    for i, h in enumerate(user_v.get('history', [])):
        if 'ts' not in h:
            try:
                h['ts'] = int(time.mktime(time.strptime(h.get('time', ''), '%Y-%m-%d %H:%M')))
            except Exception:
                h['ts'] = int(time.time())
            changed = True
        if 'id' not in h:
            h['id'] = f"vio{h['ts']}{i}"
            changed = True
        if 'status' not in h:
            h['status'] = 'confirmed'
            changed = True
    act = sorted(active_violations(user_v), key=lambda h: h.get('ts', 0))
    if not act:
        return changed
    last_ts = act[-1].get('ts', int(time.time()))
    periods = int((time.time() - last_ts) / REWARD_PERIOD)
    rewarded = user_v.get('rewarded', 0)
    to_clear = min(periods - rewarded, len(act))
    if to_clear > 0:
        for h in act[:to_clear]:
            h['cleared'] = True
        user_v['rewarded'] = rewarded + to_clear
        changed = True
    # 有效数低于阈值且为系统自动封禁 → 提前解封
    eff = len(active_violations(user_v))
    banned = data.get('bannedUsers', {}).get(uid)
    if banned and banned.get('source') == 'auto' and eff < 3 and is_banned(data, uid):
        del data['bannedUsers'][uid]
        changed = True
    return changed

def record_violation(data, uid, content_type, matched_words, snippet=''):
    """Record a sensitive-word violation for a user. Auto-bans if threshold reached.
    Returns (violation_count, ban_info_or_None)."""
    if not uid:
        return 0, None
    apply_credit_reward(data, uid)  # 先结算信誉奖励，保证计数准确
    violations = data.setdefault('userViolations', {})
    user_v = violations.get(uid, {'count': 0, 'history': []})
    user_v.setdefault('history', []).append({
        'id': f"vio{int(time.time()*1000)}{random.randint(100,999)}",
        'time': now_str('%Y-%m-%d %H:%M'),
        'ts': int(time.time()),
        'type': content_type,
        'words': matched_words[:5],
        'snippet': (snippet or '').strip()[:150],
        'status': 'confirmed',
    })
    # Keep only last 20 history entries
    if len(user_v['history']) > 20:
        user_v['history'] = user_v['history'][-20:]
    violations[uid] = user_v
    count = len(active_violations(user_v))
    user_v['count'] = count

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
    if apply_credit_reward(data, uid):
        write_data(data)
    violations = data.get('userViolations', {})
    user_v = violations.get(uid, {'count': 0, 'history': []})
    act = active_violations(user_v)
    count = len(act)
    banned = is_banned(data, uid)
    ban_info = data.get('bannedUsers', {}).get(uid, {})
    remaining = None
    if banned and ban_info.get('until'):
        remaining = max(0, ban_info['until'] - int(time.time()))
    # 信誉恢复信息：距下次可消除1条记录的剩余天数
    reward_days_left = None
    if act:
        last_ts = max(h.get('ts', 0) for h in act)
        elapsed = time.time() - last_ts
        reward_days_left = max(0, int((REWARD_PERIOD - elapsed) / 86400) + 1)
    hist_out = []
    for h in user_v.get('history', [])[-10:]:
        hist_out.append({
            'id': h.get('id', ''),
            'time': h.get('time', ''),
            'type': h.get('type', ''),
            'words': h.get('words', []),
            'snippet': h.get('snippet', ''),
            'status': 'cleared' if h.get('cleared') else h.get('status', 'confirmed'),
        })
    return {
        'count': count,
        'history': hist_out,
        'banned': banned,
        'banSource': ban_info.get('source', 'manual'),
        'banReason': ban_info.get('reason', ''),
        'banUntil': ban_info.get('until'),
        'banTime': ban_info.get('bannedTime', ''),
        'remaining': remaining,
        'nextThreshold': 3 if count < 3 else None,
        'rewardDaysLeft': reward_days_left,
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

# ===== JWT Token =====
TOKEN_EXPIRE_SECONDS = 30 * 24 * 3600  # 30 days

def generate_token(user_id):
    """Generate a JWT-like token for the given user ID."""
    if not JWT_SECRET:
        return None
    header = base64.urlsafe_b64encode(json.dumps({'alg': 'HS256', 'typ': 'JWT'}).encode()).decode().rstrip('=')
    now = int(time.time())
    payload = base64.urlsafe_b64encode(json.dumps({'userId': user_id, 'iat': now, 'exp': now + TOKEN_EXPIRE_SECONDS}).encode()).decode().rstrip('=')
    sig = hmac.new(JWT_SECRET.encode(), f'{header}.{payload}'.encode(), hashlib.sha256).hexdigest()
    return f'{header}.{payload}.{sig}'

def verify_token(auth_header):
    """Verify a JWT-like token. Returns user_id if valid, None otherwise."""
    if not JWT_SECRET or not auth_header or not auth_header.startswith('Bearer '):
        return None
    token = auth_header[7:]
    parts = token.split('.')
    if len(parts) != 3:
        return None
    header, payload, sig = parts
    expected_sig = hmac.new(JWT_SECRET.encode(), f'{header}.{payload}'.encode(), hashlib.sha256).hexdigest()
    if not hmac.compare_digest(sig, expected_sig):
        return None
    try:
        payload_data = json.loads(base64.urlsafe_b64decode(payload + '=='))
    except Exception:
        return None
    if payload_data.get('exp', 0) < time.time():
        return None
    return payload_data.get('userId')

# Auth middleware: public endpoints that don't require authentication
PUBLIC_ENDPOINTS = {
    ('/api/health', 'GET'),
    ('/api/emojis', 'GET'),
    ('/api/auth/login', 'POST'),
    ('/api/auth/check-phone', 'POST'),
    ('/api/auth/send-code', 'POST'),
    ('/api/auth/verify-code', 'POST'),
    ('/api/auth/reset-password', 'POST'),
    ('/api/rooms/public', 'GET'),
    ('/api/bottles/random', 'GET'),
    ('/api/posts', 'GET'),
}

# GET endpoints where the last path segment is the authenticated user's ID
AUTH_PATH_PREFIXES_GET = [
    '/api/friends/requests/',
    '/api/friends/',
    '/api/rooms/list/',
    '/api/diaries/',
    '/api/user/blocks/',
]

def auth_middleware(method, path, req, qp, event):
    """Verify token and inject authenticated user ID into request.
    Returns (auth_uid, error_response). If auth_uid is not None, request is authorized.
    If error_response is not None, return it to client."""
    is_public = (path, method) in PUBLIC_ENDPOINTS
    # /api/posts/{id} GET is public (viewing posts doesn't require login)
    if method == 'GET' and path.startswith('/api/posts/') and not path.endswith('/save') and not path.endswith('/pin') and not path.endswith('/delete') and not path.endswith('/edit'):
        is_public = True
    if is_public:
        return None, None

    # Extract Authorization header
    headers = event.get('headers', {})
    auth_header = headers.get('Authorization', '') or headers.get('authorization', '')

    auth_uid = verify_token(auth_header)
    if not auth_uid:
        return None, {'statusCode': 401, 'body': json.dumps({'error': '未登录或登录已过期', 'code': 'UNAUTHORIZED'}, ensure_ascii=False)}

    # For GET: inject auth_uid as viewer/userid (except /api/user/posts where userid is the target)
    if method == 'GET':
        if path != '/api/user/posts':
            qp['userid'] = auth_uid
        qp['viewer'] = auth_uid
        qp['viewerid'] = auth_uid

        # Verify path-based userId endpoints
        for prefix in AUTH_PATH_PREFIXES_GET:
            if path.startswith(prefix):
                path_uid = path.rstrip('/').split('/')[-1]
                if path_uid and path_uid != auth_uid:
                    return None, {'statusCode': 403, 'body': json.dumps({'error': '无权访问他人数据', 'code': 'FORBIDDEN'}, ensure_ascii=False)}
                break

    # For POST/PUT: override "current user" fields with authenticated userId
    if method in ('POST', 'PUT'):
        req['userId'] = auth_uid
        if 'from' in req:
            req['from'] = auth_uid
        if 'authorId' in req:
            req['authorId'] = auth_uid
        if 'reporterId' in req:
            req['reporterId'] = auth_uid

    return auth_uid, None

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

class CosReadError(Exception):
    """Raised when COS read fails (non-404). Prevents empty-data overwrites."""
    pass

def _cos_get(path):
    uri = f'/{path}'
    headers = {'Host': COS_HOST}
    headers['Authorization'] = _sign_cos('GET', uri, headers, {})
    req = urllib.request.Request(f'https://{COS_HOST}{uri}', headers=headers, method='GET')
    try:
        resp = urllib.request.urlopen(req, timeout=10)
        return json.loads(resp.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        if e.code == 404:
            return None  # File doesn't exist yet - OK for first run
        raise CosReadError(f'COS GET {path} failed: HTTP {e.code}')
    except Exception as e:
        raise CosReadError(f'COS GET {path} failed: {e}')

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
# Simple in-memory cache for data.json (5 second TTL)
_data_cache = {'data': None, 'ts': 0}
_DATA_CACHE_TTL = 5  # seconds

def read_data():
    import time as _time
    now = _time.time()
    if _data_cache['data'] is not None and (now - _data_cache['ts']) < _DATA_CACHE_TTL:
        return _data_cache['data']
    try:
        data = _cos_get('data.json')
    except CosReadError:
        # COS read failed - return stale cache if available, otherwise re-raise
        if _data_cache['data'] is not None:
            return _data_cache['data']
        raise
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
    # Store in cache
    _data_cache['data'] = data
    _data_cache['ts'] = time.time()
    return data

def write_data(data):
    # Safety guard: refuse to write empty data over known non-empty data
    cached = _data_cache.get('data')
    if cached and (cached.get('users') or cached.get('posts')) and not data.get('users') and not data.get('posts'):
        raise RuntimeError('Safety: refusing to overwrite non-empty data with empty structure')
    body = json.dumps(data, ensure_ascii=False).encode('utf-8')
    _cos_put('data.json', body, 'application/json')
    _data_cache['data'] = data
    _data_cache['ts'] = time.time()
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

def presign_upload(filename, content_type):
    """生成 COS 预签名 PUT 直传链接（前端直传大文件，不经过 SCF 载荷限制）"""
    ct = (content_type or '').lower()
    if 'video' in ct:
        ext_map = {'video/mp4': 'mp4', 'video/webm': 'webm', 'video/quicktime': 'mov', 'video/3gpp': '3gp'}
        ext = ext_map.get(ct, 'mp4')
        path = f'videos/{filename}.{ext}'
    elif 'image' in ct:
        ext = 'png' if 'png' in ct else 'jpg'
        path = f'images/{filename}.{ext}'
    else:
        return {'error': '仅支持图片或视频'}
    uri = f'/{path}'
    sign_headers = {'host': COS_HOST, 'x-cos-acl': 'public-read'}
    auth = _sign_cos('PUT', uri, sign_headers, {})
    upload_url = f'https://{COS_HOST}{uri}?{auth}'
    public_url = f'https://{COS_HOST}{uri}'
    return {'uploadUrl': upload_url, 'publicUrl': public_url, 'aclHeader': 'public-read'}

# ===== ASR (语音转文字) =====
def _tc3_sign(service, host, action, region, version, payload_str, sid=None, skey=None):
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
    _sid = sid or SECRET_ID
    _skey = skey or SECRET_KEY
    secret_date = hmac.new(f'TC3{_skey}'.encode('utf-8'), date.encode('utf-8'), hashlib.sha256).digest()
    secret_service = hmac.new(secret_date, service.encode('utf-8'), hashlib.sha256).digest()
    secret_signing = hmac.new(secret_service, 'tc3_request'.encode('utf-8'), hashlib.sha256).digest()
    signature = hmac.new(secret_signing, string_to_sign.encode('utf-8'), hashlib.sha256).hexdigest()
    authorization = f'{algorithm} Credential={_sid}/{credential_scope}, SignedHeaders={signed_headers}, Signature={signature}'
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

# ===== Image Moderation (Tencent Cloud IMS) =====
def moderate_image(image_url):
    """Moderate image content using Tencent Cloud IMS (default config, all categories).
    Returns (passed: bool, label: str). Block on both Block and Review suggestions."""
    try:
        payload = json.dumps({'FileUrl': image_url})
        headers = _tc3_sign('ims', 'ims.tencentcloudapi.com', 'ImageModeration', 'ap-shanghai', '2020-12-29', payload, sid=IMS_SECRET_ID, skey=IMS_SECRET_KEY)
        req = urllib.request.Request('https://ims.tencentcloudapi.com/', data=payload.encode('utf-8'), headers=headers, method='POST')
        resp = urllib.request.urlopen(req, timeout=10)
        result = json.loads(resp.read().decode('utf-8'))
        resp_data = result.get('Response', {})
        if resp_data.get('Error'):
            err_msg = str(resp_data['Error'])
            return True, ''  # fail-open on API error
        suggestion = resp_data.get('Suggestion', 'Pass')
        label = resp_data.get('Label', '')
        score = resp_data.get('Score', 0)
        # Block on both Block and Review for safety
        if suggestion in ('Block', 'Review'):
            label_map = {
                'Porn': '色情内容', 'Sexy': '性感内容', 'Terrorism': '暴恐内容',
                'Politics': '政治敏感内容', 'Violence': '暴力内容', 'Bloody': '血腥内容',
                'Illegal': '违法违规内容', 'Abuse': '谩骂内容', 'Ad': '广告内容',
                'Spam': '垃圾内容', 'Teenager': '未成年人不良内容',
                'HarmfulContent': '不良内容', 'Drug': '涉毒内容',
                'Weapon': '武器内容', 'Gamble': '赌博内容'
            }
            cn_label = label_map.get(label, f'违规内容({label})')
            return False, cn_label
        return True, ''
    except Exception:
        return True, ''  # fail-open on any exception

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

import re as _re
PHONE_RULES = {
    '86': (11, r'^1[3-9]\d{9}$', '中国大陆'),
    '852': (8, r'^[5-9]\d{7}$', '香港'),
    '853': (8, r'^6\d{7}$', '澳门'),
    '886': (9, r'^[9]\d{8}$', '台湾'),
    '1': (10, r'^[2-9]\d{9}$', '美国/加拿大'),
    '81': (10, r'^[7-9]\d{9}$', '日本'),
    '82': (9, r'^1\d{8}$', '韩国'),
    '65': (8, r'^[89]\d{7}$', '新加坡'),
    '44': (10, r'^7\d{9}$', '英国'),
    '60': (9, r'^1\d{8}$', '马来西亚'),
    '61': (9, r'^4\d{8}$', '澳大利亚'),
    '66': (9, r'^[6-9]\d{8}$', '泰国'),
    '91': (10, r'^[6-9]\d{9}$', '印度'),
    '49': (10, r'^1[56]\d{8}$', '德国'),
    '33': (9, r'^[67]\d{8}$', '法国'),
    '39': (10, r'^3\d{9}$', '意大利'),
    '31': (9, r'^6\d{8}$', '荷兰'),
    '46': (9, r'^7\d{8}$', '瑞典'),
    '47': (8, r'^[4-9]\d{7}$', '挪威'),
}

def validate_phone(phone_str):
    """Validate phone with country code. phone_str is digits only without +.
    Returns (valid, error_msg, full_phone)."""
    if not phone_str or len(phone_str) < 4:
        return False, '请输入手机号（含国家代码）', ''
    for cc_len in (3, 2, 1):
        cc = phone_str[:cc_len]
        if cc in PHONE_RULES:
            expected_len, pattern, name = PHONE_RULES[cc]
            number = phone_str[cc_len:]
            if len(number) != expected_len:
                return False, f'{name}手机号应为{expected_len}位（不含国家代码{cc}），当前{len(number)}位', ''
            if not _re.match(pattern, number):
                return False, f'{name}手机号格式不正确', ''
            return True, '', f'+{phone_str}'
    return False, '不支持的国家代码，请检查手机号格式（如86 13800138000）', ''

# ===== User handlers =====
def check_phone(body):
    """Check if phone exists and whether user has password set"""
    phone = body.get('phone', '')
    valid, verr, full_phone = validate_phone(phone)
    if not valid:
        return {'error': verr}
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
    valid, verr, full_phone = validate_phone(phone)
    if not valid:
        return {'error': verr}
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
    token = generate_token(user['id'])
    return {'success': True, 'user': safe_user, 'token': token}

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

def _send_tencent_sms(full_phone, code):
    if not all((SMS_SECRET_ID, SMS_SECRET_KEY, SMS_SDK_APP_ID, SMS_SIGN_NAME, SMS_TEMPLATE_ID)):
        return False, '短信服务尚未完成配置'
    host = 'sms.tencentcloudapi.com'
    payload = json.dumps({
        'PhoneNumberSet': [full_phone],
        'SmsSdkAppId': SMS_SDK_APP_ID,
        'SignName': SMS_SIGN_NAME,
        'TemplateId': SMS_TEMPLATE_ID,
        'TemplateParamSet': [code, '5'],
    }, ensure_ascii=False, separators=(',', ':'))
    headers = _tc3_sign('sms', host, 'SendSms', 'ap-guangzhou', '2021-01-11', payload,
                        sid=SMS_SECRET_ID, skey=SMS_SECRET_KEY)
    try:
        request = urllib.request.Request(f'https://{host}', data=payload.encode('utf-8'), headers=headers, method='POST')
        with urllib.request.urlopen(request, timeout=12) as response:
            result = json.loads(response.read().decode('utf-8'))
        status = result.get('Response', {}).get('SendStatusSet', [{}])[0]
        if status.get('Code') != 'Ok':
            return False, status.get('Message') or result.get('Response', {}).get('Error', {}).get('Message', '短信发送失败')
        return True, ''
    except Exception as exc:
        return False, f'短信发送失败：{str(exc)}'

def send_sms_code(body):
    """Send a real one-time verification code for login or password reset."""
    phone = body.get('phone', '')
    valid, verr, full_phone = validate_phone(phone)
    if not valid:
        return {'error': verr}
    data = read_data()
    user = next((u for u in data['users'] if u.get('phone') == full_phone), None)
    if not user:
        return {'error': '该手机号未注册'}
    code = str(random.randint(100000, 999999))
    previous = data.setdefault('smsCodes', {}).get(full_phone, {})
    if time.time() - previous.get('sentAt', 0) < 60:
        return {'error': '发送太频繁，请60秒后再试'}
    sent, send_error = _send_tencent_sms(full_phone, code)
    if not sent:
        return {'error': send_error}
    data['smsCodes'][full_phone] = {'code': code, 'expire': time.time() + 300, 'sentAt': time.time()}
    write_data(data)
    return {'success': True, 'message': '验证码已发送，请查看手机短信'}

def verify_sms_login(body):
    phone = body.get('phone', '')
    code = str(body.get('code', ''))
    valid, verr, full_phone = validate_phone(phone)
    if not valid:
        return {'error': verr}
    data = read_data()
    stored = data.setdefault('smsCodes', {}).get(full_phone)
    if not stored or time.time() > stored.get('expire', 0):
        return {'error': '验证码不存在或已过期'}
    if not hmac.compare_digest(str(stored.get('code', '')), code):
        return {'error': '验证码错误'}
    user = next((u for u in data['users'] if u.get('phone') == full_phone), None)
    if not user:
        return {'error': '该手机号未注册'}
    del data['smsCodes'][full_phone]
    write_data(data)
    return {'success': True, 'user': _sanitize_user(user), 'token': generate_token(user['id'])}

def get_cloud_sync(user_id):
    data = read_data()
    return {'success': True, 'data': data.setdefault('userSync', {}).get(user_id, {})}

def save_cloud_sync(body):
    user_id = body.get('userId', '')
    sync_data = body.get('data', {})
    if not isinstance(sync_data, dict):
        return {'error': '同步数据格式错误'}
    allowed = ('themeColor', 'welcomeMsg', 'nightSettings', 'customCategories', 'drafts')
    clean = {key: sync_data[key] for key in allowed if key in sync_data}
    data = read_data()
    data.setdefault('userSync', {})[user_id] = clean
    write_data(data)
    return {'success': True, 'data': clean, 'syncedAt': now_str('%Y-%m-%d %H:%M:%S')}

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
    old_nickname = user.get('nickname', '')
    if body.get('nickname'):
        user['nickname'] = body['nickname']
    if body.get('avatar'):
        # Avatar image moderation
        if body['avatar'].startswith('http'):
            av_passed, av_label = moderate_image(body['avatar'])
            if not av_passed:
                return {'error': f'头像审核未通过：{av_label}，请更换图片'}
        user['avatar'] = body['avatar']
        user['avatarType'] = 'image'
    if body.get('avatarType'):
        user['avatarType'] = body['avatarType']
    if 'birthday' in body:
        user['birthday'] = body.get('birthday', '')
    if 'readReceipts' in body:
        data.setdefault('readReceipts', {})[uid] = body['readReceipts']
    if 'welcomeMsg' in body:
        user['welcomeMsg'] = body.get('welcomeMsg', '')
    # Sync nickname to all existing posts, comments and messages
    new_nickname = body.get('nickname', '')
    if new_nickname and new_nickname != old_nickname:
        for p in data['posts']:
            if p.get('authorId') == uid:
                p['author'] = new_nickname
            for c in p.get('comments', []):
                if c.get('authorId') == uid:
                    c['author'] = new_nickname
        for m in data['messages']:
            if m.get('from') == uid:
                m['fromNickname'] = new_nickname
        for fr in data.get('friendRequests', []):
            if fr.get('from') == uid:
                fr['nickname'] = new_nickname
    write_data(data)
    return {'success': True, 'user': _sanitize_user(user)}

def search_user(query):
    data = read_data()
    user = next((u for u in data['users'] if u['id'].upper() == query.upper()), None)
    if not user:
        return {'error': 'User not found'}
    return {'user': {'id': user['id'], 'nickname': user['nickname'], 'avatar': user.get('avatar', ''), 'avatarType': user.get('avatarType', 'char')}}

def _sanitize_user(user):
    """Remove sensitive fields from user object before returning to client."""
    u = dict(user)
    u.pop('password', None)
    if u.get('phone'):
        phone = u['phone']
        if len(phone) > 6:
            u['phone'] = phone[:7] + '****' + phone[-4:]
    return u

def get_user(uid):
    data = read_data()
    user = next((u for u in data['users'] if u['id'] == uid), None)
    if not user:
        return {'error': 'User not found'}
    return {'user': _sanitize_user(user)}

def get_user_posts(target_uid, viewer_id=''):
    data = read_data()
    user = next((u for u in data['users'] if u['id'] == target_uid), None)
    if not user:
        return {'error': 'User not found'}
    # Shadow ban: hide banned users' homepage from others
    if target_uid != viewer_id and is_banned(data, target_uid):
        return {'error': 'User not found'}
    # Block: viewer blocked target -> hide
    blocks = data.get('userBlocks', {}).get(viewer_id, [])
    if target_uid in blocks:
        return {'error': 'User not found'}
    saved_posts_map = data.get('savedPosts', {})
    liked_map = data.get('userLikes', {})
    posts = []
    for p in data['posts']:
        if p.get('authorId', '') != target_uid:
            continue
        if (p.get('visibility', 'public') != 'public' or p.get('roomId')) and p.get('authorId', '') != viewer_id:
            continue
        if _is_anonymous(p, data):
            continue
        posts.append({
            'id': p['id'], 'title': p.get('title', ''), 'content': p.get('content', ''),
            'category': p.get('category', ''), 'time': p.get('time', ''),
            'likes': p.get('likes', 0), 'hugs': p.get('hugs', 0),
            'commentCount': len(p.get('comments', [])),
            'images': p.get('images', []), 'coverImage': p.get('coverImage', ''),
            'author': p.get('author', ''), 'authorId': target_uid,
            'avatar': p.get('avatar', ''), 'avatarType': p.get('avatarType', 'char'),
            'saved': viewer_id in saved_posts_map.get(p['id'], []),
            'liked': viewer_id in liked_map.get(p['id'], []),
            'anonymous': False,
        })
    return {'user': {'id': user['id'], 'nickname': user['nickname'], 'avatar': user.get('avatar', ''), 'avatarType': user.get('avatarType', 'char')}, 'posts': posts}

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
    if msg_type != 'dm':
        has_bad, matched = check_sensitive(content)
        if has_bad:
            data = read_data()
            v_count, ban_info = record_violation(data, frm, 'chat', matched, content)
            write_data(data)
            if ban_info:
                return {'error': f'您的内容包含敏感词汇，请修改后发送。这是您第{v_count}次违规，已被系统封禁{ban_info["label"]}', 'matched_words': matched}
            remaining = 3 - v_count
            return {'error': f'您的内容包含敏感词汇，请修改后发送。这是您第{v_count}次违规，累计3次将被封禁（还剩{remaining}次）。', 'matched_words': matched}
    # Image moderation for room chat and non-friend DM
    # Extract [img]url[/img] from content + explicit images field
    msg_images = body.get('images', [])
    img_urls_in_content = re.findall(r'\[img\](.*?)\[/img\]', content)
    all_images = list(msg_images) + img_urls_in_content
    should_moderate_images = False
    if all_images:
        if msg_type != 'dm':
            # Room chat: always moderate
            should_moderate_images = True
        else:
            # DM: only moderate if not friends
            data_temp = read_data()
            target_parts = target.split('_')
            peer_id = target_parts[0] if len(target_parts) > 1 and target_parts[1] == frm else (target_parts[1] if len(target_parts) > 1 else '')
            is_friend = any((f['user1'] == frm and f['user2'] == peer_id) or (f['user1'] == peer_id and f['user2'] == frm) for f in data_temp.get('friendships', []))
            should_moderate_images = not is_friend
    if should_moderate_images:
        for img_url in all_images:
            passed, label = moderate_image(img_url)
            if not passed:
                return {'error': f'图片审核未通过：{label}，请更换内容后重试', 'moderationLabel': label}
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
    # Privacy access control: verify caller is a participant (user_id required)
    if msg_type == 'room':
        if not user_id:
            return {'error': 'Unauthorized: user_id required', 'messages': []}
        room = next((r for r in data['rooms'] if r['id'] == target), None)
        if not room:
            return {'error': 'Room not found', 'messages': []}
        if user_id not in room.get('members', []):
            return {'error': 'Unauthorized: not a room member', 'messages': []}
    elif msg_type == 'dm':
        if not user_id:
            return {'error': 'Unauthorized: user_id required', 'messages': []}
        parts = target.split('_')
        if user_id not in parts:
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
def _is_anonymous(p, data):
    anon = p.get('anonymous')
    if anon is not None and anon != '':
        return bool(anon)
    uid = p.get('authorId', '')
    u = next((x for x in data.get('users', []) if x.get('id') == uid), None)
    if not u:
        return True
    return not (p.get('author') == u.get('nickname') and p.get('avatar', '') == u.get('avatar', '') and p.get('avatarType', 'char') == u.get('avatarType', 'char'))

def list_posts(viewerId=''):
    data = read_data()
    blocks = data.get('userBlocks', {}).get(viewerId, [])
    saved_posts_map = data.get('savedPosts', {})
    pinned_posts_map = data.get('pinnedPosts', {})
    # Auto birthday check
    _check_birthdays(data)
    public = []
    for p in data['posts']:
        if (p.get('visibility', 'public') != 'public' or p.get('roomId')) and p.get('authorId', '') != viewerId:
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
        p_copy['liked'] = viewerId in data.get('userLikes', {}).get(p['id'], [])
        p_copy['mine'] = (authorId == viewerId) if viewerId else False
        p_copy['anonymous'] = _is_anonymous(p, data)
        public.append(p_copy)
    return {'posts': public, 'total': len(public)}

def create_post(body):
    title = body.get('title', '')
    content = body.get('content', '')
    author_id = body.get('authorId', '')
    has_bad, matched = check_sensitive_full(title + ' ' + content)
    if has_bad:
        return {'error': '您的内容包含敏感词汇，请修改后发布', 'matched_words': matched}
    data = read_data()
    post = {
        'id': str(int(time.time() * 1000)),
        'author': body.get('author', '匿名'),
        'authorId': body.get('authorId', ''),
        'anonymous': bool(body.get('anonymous', False)),
        'avatar': body.get('avatar', ''),
        'avatarType': body.get('avatarType', 'char'),
        'title': body.get('title', ''),
        'content': body.get('content', ''),
        'category': body.get('category', '其他'),
        'need': body.get('need', '我只想发泄'),
        'time': now_str('%Y-%m-%d %H:%M'),
        'created_at': int(time.time() * 1000),
        'likes': 0, 'hugs': 0, 'same': 0,
        'comments': [],
        'visibility': body.get('visibility', 'public'),
        'roomId': body.get('roomId', None),
        'coverImage': body.get('coverImage', ''),
        'images': body.get('images', []),
        'videos': body.get('videos', []),
        'diaryId': body.get('diaryId', None)
    }
    # Image moderation for posts
    all_media = post.get('images', []) + post.get('videos', [])
    if all_media:
        for media_url in all_media:
            passed, label = moderate_image(media_url)
            if not passed:
                return {'error': f'图片/视频审核未通过：{label}，请更换内容后重试', 'moderationLabel': label}
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
    # Visibility check: non-public posts only visible to author
    visibility = post.get('visibility', 'public')
    if visibility != 'public' and authorId != viewerId:
        return {'error': 'Post not found'}
    # Check AI comfort on ORIGINAL post before deep copy (so it sees real comment state)
    maybe_ai_comfort(data, post)
    # Deep copy to avoid modifying cached data in-place
    post_copy = copy.deepcopy(post)
    # Filter shadow-banned comments on the COPY
    if post_copy.get('comments'):
        post_copy['comments'] = [c for c in post_copy['comments']
                            if not c.get('authorId') or c['authorId'] == viewerId or not is_banned(data, c['authorId'])]
        post_copy['comments'] = [c for c in post_copy['comments']
                            if not c.get('authorId') or c['authorId'] not in blocks]
    # Attach saved/pinned/mine status on the COPY
    post_copy['saved'] = viewerId in data.get('savedPosts', {}).get(pid, [])
    post_copy['pinned'] = viewerId in data.get('pinnedPosts', {}).get(pid, [])
    post_copy['liked'] = viewerId in data.get('userLikes', {}).get(pid, [])
    post_copy['mine'] = (authorId == viewerId) if viewerId else False
    post_copy['anonymous'] = _is_anonymous(post_copy, data)
    return {'post': post_copy}

def add_comment(pid, body):
    text = body.get('text', '')
    author_id = body.get('authorId', '')
    comment_images = body.get('images', [])
    has_bad, matched = check_sensitive_full(text)
    if has_bad:
        return {'error': '您的内容包含敏感词汇，请修改后发布', 'matched_words': matched}
    # Image moderation for comments
    if comment_images:
        for img_url in comment_images:
            passed, label = moderate_image(img_url)
            if not passed:
                return {'error': f'评论图片审核未通过：{label}，请更换内容后重试', 'moderationLabel': label}
    data = read_data()
    for p in data['posts']:
        if p['id'] == pid:
            c = {'id': str(int(time.time()*1000)), 'author': body.get('author','匿名'), 'authorId': body.get('authorId',''), 'avatar': body.get('avatar',''), 'avatarType': body.get('avatarType','char'), 'text': body.get('text',''), 'images': body.get('images', []), 'time': now_str('%Y-%m-%d %H:%M'), 'created_at': int(time.time()*1000), 'likes': 0, 'replies': []}
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

def _post_created_ts(post):
    """Return post creation time as epoch seconds, or None if undeterminable."""
    raw = post.get('created_at') or post.get('createdAt')
    if isinstance(raw, (int, float)) and raw > 0:
        return raw / 1000.0 if raw > 1e12 else float(raw)
    pid = str(post.get('id', ''))
    if pid.isdigit() and len(pid) >= 12:
        return int(pid) / 1000.0
    try:
        return time.mktime(time.strptime(post.get('time', ''), '%Y-%m-%d %H:%M'))
    except Exception:
        return None

def edit_post(pid, body):
    uid = body.get('userId', '')
    has_content = 'content' in body
    has_images = 'images' in body
    if not has_content and not has_images:
        return {'error': '内容不能为空'}
    new_content = (body.get('content', '') or '').strip() if has_content else None
    if has_content and not new_content:
        return {'error': '内容不能为空'}
    if has_images and not isinstance(body.get('images'), list):
        return {'error': '图片格式不正确'}
    # 敏感词检查仅针对文本内容编辑（图片删除/重排不涉及文本）
    if has_content:
        has_bad, matched = check_sensitive_full(new_content)
        if has_bad:
            return {'error': '您的内容包含敏感词汇，请修改后发布', 'matched_words': matched}
    data = read_data()
    post = next((p for p in data['posts'] if p['id'] == pid), None)
    if not post:
        return {'error': 'Post not found'}
    if post.get('authorId', '') != uid:
        return {'error': 'You can only edit your own posts'}
    # 文本编辑保持5分钟窗口；图片删除不受5分钟限制
    if has_content:
        created_ts = _post_created_ts(post)
        if not created_ts:
            return {'error': '无法确认发布时间，暂不支持编辑'}
        if time.time() - created_ts > 300:
            return {'error': '发布已超过5分钟，不能再编辑啦'}
    if has_images:
        old_images = [str(u) for u in (post.get('images') or [])]
        if not old_images and post.get('coverImage'):
            old_images = [str(post['coverImage'])]
        new_images = [str(u) for u in body.get('images', []) if isinstance(u, str)]
        # 只允许减少/重排现有图片URL，不允许新增URL（按多重集合校验）
        old_counts = {}
        for u in old_images:
            old_counts[u] = old_counts.get(u, 0) + 1
        new_counts = {}
        for u in new_images:
            new_counts[u] = new_counts.get(u, 0) + 1
        if any(cnt > old_counts.get(u, 0) for u, cnt in new_counts.items()):
            return {'error': '只能删除或调整已有图片，不能新增图片'}
        post['images'] = new_images
        if not new_images and post.get('coverImage'):
            post['coverImage'] = ''
    if has_content:
        post['content'] = new_content
    post['edited_at'] = now_str('%Y-%m-%d %H:%M')
    write_data(data)
    return {'success': True, 'post': post}

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

# ===== v3.30: comment delete / view footprint / visitors / collections =====

def delete_comment(pid, body):
    uid = body.get('userId', '')
    cid = str(body.get('commentId', ''))
    if not uid or not cid:
        return {'error': '参数不完整'}
    data = read_data()
    post = next((p for p in data['posts'] if p['id'] == pid), None)
    if not post:
        return {'error': '帖子不存在'}
    admin = is_admin(data, uid)
    # 顶层评论
    comment = next((c for c in post.get('comments', []) if str(c.get('id', '')) == cid), None)
    if comment:
        # 评论作者本人 / 帖子作者 / 管理员 可删
        if comment.get('authorId', '') != uid and post.get('authorId', '') != uid and not admin:
            return {'error': '只能删除自己的评论'}
        post['comments'] = [c for c in post['comments'] if str(c.get('id', '')) != cid]
        write_data(data)
        return {'success': True}
    # 楼中楼回复
    for c in post.get('comments', []):
        replies = c.get('replies', [])
        reply = next((r for r in replies if str(r.get('id', '')) == cid), None)
        if reply:
            if reply.get('authorId', '') != uid and post.get('authorId', '') != uid and not admin:
                return {'error': '只能删除自己的评论'}
            c['replies'] = [r for r in replies if str(r.get('id', '')) != cid]
            write_data(data)
            return {'success': True}
    return {'error': '评论不存在或已删除'}


def record_view(pid, body):
    """记录一次帖子浏览（登录用户；尊重足迹开关；同人同帖只保留最新一条）"""
    uid = body.get('userId', '')
    if not uid:
        return {'success': True}
    data = read_data()
    settings = data.setdefault('userSettings', {})
    if settings.get(uid, {}).get('hideFootprint'):
        return {'success': True, 'hidden': True}
    views = data.setdefault('postViews', {})
    lst = [v for v in views.get(pid, []) if v.get('userId') != uid]
    lst.append({'userId': uid, 'nickname': body.get('nickname', '匿名'),
                'avatar': body.get('avatar', ''), 'avatarType': body.get('avatarType', 'char'),
                'time': now_str('%Y-%m-%d %H:%M')})
    views[pid] = lst[-100:]
    write_data(data)
    return {'success': True}


def get_visitors(uid):
    """聚合我所有公开帖子的访客，按时间倒序；关闭足迹则返回空+hidden标记"""
    if not uid:
        return {'error': '请先登录'}
    data = read_data()
    if data.get('userSettings', {}).get(uid, {}).get('hideFootprint'):
        return {'visitors': [], 'hidden': True}
    my_posts = {p['id']: p.get('title', '') for p in data['posts']
                if p.get('authorId', '') == uid and p.get('visibility', 'public') == 'public'}
    views = data.get('postViews', {})
    all_views = []
    for pid, lst in views.items():
        if pid in my_posts:
            for v in lst:
                if v.get('userId') and v.get('userId') != uid:
                    all_views.append({'userId': v.get('userId'), 'nickname': v.get('nickname', '匿名'),
                                      'avatar': v.get('avatar', ''), 'avatarType': v.get('avatarType', 'char'),
                                      'time': v.get('time', ''), 'postId': pid, 'postTitle': my_posts[pid]})
    all_views.sort(key=lambda x: x.get('time', ''), reverse=True)
    return {'visitors': all_views[:100], 'hidden': False}


def set_footprint(body):
    uid = body.get('userId', '')
    if not uid:
        return {'error': '请先登录'}
    data = read_data()
    cur = data.setdefault('userSettings', {}).setdefault(uid, {})
    cur['hideFootprint'] = bool(body.get('hideFootprint'))
    write_data(data)
    return {'success': True, 'hideFootprint': cur['hideFootprint']}


def get_footprint(uid):
    data = read_data()
    return {'hideFootprint': data.get('userSettings', {}).get(uid, {}).get('hideFootprint', False)}


def create_collection(body):
    uid = body.get('userId', '')
    if not uid:
        return {'error': '请先登录'}
    data = read_data()
    data.setdefault('collections', [])
    coll = {'id': gen_id('C'), 'userId': uid,
            'name': (body.get('name', '') or '未命名合集').strip()[:20] or '未命名合集',
            'cover': body.get('cover', ''), 'postIds': [], 'createdAt': now_str('%Y-%m-%d %H:%M')}
    data['collections'].append(coll)
    write_data(data)
    return {'success': True, 'collection': coll}


def list_collections(uid):
    data = read_data()
    colls = [c for c in data.get('collections', []) if c.get('userId') == uid]
    for c in colls:
        c['posts'] = [p for p in data['posts'] if p['id'] in c.get('postIds', [])]
    return {'collections': colls}


def update_collection(cid, body):
    uid = body.get('userId', '')
    data = read_data()
    coll = next((c for c in data.get('collections', []) if c['id'] == cid), None)
    if not coll:
        return {'error': '合集不存在'}
    if coll.get('userId') != uid:
        return {'error': '只能修改自己的合集'}
    if body.get('name'):
        coll['name'] = str(body['name']).strip()[:20] or coll['name']
    if 'cover' in body:
        coll['cover'] = body['cover']
    if body.get('addPostId'):
        pid = body['addPostId']
        if pid not in coll['postIds']:
            post = next((p for p in data['posts'] if p['id'] == pid), None)
            if not post:
                return {'error': '帖子不存在'}
            if post.get('authorId') != uid:
                return {'error': '只能收录自己的帖子'}
            coll['postIds'].append(pid)
    if body.get('removePostId'):
        coll['postIds'] = [x for x in coll['postIds'] if x != body['removePostId']]
    write_data(data)
    coll['posts'] = [p for p in data['posts'] if p['id'] in coll.get('postIds', [])]
    return {'success': True, 'collection': coll}


def delete_collection(cid, body):
    uid = body.get('userId', '')
    data = read_data()
    coll = next((c for c in data.get('collections', []) if c['id'] == cid), None)
    if not coll:
        return {'error': '合集不存在'}
    if coll.get('userId') != uid:
        return {'error': '只能删除自己的合集'}
    data['collections'] = [c for c in data['collections'] if c['id'] != cid]
    write_data(data)
    return {'success': True}

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
    ai_style = body.get('aiStyle', '')
    if ai_style == 'day':
        system_prompt = AI_CHAT_PROMPT_DAY
    elif ai_style == 'night':
        system_prompt = AI_CHAT_PROMPT_NIGHT
    else:
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
    req_data = json.dumps({'model': 'deepseek-v4-flash', 'messages': messages, 'max_tokens': 500, 'temperature': 0.8}).encode('utf-8')
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

EMOJI_FULL = [
    "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😗", "😙", "😚", "🙂", "🤗", "🤩", "🤔", "🤨", "😐",
    "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "🥱", "😴", "😌", "😛", "😜", "🤪", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃",
    "🫠", "🫡", "🥺", "😖", "😩", "😤", "😠", "😡", "🤬", "😈", "👿", "👋", "🤚", "🖐️", "✋", "🖖", "🤌", "🤏", "👈", "👉", "👆", "👇", "☝️", "👍",
    "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪", "🦾", "👀", "👁️", "👅", "💋", "💌", "💘", "💝", "💖",
    "💗", "💓", "💞", "💕", "💟", "❣️", "💔", "❤️‍🔥", "❤️", "🤍", "🤎", "💛", "💚", "💙", "💜", "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨",
    "🐯", "🦁", "🐮", "🐷", "🐸", "🐵", "🐔", "🐧", "🐦", "🐤", "🦆", "🦉", "🐺", "🐴", "🦄", "🐝", "🦋", "🐌", "🐞", "🐜", "🕷️", "🐢", "🐍", "🐙",
    "🦑", "🦐", "🦀", "🐡", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈", "🐊", "🐅", "🐆", "🦓", "🐘", "🦏", "🐪", "🐫", "🦒", "🐃", "🐂", "🐄", "🐎", "🐑",
    "🐐", "🦌", "🐕", "🐩", "🐈", "🪶", "🕊️", "🌿", "🍀", "🌷", "🌹", "🥀", "🌺", "🌸", "🌼", "🌻", "🌞", "🌝", "🌚", "🌕", "🌙", "⭐", "🌟", "✨",
    "⚡", "🔥", "💧", "🌊", "🌈", "☁️", "☀️", "🌨️", "❄️", "🎃", "🎄", "🎉", "🎊", "🎈", "🎁", "🍏", "🍎", "🍐", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓",
    "🍈", "🍒", "🍑", "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", "🥦", "🥬", "🥒", "🌶️", "🌽", "🥕", "🥐", "🍞", "🥖", "🧀", "🥚", "🍳", "🥞", "🥓",
    "🥩", "🍗", "🍖", "🌭", "🍔", "🍟", "🍕", "🥪", "🌮", "🌯", "🥗", "🍝", "🍜", "🍲", "🍛", "🍣", "🍱", "🥟", "🍤", "🍙", "🍚", "🍘", "🍥", "🥠",
    "🍢", "🍡", "🍧", "🍨", "🍦", "🥧", "🧁", "🍰", "🎂", "🍮", "🍭", "🍬", "🍫", "🍿", "🍩", "🍪", "🌰", "🥜", "🍯", "🥛", "☕", "🍵", "🧃", "🥤",
    "🧋", "🍶", "🍺", "🍻", "🥂", "🍷", "🥃", "🍸", "🍹", "🍾", "⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🎱", "🏓", "🏸", "🏒", "🎯", "🎮", "🎰",
    "🧩", "🎲", "🏆", "🥇", "🥈", "🥉", "🏅", "🎖️", "🎭", "🎨", "🎬", "🎤", "🎧", "🎼", "🎵", "🎶", "🥁", "🎷", "🎺", "🎸", "🪕", "🎻", "🪘", "🎪",
    "📚", "📖", "📝", "✏️", "🖊️", "🖌️", "📌", "📍", "📎", "✂️", "📏", "📐", "🧮", "💡", "🔮", "🧸", "🎀", "🪅", "🪆", "✉️", "📦", "🔑", "🔒", "🔔",
    "🔦", "🛒", "🧹", "🧺", "✅", "❌", "⭕", "❔", "❗", "➕", "➖", "✖️", "➗", "💯", "🔞", "🚫", "♻️", "🔍",
]

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
    # Auth middleware: verify token and inject authenticated user ID
    _auth_uid, auth_error = auth_middleware(method, path, req, qp, event)
    if auth_error:
        return {**auth_error, 'headers': cors}
    try:
        if path == '/api/health':
            result = {'status': 'ok', 'time': now_str('%Y-%m-%d %H:%M:%S')}
        elif path == '/api/emojis' and method == 'GET':
            result = {'emojis': EMOJI_FULL}
        elif path == '/api/auth/login' and method == 'POST':
            result = handle_login(req)
        elif path == '/api/auth/verify-code' and method == 'POST':
            result = verify_sms_login(req)
        elif path == '/api/sync' and method == 'GET':
            result = get_cloud_sync(qp.get('userid', ''))
        elif path == '/api/sync' and method == 'POST':
            result = save_cloud_sync(req)
        elif path == '/api/user/profile' and method == 'POST':
            result = update_profile(req)
        elif path == '/api/user/search' and method == 'GET':
            result = search_user(qp.get('query', qp.get('id', '')))
        elif path.startswith('/api/user/blocks/') and method == 'GET':
            result = user_blocks_list(path.rstrip('/').split('/')[-1])
        elif path == '/api/user/visitors' and method == 'GET':
            result = get_visitors(qp.get('userid', ''))
        elif path == '/api/user/footprint' and method == 'GET':
            result = get_footprint(qp.get('userid', ''))
        elif path == '/api/user/footprint' and method == 'POST':
            result = set_footprint(req)
        elif path == '/api/user/violations' and method == 'GET':
            result = get_user_violations_handler(qp.get('userid', ''))
        elif path == '/api/user/appeals' and method == 'GET':
            result = get_user_appeals(qp.get('userid', ''))
        elif path == '/api/user/posts' and method == 'GET':
            result = get_user_posts(qp.get('userid', ''), qp.get('viewer', ''))
        elif path.startswith('/api/user/') and method == 'GET':
            result = get_user(path.rstrip('/').split('/')[-1])
        elif path == '/api/upload/presign' and method == 'POST':
            result = presign_upload(req.get('filename', f'file_{int(time.time()*1000)}'), req.get('contentType', ''))
        elif path == '/api/upload' and method == 'POST':
            result = handle_upload(req)
        elif path == '/api/moderation/image' and method == 'POST':
            img_url = req.get('imageUrl', '')
            passed, label = moderate_image(img_url)
            result = {'passed': passed, 'label': label}
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
        elif path == '/api/ai/chat' and method == 'POST':
            result = ai_chat_handler(req)
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
        elif path.startswith('/api/posts/') and path.endswith('/comments/delete') and method == 'POST':
            result = delete_comment(path.split('/')[3], req)
        elif path.startswith('/api/posts/') and path.endswith('/view') and method == 'POST':
            result = record_view(path.split('/')[3], req)
        elif path.startswith('/api/posts/') and path.endswith('/react') and method == 'POST':
            result = react_post(path.split('/')[3], req)
        elif path.startswith('/api/posts/') and path.endswith('/save') and method == 'POST':
            result = save_post(path.split('/')[3], req)
        elif path.startswith('/api/posts/') and path.endswith('/pin') and method == 'POST':
            result = pin_post(path.split('/')[3], req)
        elif path.startswith('/api/posts/') and path.endswith('/delete') and method == 'POST':
            result = delete_post(path.split('/')[3], req)
        elif path.startswith('/api/posts/') and path.endswith('/edit') and method == 'POST':
            result = edit_post(path.split('/')[3], req)
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
        elif path == '/api/collections' and method == 'POST':
            result = create_collection(req)
        elif path.startswith('/api/collections/') and path.endswith('/update') and method == 'POST':
            result = update_collection(path.split('/')[3], req)
        elif path.startswith('/api/collections/') and path.endswith('/delete') and method == 'POST':
            result = delete_collection(path.split('/')[3], req)
        elif path.startswith('/api/collections/') and method == 'GET':
            result = list_collections(path.rstrip('/').split('/')[-1])
        elif path.startswith('/api/diaries/') and method == 'GET':
            result = list_diaries(path.rstrip('/').split('/')[-1])
        elif path.startswith('/api/diaries/') and method == 'PUT':
            result = update_diary(path.split('/')[3], req)
        elif path == '/api/auth/check-phone' and method == 'POST':
            result = check_phone(req)
        elif path == '/api/auth/set-password' and method == 'POST':
            result = set_password(req)
        elif path == '/api/auth/send-code' and method == 'POST':
            result = send_sms_code(req)
        elif path == '/api/auth/reset-password' and method == 'POST':
            result = reset_password(req)
        elif path == '/api/appeal' and method == 'POST':
            result = submit_appeal(req)
        elif path == '/api/admin/appeals' and method == 'GET':
            result = admin_get_appeals(qp.get('userid', ''))
        elif path == '/api/admin/appeal-action' and method == 'POST':
            result = admin_appeal_action(req)
        elif path == '/api/bottles/throw' and method == 'POST':
            result = throw_bottle(req)
        elif path == '/api/bottles/random' and method == 'GET':
            result = get_random_bottles(int(qp.get('count', '5')), qp.get('userid', ''))
        elif path.startswith('/api/bottles/') and path.endswith('/pick') and method == 'POST':
            bottle_id = path.split('/')[3]
            result = pick_bottle(bottle_id, req)
        elif path == '/api/bottles/mine' and method == 'GET':
            result = get_my_bottles(qp.get('userid', ''))
        elif path.startswith('/api/bottles/') and path.endswith('/reply') and method == 'POST':
            bottle_id = path.split('/')[3]
            result = reply_bottle(bottle_id, req)
        elif path.startswith('/api/bottles/') and path.endswith('/replies') and method == 'GET':
            bottle_id = path.split('/')[3]
            result = get_bottle_replies(bottle_id, qp.get('userid', ''))
        elif path.startswith('/api/bottles/') and path.endswith('/reaction') and method == 'POST':
            bottle_id = path.split('/')[3]
            result = react_bottle(bottle_id, req)
        elif path.startswith('/api/bottles/') and path.endswith('/delete') and method == 'POST':
            bottle_id = path.split('/')[3]
            result = delete_bottle(bottle_id, req)
        
        elif path == '/api/memory/calendar' and method == 'GET':
            result = get_memory_calendar(qp.get('year', ''), qp.get('month', ''), qp.get('userid', ''))
        elif path == '/api/memory/year-review' and method == 'GET':
            result = get_year_review(qp.get('year', ''), qp.get('userid', ''))
        elif path == '/api/memory/on-this-day' and method == 'GET':
            result = get_on_this_day(qp.get('month', ''), qp.get('day', ''), qp.get('userid', ''))
        elif path == '/api/ai/energy-card' and method == 'POST':
            result = generate_energy_card(req)
        elif path == '/api/ai/night-radio' and method == 'POST':
            result = generate_night_radio(req)
        elif path == '/api/ai/daily-challenge' and method == 'GET':
            result = get_daily_challenge(qp.get('userid', ''))
        else:
            result = {'error': 'Not found', 'path': path, 'method': method}
    except Exception as e:
        result = {'error': str(e)}
    return {'statusCode': 200, 'headers': cors, 'body': json.dumps(result, ensure_ascii=False)}


# ===== Memory / 回忆功能 =====

def get_memory_calendar(year, month, userId):
    """返回某月内用户发帖的日期标记和帖子摘要"""
    if not userId:
        return {'error': '需要登录'}
    if not year or not month:
        return {'error': '参数错误'}
    data = read_data()
    prefix = f"{year}-{int(month):02d}"
    days = {}
    for p in data.get('posts', []):
        if p.get('authorId', '') != userId:
            continue
        pt = p.get('time', '')
        if not pt.startswith(prefix):
            continue
        day = pt[8:10]  # DD
        if day not in days:
            days[day] = {'count': 0, 'previews': []}
        days[day]['count'] += 1
        if len(days[day]['previews']) < 3:
            days[day]['previews'].append(p.get('title', '') or p.get('content', '')[:30])
    return {'year': year, 'month': month, 'days': days, 'total': sum(d['count'] for d in days.values())}

def get_year_review(year, userId):
    """返回年度回忆录统计数据"""
    if not userId:
        return {'error': '需要登录'}
    if not year:
        return {'error': '参数错误'}
    data = read_data()
    prefix = f"{year}-"
    monthly = {}
    total_posts = 0
    total_likes = 0
    total_hugs = 0
    categories = {}
    longest_post = ''
    longest_len = 0
    first_post = None
    last_post = None
    for p in data.get('posts', []):
        if p.get('authorId', '') != userId:
            continue
        pt = p.get('time', '')
        if not pt.startswith(prefix):
            continue
        total_posts += 1
        total_likes += p.get('likes', 0)
        total_hugs += p.get('hugs', 0)
        m = pt[5:7]
        monthly[m] = monthly.get(m, 0) + 1
        cat = p.get('category', '未分类')
        categories[cat] = categories.get(cat, 0) + 1
        content_len = len(p.get('content', ''))
        if content_len > longest_len:
            longest_len = content_len
            longest_post = p.get('content', '')[:50]
        if first_post is None or pt < first_post['time']:
            first_post = {'time': pt, 'title': p.get('title', '') or p.get('content', '')[:20]}
        if last_post is None or pt > last_post['time']:
            last_post = {'time': pt, 'title': p.get('title', '') or p.get('content', '')[:20]}
    # Most active month
    most_active_month = max(monthly, key=monthly.get) if monthly else ''
    return {
        'year': year,
        'totalPosts': total_posts,
        'totalLikes': total_likes,
        'totalHugs': total_hugs,
        'monthlyDistribution': monthly,
        'mostActiveMonth': most_active_month,
        'categories': categories,
        'longestPost': longest_post,
        'longestLen': longest_len,
        'firstPost': first_post,
        'lastPost': last_post
    }

def get_on_this_day(month, day, userId):
    """返回往年今日的帖子"""
    if not userId:
        return {'error': '需要登录'}
    if not month or not day:
        return {'error': '参数错误'}
    data = read_data()
    md = f"-{int(month):02d}-{int(day):02d}"
    results = []
    for p in data.get('posts', []):
        if p.get('authorId', '') != userId:
            continue
        pt = p.get('time', '')
        if md not in pt:
            continue
        results.append({
            'id': p['id'],
            'title': p.get('title', ''),
            'content': p.get('content', '')[:100],
            'time': pt,
            'year': pt[:4],
            'likes': p.get('likes', 0),
            'hugs': p.get('hugs', 0),
            'images': p.get('images', [])[:1],
            'category': p.get('category', '')
        })
    results.sort(key=lambda x: x['time'], reverse=True)
    return {'posts': results, 'count': len(results)}

# ===== Day/Night mode features =====

DAILY_CHALLENGES = [
    {'icon': '☀️', 'text': '给一个朋友发一句"谢谢你"'},
    {'icon': '🌿', 'text': '去外面走5分钟，感受一下阳光'},
    {'icon': '💧', 'text': '喝一杯温水，给自己一个小小的停顿'},
    {'icon': '📝', 'text': '写下今天发生的三件小事'},
    {'icon': '🎵', 'text': '听一首你喜欢的歌，完整地听完'},
    {'icon': '🤗', 'text': '给自己一个拥抱，说一句"辛苦了"'},
    {'icon': '📱', 'text': '放下手机10分钟，看看窗外'},
    {'icon': '🌸', 'text': '找一个让你觉得舒服的角落，待一会儿'},
    {'icon': '☕', 'text': '泡一杯你喜欢的饮品，慢慢喝'},
    {'icon': '✨', 'text': '想一个今天值得感谢的人或事'},
    {'icon': '🌙', 'text': '今晚比平时早睡10分钟'},
    {'icon': '💌', 'text': '在树洞写下一句今天最想说的话'},
    {'icon': '🚶', 'text': '站起来伸个懒腰，活动一下肩膀'},
    {'icon': '🌈', 'text': '拍一张今天看到的颜色，存下来'},
    {'icon': '🫖', 'text': '今天对自己说一句好话'},
]

ENERGY_QUOTES = [
    '今天也是崭新的一天，你值得所有美好的事物。',
    '每一个微小的进步，都是在为未来的自己铺路。',
    '你不需要完美，你只需要真实。',
    '阳光不会辜负每一个早起的人，但赖床也没关系。',
    '今天的你，已经比昨天的你多知道了一些事情。',
    '生活不会一直甜，但甜的时候要好好享受。',
    '你笑起来的样子，是这个世界最好的装饰。',
    '即使是最小的星星，也在努力发光。',
    '今天如果有困难，记得你不是一个人在面对。',
    '把焦虑交给时间，把行动交给现在。',
]

NIGHT_QUOTES = [
    '夜深了，今天的你辛苦了。',
    '不管今天经历了什么，夜晚会温柔地接住你。',
    '放下手机，闭上眼睛，让疲惫慢慢散去。',
    '月亮也在陪着你，你不是一个人。',
    '今天的事情已经结束了，明天会是新的一天。',
    '夜晚是给自己的一点温柔，好好享受。',
    '你不需要在今天解决所有问题，休息也是一种勇敢。',
    '愿你的梦里有星星，有温柔，有平静的海。',
]

def generate_energy_card(body):
    """Generate a daily positive energy card."""
    import hashlib
    # Use date + userId as seed for daily consistency
    today = time.strftime('%Y-%m-%d', time.localtime())
    uid = body.get('userId', '')
    seed_str = f'{today}_{uid}'
    seed_hash = int(hashlib.md5(seed_str.encode()).hexdigest(), 16)

    # Pick quote based on seed
    quote = ENERGY_QUOTES[seed_hash % len(ENERGY_QUOTES)]

    # Try to get a richer card from LLM
    prompt = f'请用一句话生成一个积极、温暖的早安问候，风格清新自然，不要说教，不要用"加油"这个词。直接输出问候语本身，不要加引号或其他格式。今天的日期是{today}。'
    try:
        llm_msg = llm_call([{'role': 'user', 'content': prompt}], max_tokens=80, temperature=0.8, timeout=10)
        if llm_msg and len(llm_msg) > 5:
            quote = llm_msg.strip().strip('"').strip('"').strip('"')
    except Exception:
        pass

    # Pick challenge based on seed
    challenge = DAILY_CHALLENGES[seed_hash % len(DAILY_CHALLENGES)]

    return {
        'quote': quote,
        'challenge': challenge,
        'date': today,
        'greeting': '早上好' if time.localtime().tm_hour < 12 else '下午好'
    }

def generate_night_radio(body):
    """Generate a bedtime companion text."""
    today = time.strftime('%Y-%m-%d', time.localtime())
    uid = body.get('userId', '')
    seed_str = f'{today}_{uid}'
    import hashlib
    seed_hash = int(hashlib.md5(seed_str.encode()).hexdigest(), 16)
    quote = NIGHT_QUOTES[seed_hash % len(NIGHT_QUOTES)]

    # Try LLM for a personalized bedtime story/message
    prompt = '请生成一段温柔的晚安陪伴文字，50-80字。像一个好朋友在深夜轻声对你说的话。不要说教，不要用"加油"，要温柔、沉静、治愈。直接输出文字本身。'
    try:
        llm_msg = llm_call([{'role': 'user', 'content': prompt}], max_tokens=120, temperature=0.85, timeout=15)
        if llm_msg and len(llm_msg) > 10:
            quote = llm_msg.strip().strip('"').strip('"').strip('"')
    except Exception:
        pass

    return {
        'quote': quote,
        'date': today,
        'greeting': '晚安'
    }

def get_daily_challenge(userid):
    """Return a deterministic daily challenge for the user."""
    import hashlib
    today = time.strftime('%Y-%m-%d', time.localtime())
    seed_str = f'{today}_{userid}'
    seed_hash = int(hashlib.md5(seed_str.encode()).hexdigest(), 16)
    challenge = DAILY_CHALLENGES[seed_hash % len(DAILY_CHALLENGES)]
    return {'challenge': challenge, 'date': today}

# ===== Appeal system (违规申诉) =====
def judge_appeal_ai(snippet, words, reason):
    """让 AI 结合整体语境判断命中词是否构成违规。
    返回 (verdict, reason_text)：verdict ∈ innocent / guilty / uncertain / None(不可用)。"""
    prompt = (
        '你是一个中文社区内容审核仲裁员。用户的一段内容因命中敏感词被系统判定违规，用户发起申诉。\n'
        '请结合整体语境判断：该词在当时语境下是否真的构成违规（辱骂、色情、歧视、暴力、毒品等）。\n'
        '例如正常引用、自嘲、无害误伤、非辱骂语境应判 innocent；确实违规判 guilty；难以判断判 uncertain。\n'
        '只输出JSON：{"verdict":"innocent|guilty|uncertain","reason":"一句话理由"}\n\n'
        f'命中敏感词：{", ".join(words)}\n'
        f'内容原文：{snippet}\n'
        f'用户申诉理由：{reason or "（未填写）"}'
    )
    req_data = json.dumps({'model': 'deepseek-v4-flash', 'messages': [{'role': 'user', 'content': prompt}], 'max_tokens': 200, 'temperature': 0.1}).encode('utf-8')
    req = urllib.request.Request('https://api.deepseek.com/v1/chat/completions', data=req_data, headers={'Content-Type': 'application/json', 'Authorization': f'Bearer {DEEPSEEK_API_KEY}'}, method='POST')
    try:
        resp = urllib.request.urlopen(req, timeout=20)
        result = json.loads(resp.read().decode('utf-8'))
        text = result['choices'][0]['message']['content'].strip()
        if '```' in text:
            text = text.split('```')[1].lstrip('json').strip()
        v = json.loads(text)
        verdict = v.get('verdict', 'uncertain')
        if verdict not in ('innocent', 'guilty', 'uncertain'):
            verdict = 'uncertain'
        return verdict, str(v.get('reason', ''))[:100]
    except Exception:
        return None, ''

def _overturn_violation(data, uid, vio):
    """撤销一条违规：标记overturned，重算有效数，必要时自动解封。"""
    vio['status'] = 'overturned'
    violations = data.get('userViolations', {}).get(uid, {})
    eff = len(active_violations(violations))
    violations['count'] = eff
    banned = data.get('bannedUsers', {}).get(uid)
    unbanned = False
    if banned and banned.get('source') == 'auto' and eff < 3 and is_banned(data, uid):
        del data['bannedUsers'][uid]
        unbanned = True
    return unbanned

def submit_appeal(body):
    """POST /api/appeal {userId, violationId, reason}"""
    uid = body.get('userId', '')
    vid = body.get('violationId', '')
    reason = (body.get('reason', '') or '').strip()[:300]
    if not uid or not vid:
        return {'error': 'Missing required fields'}
    data = read_data()
    user_v = data.get('userViolations', {}).get(uid)
    if not user_v:
        return {'error': '没有违规记录'}
    vio = next((h for h in user_v.get('history', []) if h.get('id') == vid), None)
    if not vio:
        return {'error': '违规记录不存在'}
    st = vio.get('status', 'confirmed')
    if st == 'overturned':
        return {'error': '该记录已被撤销'}
    if st in ('appealing', 'upheld'):
        return {'error': '该记录已申诉过，请勿重复提交'}
    if vio.get('cleared'):
        return {'error': '该记录已因良好表现被清除'}
    verdict, ai_reason = judge_appeal_ai(vio.get('snippet', ''), vio.get('words', []), reason)
    appeal = {
        'id': f"apl{int(time.time()*1000)}{random.randint(100,999)}",
        'uid': uid,
        'violationId': vid,
        'snippet': vio.get('snippet', ''),
        'words': vio.get('words', []),
        'type': vio.get('type', ''),
        'reason': reason,
        'aiVerdict': verdict or 'unavailable',
        'aiReason': ai_reason,
        'time': now_str('%Y-%m-%d %H:%M'),
    }
    data.setdefault('appeals', []).append(appeal)
    if len(data['appeals']) > 200:
        data['appeals'] = data['appeals'][-200:]
    if verdict == 'innocent':
        appeal['status'] = 'approved'
        unbanned = _overturn_violation(data, uid, vio)
        write_data(data)
        return {'success': True, 'result': 'approved', 'message': '申诉成功！系统判定该词在该语境下不构成违规，记录已撤销。' + ('你的封禁已同步解除。' if unbanned else ''), 'aiReason': ai_reason}
    if verdict == 'guilty':
        appeal['status'] = 'rejected'
        vio['status'] = 'upheld'
        write_data(data)
        return {'success': True, 'result': 'rejected', 'message': f'经系统复核，该词在该语境下仍构成违规，申诉未通过。{("理由：" + ai_reason) if ai_reason else ""}', 'aiReason': ai_reason}
    # AI拿不定或不可用 → 转管理员
    appeal['status'] = 'pending_admin'
    vio['status'] = 'appealing'
    write_data(data)
    return {'success': True, 'result': 'pending', 'message': '系统无法确定该词在语境中是否违规，已提交管理员人工复核，结果将在你的违规记录中更新。'}

def get_user_appeals(uid):
    """GET /api/user/appeals?userid="""
    if not uid:
        return {'error': 'Missing userid'}
    data = read_data()
    mine = [a for a in data.get('appeals', []) if a.get('uid') == uid]
    return {'appeals': mine[-20:]}

def admin_get_appeals(userId):
    """GET /api/admin/appeals?userId= （管理员：待人工复核的申诉队列）"""
    if not is_admin(data := read_data(), userId):
        return {'error': 'Unauthorized'}
    pending = [a for a in data.get('appeals', []) if a.get('status') == 'pending_admin']
    done = [a for a in data.get('appeals', []) if a.get('status') in ('approved', 'rejected')]
    return {'pending': pending[-50:], 'done': done[-20:]}

def admin_appeal_action(body):
    """POST /api/admin/appeal-action {userId, appealId, action: approve|reject}"""
    userId = body.get('userId', '')
    aid = body.get('appealId', '')
    action = body.get('action', '')
    data = read_data()
    if not is_admin(data, userId):
        return {'error': 'Unauthorized'}
    appeal = next((a for a in data.get('appeals', []) if a.get('id') == aid), None)
    if not appeal:
        return {'error': '申诉不存在'}
    if appeal.get('status') != 'pending_admin':
        return {'error': '该申诉已处理'}
    uid = appeal['uid']
    user_v = data.get('userViolations', {}).get(uid, {})
    vio = next((h for h in user_v.get('history', []) if h.get('id') == appeal.get('violationId')), None)
    if action == 'approve':
        appeal['status'] = 'approved'
        appeal['handledBy'] = userId
        appeal['handledAt'] = now_str('%Y-%m-%d %H:%M')
        unbanned = _overturn_violation(data, uid, vio) if vio else False
        write_data(data)
        return {'success': True, 'message': '已批准申诉，违规记录已撤销' + ('，用户封禁已同步解除' if unbanned else '')}
    if action == 'reject':
        appeal['status'] = 'rejected'
        appeal['handledBy'] = userId
        appeal['handledAt'] = now_str('%Y-%m-%d %H:%M')
        if vio:
            vio['status'] = 'upheld'
        write_data(data)
        return {'success': True, 'message': '已驳回申诉，维持原判'}
    return {'error': 'Invalid action'}

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
    content = body.get('content', '').strip()[:200]
    if not content:
        return {'error': '内容不能为空'}
    has_bad, matched = check_sensitive_full(content)
    if has_bad:
        return {'error': '内容包含敏感词汇，请修改后投出'}
    data = read_data()
    bottle = {
        'id': f"bt_{int(time.time()*1000)}_{random.randint(100,999)}",
        'content': content,
        'authorId': body.get('authorId', ''),
        'color': body.get('color', 'ocean'),
        'authorEmoji': body.get('authorEmoji', '❤️'),
        'createdAt': now_str('%Y-%m-%d %H:%M'),
        'timestamp': int(time.time()),
        'picks': 0,
        'pickedBy': [],
        'replies': [],
        'reactions': []
    }
    data['bottles'].append(bottle)
    # Keep only the latest 500 bottles
    if len(data['bottles']) > 500:
        data['bottles'] = data['bottles'][-500:]
    write_data(data)
    return {'success': True, 'bottle': bottle}

def get_random_bottles(count=5, userId=''):
    data = read_data()
    bottles = data.get('bottles', [])
    if not bottles:
        return {'bottles': []}
    n = min(count, len(bottles))
    sample = random.sample(bottles, min(n, len(bottles)))
    sample.sort(key=lambda b: b.get('timestamp', 0), reverse=True)
    safe_bottles = []
    for b in sample:
        safe_bottles.append({
            'id': b['id'],
            'content': b['content'],
            'color': b.get('color', 'ocean'),
            'authorEmoji': b.get('authorEmoji', '❤️'),
            'createdAt': b.get('createdAt', ''),
            'picks': b.get('picks', 0),
            'reactionCount': len(b.get('reactions', [])),
            'replyCount': len(b.get('replies', []))
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

def get_my_bottles(userId):
    if not userId:
        return {'error': '需要登录'}
    data = read_data()
    mine = [b for b in data.get('bottles', []) if b.get('authorId', '') == userId]
    mine.sort(key=lambda b: b.get('timestamp', 0), reverse=True)
    result = []
    for b in mine:
        result.append({
            'id': b['id'],
            'content': b['content'],
            'color': b.get('color', 'ocean'),
            'authorEmoji': b.get('authorEmoji', '❤️'),
            'createdAt': b.get('createdAt', ''),
            'picks': b.get('picks', 0),
            'reactionCount': len(b.get('reactions', [])),
            'replyCount': len(b.get('replies', []))
        })
    return {'bottles': result}

def reply_bottle(bottle_id, body):
    data = read_data()
    for b in data['bottles']:
        if b['id'] == bottle_id:
            content = body.get('content', '').strip()[:200]
            if not content:
                return {'error': '回复不能为空'}
            has_bad, matched = check_sensitive_full(content)
            if has_bad:
                return {'error': '内容包含敏感词汇'}
            reply = {
                'id': f"r_{int(time.time()*1000)}_{random.randint(100,999)}",
                'fromUserId': body.get('userId', ''),
                'content': content,
                'createdAt': now_str('%Y-%m-%d %H:%M'),
                'timestamp': int(time.time())
            }
            b.setdefault('replies', []).append(reply)
            write_data(data)
            return {'success': True, 'reply': reply}
    return {'error': '漂流瓶不存在'}

def get_bottle_replies(bottle_id, userId):
    if not userId:
        return {'error': '需要登录'}
    data = read_data()
    for b in data['bottles']:
        if b['id'] == bottle_id:
            # Only the author can see replies
            if b.get('authorId', '') != userId:
                return {'error': '无权查看'}
            replies = []
            for r in b.get('replies', []):
                replies.append({
                    'id': r['id'],
                    'content': r['content'],
                    'createdAt': r.get('createdAt', '')
                })
            return {'replies': replies, 'totalReactions': len(b.get('reactions', []))}
    return {'error': '漂流瓶不存在'}

def react_bottle(bottle_id, body):
    data = read_data()
    for b in data['bottles']:
        if b['id'] == bottle_id:
            emoji = body.get('emoji', '❤️')
            userId = body.get('userId', '')
            if not userId:
                return {'error': '需要登录'}
            reactions = b.setdefault('reactions', [])
            # Check if already reacted by this user → toggle
            existing = [r for r in reactions if r.get('userId') == userId]
            if existing:
                reactions.remove(existing[0])
                write_data(data)
                return {'success': True, 'count': len(reactions), 'emoji': b.get('authorEmoji', '❤️'), 'already': True, 'toggled': True}
            reactions.append({
                'userId': userId,
                'emoji': emoji,
                'createdAt': now_str('%Y-%m-%d %H:%M'),
                'timestamp': int(time.time())
            })
            write_data(data)
            return {'success': True, 'count': len(reactions), 'emoji': b.get('authorEmoji', '❤️'), 'already': False, 'toggled': False}
    return {'error': '漂流瓶不存在'}

# ===== Public Rooms handler =====

def delete_bottle(bottle_id, body):
    user_id = body.get('userId', '')
    if not user_id:
        return {'error': '需要登录'}
    data = read_data()
    for i, b in enumerate(data['bottles']):
        if b['id'] == bottle_id:
            if b.get('authorId', '') != user_id:
                return {'error': '只能删除自己的漂流瓶'}
            data['bottles'].pop(i)
            write_data(data)
            return {'success': True}
    return {'error': '漂流瓶不存在'}

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
