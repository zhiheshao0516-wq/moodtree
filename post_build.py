#!/usr/bin/env python3
"""
MoodTree 构建后处理脚本
功能：将内联 JS 从 dist/index.html 提取到 COS 外部文件，
      使 HTML 体积远低于 EdgeOne KV 上限。

使用方法：npm run build && python3 post_build.py
"""
import re, sys, time
from qcloud_cos import CosConfig, CosS3Client

SECRET_ID  = 'YOUR_COS_SECRET_ID'
SECRET_KEY = 'YOUR_COS_SECRET_KEY'
REGION     = 'ap-shanghai'
BUCKET     = 'moodtree-1458420446'
COS_BASE   = f'https://{BUCKET}.cos.{REGION}.myqcloud.com'
KV_LIMIT   = 512500  # 安全上限（字节），留余量

def main():
    html_path = 'dist/index.html'
    html = open(html_path, encoding='utf-8').read()
    size_before = len(html.encode())

    # 提取内联 module script
    m = re.search(r'<script type="module" crossorigin>(.*?)</script>', html, re.DOTALL)
    if not m:
        print('⚠️ 未找到内联 module script，可能已外置。跳过。')
        return

    js_content = m.group(1)
    js_bytes = len(js_content.encode())

    config = CosConfig(Region=REGION, SecretId=SECRET_ID, SecretKey=SECRET_KEY, Scheme='https')
    client = CosS3Client(config)

    # 上传 JS 到 COS：文件名带版本号（部分国产浏览器无视 query string 缓存 JS，必须换路径）
    ver = int(time.time())
    js_key = f'assets/app_v{ver}.js'
    client.put_object(
        Bucket=BUCKET, Body=js_content.encode('utf-8'),
        Key=js_key, ContentType='application/javascript; charset=utf-8',
        CacheControl='no-cache'
    )
    # 设置公开读取
    client.put_object_acl(Bucket=BUCKET, Key=js_key, ACL='public-read')

    # 替换为外部引用
    new_html = html.replace(
        f'<script type="module" crossorigin>{js_content}</script>',
        f'<script type="module" crossorigin src="{COS_BASE}/{js_key}"></script>'
    )
    assert COS_BASE in new_html, '替换失败！'

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(new_html)

    size_after = len(new_html.encode())
    print(f'✅ JS 外置完成')
    print(f'   HTML: {size_before} → {size_after} bytes (省 {size_before-size_after})')
    print(f'   JS on COS: {js_bytes} bytes → {COS_BASE}/{js_key}')
    print(f'   KV上限 {KV_LIMIT}: {"✅ 通过" if size_after < KV_LIMIT else "❌ 仍超限！"}')

if __name__ == '__main__':
    main()
