import base64, datetime, hashlib, hmac, json, time, urllib.request, zipfile, io

SECRET_ID = 'YOUR_TENCENT_SECRET_ID'
SECRET_KEY = 'YOUR_TENCENT_SECRET_KEY'
SERVICE, HOST, REGION, VERSION = 'scf', 'scf.tencentcloudapi.com', 'ap-shanghai', '2018-04-16'

src = '/app/data/所有对话/主对话/moodtree-build/scf/index.py'
zip_out = '/app/data/所有对话/主对话/moodtree-build/scf/moodtree-api-v324.zip'
with zipfile.ZipFile(zip_out, 'w', zipfile.ZIP_DEFLATED) as z:
    z.write(src, 'index.py')
with open(zip_out, 'rb') as f:
    zip_b64 = base64.b64encode(f.read()).decode()
print('zip b64 bytes:', len(zip_b64))

payload = json.dumps({'FunctionName': 'moodtree-api', 'ZipFile': zip_b64})
ts = int(time.time())
date = datetime.datetime.utcfromtimestamp(ts).strftime('%Y-%m-%d')
ch = f'content-type:application/json; charset=utf-8\nhost:{HOST}\nx-tc-action:updatefunctioncode\n'
sh = 'content-type;host;x-tc-action'
cr = f'POST\n/\n\n{ch}\n{sh}\n{hashlib.sha256(payload.encode()).hexdigest()}'
scope = f'{date}/{SERVICE}/tc3_request'
sts = f'TC3-HMAC-SHA256\n{ts}\n{scope}\n{hashlib.sha256(cr.encode()).hexdigest()}'
sd = hmac.new(f'TC3{SECRET_KEY}'.encode(), date.encode(), hashlib.sha256).digest()
ss = hmac.new(sd, SERVICE.encode(), hashlib.sha256).digest()
sk = hmac.new(ss, b'tc3_request', hashlib.sha256).digest()
sig = hmac.new(sk, sts.encode(), hashlib.sha256).hexdigest()
headers = {'Authorization': f'TC3-HMAC-SHA256 Credential={SECRET_ID}/{scope}, SignedHeaders={sh}, Signature={sig}',
           'Content-Type': 'application/json; charset=utf-8', 'Host': HOST,
           'X-TC-Action': 'UpdateFunctionCode', 'X-TC-Timestamp': str(ts), 'X-TC-Version': VERSION, 'X-TC-Region': REGION}
req = urllib.request.Request(f'https://{HOST}', data=payload.encode(), headers=headers)
try:
    with urllib.request.urlopen(req, timeout=120) as r:
        print('HTTP', r.status); print(r.read().decode()[:2000])
except urllib.error.HTTPError as e:
    print('HTTP', e.code); print(e.read().decode()[:2000])
