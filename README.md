# MoodTree 🌳 情绪树洞

一个匿名的情绪树洞社交平台，支持私密房间、好友系统、日记本等功能。

## 技术栈
- **前端**: React 19 + Vite 6 + TypeScript
- **后端**: 腾讯云 SCF (Serverless Cloud Function) + COS (对象存储)
- **AI**: DeepSeek Chat API
- **部署**: EdgeOne Pages (前端) + 腾讯云 SCF (后端)

## 功能
- 📝 匿名发帖（3000字上限，自定义分类）
- 🎨 主题色选择器 / DIY欢迎语
- 🤖 AI陪伴聊天
- 👤 自定义头像和昵称（MT ID 用户系统）
- 📱 真实短信验证码登录与密码找回
- 🔐 可选择“记住这台设备”，支持30天免登录
- ☁️ 主题、欢迎语、夜间设置、自定义分类和草稿云端同步
- 🖼️ 头像上传、缩放与裁剪
- 👥 好友系统（通过ID搜索/添加好友）
- 🏠 私密房间（邀请码加入，成员可见）
- 📷 帖子封面图上传
- 📔 日记本系统（帖子整理成集，自定义封面）

## 本地开发
```bash
npm install --registry https://registry.npmmirror.com
npm run dev
```

## 构建
```bash
npm run build
```

构建产物在 `dist/index.html`，为单文件 HTML。

## 生产环境配置

复制 `.env.example` 并仅在部署平台或服务器中填写真实值。短信验证码需要先在腾讯云短信控制台开通应用、签名和模板，然后配置 `SMS_SDK_APP_ID`、`SMS_SIGN_NAME` 与 `SMS_TEMPLATE_ID`。`JWT_SECRET` 必须使用随机长字符串，且不能提交到 GitHub。

## 目录结构
```
├── src/
│   ├── moodtree-app-v2.tsx   # 前端主程序
│   ├── globals.css            # 全局样式
│   └── main.tsx              # 入口
├── scf/
│   └── index.py              # 后端云函数
├── dist/
│   └── index.html            # 构建产物
├── package.json
├── vite.config.ts
└── index.html
```
