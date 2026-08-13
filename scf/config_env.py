#!/usr/bin/env python3
"""配置 SCF 环境变量 — 把密钥从源码迁移到 SCF 环境变量"""
import base64, datetime, hashlib, hmac, json, time, urllib.request, urllib.error, secrets

# 使用新密钥（COS只读+IMS）调用 SCF API
SECRET_ID = 'YOUR_TENCENT_SECRET_ID'
SECRET_KEY = 'YOUR_TENCENT_SECRET_KEY'
SERVICE, HOST, REGION, VERSION = 'scf', 'scf.tencentcloudapi.com', 'ap-shanghai', '2018-04-16'

# 复用已有 JWT_SECRET（从 .jwt_secret 读取），避免每次重新生成导致旧 token 失效
import os
jwt_file = '/app/data/所有对话/主对话/moodtree-build/.jwt_secret'
if os.path.exists(jwt_file):
    with open(jwt_file) as f:
        JWT_SECRET = f.read().strip()
    print(f'Loaded JWT_SECRET from .jwt_secret: {JWT_SECRET[:8]}...{JWT_SECRET[-8:]}')
else:
    JWT_SECRET = secrets.token_hex(32)
    print(f'Generated new JWT_SECRET: {JWT_SECRET[:8]}...{JWT_SECRET[-8:]}')

# 环境变量
env_vars = {
    'COS_SECRET_ID': 'YOUR_COS_SECRET_ID',
    'COS_SECRET_KEY': 'YOUR_COS_SECRET_KEY',
    'IMS_SECRET_ID': 'YOUR_TENCENT_SECRET_ID',
    'IMS_SECRET_KEY': 'YOUR_TENCENT_SECRET_KEY',
    'DEEPSEEK_API_KEY': 'YOUR_DEEPSEEK_API_KEY',
    'JWT_SECRET': JWT_SECRET,
}

# 调用 UpdateFunction 设置环境变量
payload = json.dumps({
    'FunctionName': 'moodtree-api',
    'Environment': {
        'Variables': [{'Key': k, 'Value': v} for k, v in env_vars.items()]
    }
})

ts = int(time.time())
date = datetime.datetime.utcfromtimestamp(ts).strftime('%Y-%m-%d')
ch = f'content-type:application/json; charset=utf-8\nhost:{HOST}\nx-tc-action:updatefunctionconfiguration\n'
sh = 'content-type;host;x-tc-action'
cr = f'POST\n/\n\n{ch}\n{sh}\n{hashlib.sha256(payload.encode()).hexdigest()}'
scope = f'{date}/{SERVICE}/tc3_request'
sts = f'TC3-HMAC-SHA256\n{ts}\n{scope}\n{hashlib.sha256(cr.encode()).hexdigest()}'
sd = hmac.new(f'TC3{SECRET_KEY}'.encode(), date.encode(), hashlib.sha256).digest()
ss = hmac.new(sd, SERVICE.encode(), hashlib.sha256).digest()
sk = hmac.new(ss, b'tc3_request', hashlib.sha256).digest()
sig = hmac.new(sk, sts.encode(), hashlib.sha256).hexdigest()
headers = {
    'Authorization': f'TC3-HMAC-SHA256 Credential={SECRET_ID}/{scope}, SignedHeaders={sh}, Signature={sig}',
    'Content-Type': 'application/json; charset=utf-8',
    'Host': HOST,
    'X-TC-Action': 'UpdateFunctionConfiguration',
    'X-TC-Timestamp': str(ts),
    'X-TC-Version': VERSION,
    'X-TC-Region': REGION,
}

req = urllib.request.Request(f'https://{HOST}', data=payload.encode(), headers=headers)
try:
    with urllib.request.urlopen(req, timeout=120) as r:
        print('HTTP', r.status)
        resp = json.loads(r.read().decode())
        if resp.get('Response', {}).get('Error'):
            print('ERROR:', json.dumps(resp['Response']['Error'], ensure_ascii=False))
        else:
            print('SUCCESS: Environment variables configured')
            print(f'  - {len(env_vars)} variables set')
            for k in env_vars:
                v_display = env_vars[k][:8] + '...' if len(env_vars[k]) > 12 else env_vars[k]
                print(f'  - {k} = {v_display}')
except urllib.error.HTTPError as e:
    print('HTTP', e.code)
    print(e.read().decode()[:2000])

# 保存 JWT_SECRET 供后续部署使用
with open('/app/data/所有对话/主对话/moodtree-build/.jwt_secret', 'w') as f:
    f.write(JWT_SECRET)
print(f'\nJWT_SECRET saved to .jwt_secret')
