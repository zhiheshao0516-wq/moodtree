"use client";

import { FormEvent, useEffect, useMemo, useState, useRef } from "react";

// ===== Types =====
type Need = "我只想发泄" | "我希望有人安慰" | "我希望有人给建议" | "我希望有人陪我聊天";
type Tab = "home" | "rooms" | "publish" | "mine" | "detail";
type Visibility = "public" | "ai-only" | "private" | "room";
type AuthUser = {
  id: string; phone?: string; nickname: string; avatar: string;
  avatarType: "image" | "char"; createdAt?: string; provider?: "phone";
};

type Comment = { id: string; author: string; avatar?: string; avatarType?: string; text: string; time: string; likes: number; replies: Comment[] };
type Post = {
  id: string; author: string; avatar: string; avatarType?: string; authorId?: string;
  title: string; content: string; category: string;
  need: Need; time: string; likes: number; hugs: number; same: number;
  comments: Comment[]; saved?: boolean; mine?: boolean;
  visibility: Visibility; coverImage?: string; roomId?: string; diaryId?: string;
};

type Room = { id: string; name: string; owner: string; inviteCode: string; members: any[]; cover?: string; createdAt?: string };
type Diary = { id: string; userId: string; name: string; cover?: string; postIds?: string[]; posts?: Post[]; createdAt?: string };
type Friend = { id: string; nickname: string; avatar: string; avatarType?: string };
type FriendReq = { from: string; nickname: string; avatar: string; avatarType?: string; time: string };

// ===== Constants =====
const defaultCategories = ["学业", "感情", "家庭", "工作", "生活"];
const categoryIcons: Record<string, string> = { "全部": "✦", "学业": "书", "感情": "心", "家庭": "家", "工作": "包", "生活": "日" };
const needs: Need[] = ["我只想发泄", "我希望有人安慰", "我希望有人给建议", "我希望有人陪我聊天"];
const avatarColors = ["#f1c9a5", "#a8cbb4", "#d6b5a6", "#b7c7dd", "#c9b6d7"];
const nicknamePool = ["雾中的铃兰", "一颗青梅", "路过的晚风", "半糖月亮", "安静的鲸", "山间的鹿", "深海星尘", "林深见鹿", "半夏微凉", "拾光者", "晚来风急", "云上花开", "星河渡口", "雨后初晴", "晨雾微光", "秋水长天", "南风知意", "岛上书店", "五月天", "听雨眠"];
const avatarChars = ["芽", "叶", "风", "月", "鹿", "星", "光", "雨", "云", "海", "晨", "霜", "露", "絮", "舟"];

const moodCopy: Record<Need, string> = {
  "我只想发泄": "听你说就好", "我希望有人安慰": "给我一点温暖", "我希望有人给建议": "帮我想想办法", "我希望有人陪我聊天": "陪我待一会儿",
};

const visibilityOptions: { value: Visibility; label: string; desc: string; icon: string }[] = [
  { value: "public", label: "公开", desc: "大家能看到并回应", icon: "🌍" },
  { value: "ai-only", label: "AI陪伴", desc: "只有AI回应你", icon: "🤖" },
  { value: "private", label: "仅自己", desc: "只有你能看到", icon: "🔒" },
];

const themePresets = [
  { name: "森绿", color: "#6f917d" }, { name: "海蓝", color: "#5b8ef" }, { name: "暖橙", color: "#e8915c" },
  { name: "蔷薇", color: "#d67ba0" }, { name: "藏蓝", color: "#6b7fd7" }, { name: "紫薪", color: "#9b6ec4" },
  { name: "林海", color: "#4a9d8f" }, { name: "暖黄", color: "#d4a84b" }, { name: "红枫", color: "#c4543d" },
  { name: "墨黑", color: "#4a4a4a" },
];

// ===== API Layer =====
const API_BASE = "https://1458420446-758vamuceo.ap-shanghai.tencentscf.com";

async function apiGet(path: string) {
  const resp = await fetch(`${API_BASE}${path}`);
  return resp.json();
}
async function apiPost(path: string, body: any) {
  const resp = await fetch(`${API_BASE}${path}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  return resp.json();
}
async function apiPut(path: string, body: any) {
  const resp = await fetch(`${API_BASE}${path}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  return resp.json();
}

// ===== Helpers =====
function getOrCreateNickname(): string {
  let nick = localStorage.getItem("moodtree-nickname");
  if (!nick) { nick = nicknamePool[Math.floor(Math.random() * nicknamePool.length)]; localStorage.setItem("moodtree-nickname", nick); }
  return nick;
}
function getOrCreateAvatar(): string {
  let av = localStorage.getItem("moodtree-avatar");
  if (!av) { av = avatarChars[Math.floor(Math.random() * avatarChars.length)]; localStorage.setItem("moodtree-avatar", av); }
  return av;
}
function getCustomCategories(): string[] { try { return JSON.parse(localStorage.getItem("moodtree-custom-cats") || "[]"); } catch { return []; } }
function addCustomCategory(name: string) {
  const cats = getCustomCategories();
  if (!cats.includes(name) && !defaultCategories.includes(name)) { cats.push(name); localStorage.setItem("moodtree-custom-cats", JSON.stringify(cats)); }
}
function getAllCategories(): string[] { return [...defaultCategories, ...getCustomCategories()]; }

function normalizePost(p: any): Post {
  return {
    id: String(p.id || p._id || Date.now()), author: p.author || "匿名", avatar: p.avatar || "云",
    avatarType: p.avatarType || "char", authorId: p.authorId, title: p.title || "", content: p.content || "",
    category: p.category || "生活", need: (p.need as Need) || "我只想发泄", time: p.time || "刚刚",
    likes: p.likes || 0, hugs: p.hugs || 0, same: p.same || 0,
    comments: (p.comments || []).map((c: any) => ({ id: String(c.id || Date.now()), author: c.author || "匿名", avatar: c.avatar, avatarType: c.avatarType, text: c.text || "", time: c.time || "刚刚", likes: c.likes || 0, replies: c.replies || [] })),
    saved: false, mine: false, visibility: (p.visibility as Visibility) || "public",
    coverImage: p.coverImage, roomId: p.roomId, diaryId: p.diaryId,
  };
}

async function compressAndUploadImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = async () => {
        const canvas = document.createElement("canvas");
        const maxW = 800; const scale = Math.min(1, maxW / img.width);
        canvas.width = img.width * scale; canvas.height = img.height * scale;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const b64 = canvas.toDataURL("image/jpeg", 0.7);
        try { const result = await apiPost("/api/upload", { filename: `img_${Date.now()}`, image: b64 }); resolve(result.url || ""); }
        catch (err) { reject(err); }
      };
      img.onerror = reject; img.src = e.target?.result as string;
    };
    reader.onerror = reject; reader.readAsDataURL(file);
  });
}

function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard) return navigator.clipboard.writeText(text);
  return new Promise((resolve) => { const ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); document.body.removeChild(ta); resolve(); });
}

function getAvatarColor(id: string): string { return avatarColors[Number(String(id).replace(/\D/g, "").slice(-2)) % avatarColors.length]; }

// ===== Color utilities =====
function hexToHsl(hex: string): [number, number, number] {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) { r = parseInt(hex[1]+hex[1],16); g = parseInt(hex[2]+hex[2],16); b = parseInt(hex[3]+hex[3],16); }
  else { r = parseInt(hex.slice(1,3),16); g = parseInt(hex.slice(3,5),16); b = parseInt(hex.slice(5,7),16); }
  r/=255; g/=255; b/=255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b);
  let h = 0, s = 0, l = (max+min)/2;
  if (max !== min) { const d = max-min; s = l > 0.5 ? d/(2-max-min) : d/(max+min);
    if (max === r) h = ((g-b)/d + (g<b?6:0)); else if (max === g) h = (b-r)/d + 2; else h = (r-g)/d + 4; h /= 6; }
  return [h*360, s*100, l*100];
}
function hslToHex(h: number, s: number, l: number): string {
  h /= 360; s /= 100; l /= 100; let r, g, b;
  if (s === 0) { r = g = b = l; } else {
    const hue2rgb = (p: number, q: number, t: number) => { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1/6) return p + (q-p)*6*t; if (t < 1/2) return q; if (t < 2/3) return p + (q-p)*(2/3-t)*6; return p; };
    const q = l < 0.5 ? l*(1+s) : l+s-l*s; const p = 2*l - q;
    r = hue2rgb(p, q, h+1/3); g = hue2rgb(p, q, h); b = hue2rgb(p, q, h-1/3);
  }
  const toHex = (x: number) => Math.round(x*255).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
function hslToRgba(h: number, s: number, l: number, a: number): string {
  h /= 360; s /= 100; l /= 100; let r, g, b;
  if (s === 0) { r = g = b = l; } else {
    const hue2rgb = (p: number, q: number, t: number) => { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1/6) return p + (q-p)*6*t; if (t < 1/2) return q; if (t < 2/3) return p + (q-p)*(2/3-t)*6; return p; };
    const q = l < 0.5 ? l*(1+s) : l+s-l*s; const p = 2*l - q;
    r = hue2rgb(p, q, h+1/3); g = hue2rgb(p, q, h); b = hue2rgb(p, q, h-1/3);
  }
  return `rgba(${Math.round(r*255)},${Math.round(g*255)},${Math.round(b*255)},${a})`;
}
function applyThemeColor(baseColor: string) {
  const root = document.documentElement;
  const [h, s, l] = hexToHsl(baseColor);
  const sageDark = hslToHex(h, Math.min(s+5, 100), Math.max(l-15, 5));
  const sageSoft = hslToHex(h, Math.min(s, 40), 93);
  const cream = hslToHex(h, Math.min(s, 15), 95);
  root.style.setProperty("--sage", baseColor); root.style.setProperty("--sage-dark", sageDark);
  root.style.setProperty("--sage-soft", sageSoft); root.style.setProperty("--cream", cream);
  let override = document.getElementById("mt-theme-overrides");
  if (!override) { override = document.createElement("style"); override.id = "mt-theme-overrides"; document.head.appendChild(override); }
  const shadow = hslToRgba(h, s, l, 0.2); const shadowDark = hslToRgba(h, s, Math.max(l-15, 5), 0.26);
  override.textContent = `
    .write-btn,.hero-button,.primary,.form-actions .primary { background:${sageDark}!important; box-shadow:0 7px 20px ${shadow}!important; }
    .write-btn:hover,.hero-button:hover,.primary:hover { background:${hslToHex(h, s, Math.max(l-20, 3))}!important; box-shadow:0 10px 25px ${shadowDark}!important; }
    .logo-mark { background:${sageDark}!important; box-shadow:0 6px 18px ${hslToRgba(h,s,Math.max(l-10,5),0.17)}!important; }
    .hero { background:linear-gradient(112deg,${hslToHex(h,Math.min(s,15),94)} 0%,${cream} 58%,${sageSoft} 100%)!important; }
    .hero h1 em { color:${sageDark}!important; } .hero h1 em:after { background:${hslToHex(h,Math.min(s,30),80)}!important; }
    .eyebrow { color:${sageDark}!important; } .live-dot { background:${baseColor}!important; box-shadow:0 0 0 5px ${sageSoft}!important; }
    .avatar { background:${hslToHex(h,Math.min(s,30),65)}!important; }
    .need-pill { background:${sageSoft}!important; color:${hslToHex(h,s,Math.max(l-15,10))}!important; }
    .anonymous-note { background:${sageSoft}!important; } .privacy { color:${hslToHex(h,s,Math.max(l-10,10))}!important; }
    .mobile-write .icon { background:${sageDark}!important; box-shadow:0 7px 17px ${shadow}!important; }
    .mobile-nav button.active { color:${sageDark}!important; } .desktop-nav button.active:after { background:${baseColor}!important; }
    .profile-avatar { background:${hslToHex(h,Math.min(s,30),60)}!important; }
    .profile-card { background:linear-gradient(110deg,${cream},${sageSoft})!important; }
    .mine-layout aside button.active { background:${sageSoft}!important; color:${sageDark}!important; }
    .categories button.selected { background:${sageDark}!important; border-color:${sageDark}!important; box-shadow:0 8px 22px ${shadow}!important; }
    .comment-form button,.phone-form>button { background:${sageDark}!important; }
    .social-login .wechat span { background:#20b967!important; }
    .leaf { background:${hslToHex(h,Math.min(s,30),70)}!important; } .l2 { background:${hslToHex(h,Math.min(s,35),60)}!important; }
    .l3 { background:${hslToHex(h,Math.min(s,25),72)}!important; } .l4 { background:${hslToHex(h,Math.min(s,30),62)}!important; }
    .l5 { background:${hslToHex(h,Math.min(s,20),75)}!important; }
    .glow-one { background:${hslToRgba(h,Math.min(s,40),70,0.28)}!important; }
    .theme-fab { background:${sageDark}!important; box-shadow:0 6px 20px ${shadow}!important; }
    .tag { background:${sageSoft}!important; color:${hslToHex(h,s,Math.max(l-15,10))}!important; }
    .empty>button { background:${sageDark}!important; }
    .hero:before { background-image:radial-gradient(${hslToHex(h,Math.min(s,30),65)} .7px,transparent .7px)!important; }
    .room-card,.diary-card { border-color:${hslToHex(h,Math.min(s,20),88)}!important; }
    .room-card:hover,.diary-card:hover { border-color:${hslToHex(h,Math.min(s,30),75)}!important; }
    .id-badge { background:${sageSoft}!important; color:${sageDark}!important; }
    .modal-overlay { backdrop-filter:blur(8px); }
  `;
}

// ===== Components =====
function Logo() { return <div className="logo" aria-label="MoodTree 情绪树洞"><span className="logo-mark">M</span><span><b>MoodTree</b><small>情绪树洞</small></span></div>; }
function Icon({ children }: { children: string }) { return <span aria-hidden="true" className="icon">{children}</span>; }

function AvatarView({ user, size }: { user: { avatar: string; avatarType?: string; id?: string }; size?: number }) {
  const sz = size || 35;
  if (user.avatarType === "image" && user.avatar) {
    return <span className="avatar" style={{ width: sz, height: sz, backgroundImage: `url(${user.avatar})`, backgroundSize: "cover", backgroundPosition: "center", flex: `0 0 ${sz}px` }} />;
  }
  return <span className="avatar" style={{ width: sz, height: sz, background: getAvatarColor(user.id || user.avatar), flex: `0 0 ${sz}px` }}>{user.avatar}</span>;
}

function ThemePicker({ themeColor, setThemeColor }: { themeColor: string; setThemeColor: (c: string) => void }) {
  const [open, setOpen] = useState(false);
  const selectColor = (color: string) => { setThemeColor(color); localStorage.setItem("moodtree-theme-color", color); applyThemeColor(color); };
  return <>
    <button className={`theme-fab ${open ? "active" : ""}`} onClick={() => setOpen(!open)} aria-label="主题颜色">🎨</button>
    {open && <div className="theme-panel"><h3>选择主题色</h3>
      <div className="theme-presets">{themePresets.map(p => <button key={p.color} className={themeColor === p.color ? "selected" : ""} style={{ background: p.color }} onClick={() => selectColor(p.color)} title={p.name} />)}</div>
      <div className="theme-custom-row"><label>自定义</label><input type="color" value={themeColor} onChange={e => selectColor(e.target.value)} /><span style={{ fontSize: "10px", color: "var(--muted)" }}>{themeColor}</span></div>
      <button className="theme-reset" onClick={() => selectColor("#6f917d")}>恢复默认森绿</button>
    </div>}
  </>;
}

export function MoodTreeApp() {
  const [tab, setTab] = useState<Tab>("home");
  const [posts, setPosts] = useState<Post[]>([]);
  const [category, setCategory] = useState<string>("全部");
  const [selectedId, setSelectedId] = useState("");
  const [toast, setToast] = useState("");
  const [user, setUser] = useState<AuthUser | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [themeColor, setThemeColor] = useState("#6f917d");
  const [loadingPosts, setLoadingPosts] = useState(true);

  // v3 state
  const [publishRoomId, setPublishRoomId] = useState<string>("");
  const [rooms, setRooms] = useState<Room[]>([]);
  const [roomDetail, setRoomDetail] = useState<{ room: Room; members: any[]; posts: Post[] } | null>(null);
  const [roomView, setRoomView] = useState<"list" | "detail">("list");
  const [loadingRooms, setLoadingRooms] = useState(false);
  const [showCreateRoom, setShowCreateRoom] = useState(false);
  const [showJoinRoom, setShowJoinRoom] = useState(false);
  const [showProfileEdit, setShowProfileEdit] = useState(false);

  useEffect(() => {
    apiGet("/api/posts").then((data) => {
      const list = Array.isArray(data) ? data : (data.posts || data.data || []);
      setPosts(list.map(normalizePost));
      setLoadingPosts(false);
    }).catch(() => { setLoadingPosts(false); });

    const signedIn = localStorage.getItem("moodtree-user");
    if (signedIn) { try { setUser(JSON.parse(signedIn)); } catch {} }
    const tc = localStorage.getItem("moodtree-theme-color");
    if (tc) { setThemeColor(tc); applyThemeColor(tc); }
  }, []);

  // Fetch rooms when entering rooms tab
  useEffect(() => {
    if (tab === "rooms" && user && roomView === "list") { fetchRooms(); }
  }, [tab, user, roomView]);

  const fetchRooms = async () => {
    if (!user) return;
    setLoadingRooms(true);
    try { const data = await apiGet(`/api/rooms/list/${user.id}`); setRooms(data.rooms || []); }
    catch {} setLoadingRooms(false);
  };

  const openRoom = async (id: string) => {
    try {
      const data = await apiGet(`/api/rooms/${id}`);
      if (data.room) { setRoomDetail({ room: data.room, members: data.members || [], posts: (data.posts || []).map(normalizePost) }); setRoomView("detail"); }
    } catch { flash("加载房间失败"); }
  };

  const navigate = (next: Tab) => { setTab(next); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const requireLogin = (next: Tab) => { if (!user) { setShowLogin(true); return; } navigate(next); };
  const openPost = (id: string) => { setSelectedId(id); navigate("detail"); };
  const flash = (message: string) => { setToast(message); window.setTimeout(() => setToast(""), 1800); };

  const react = (id: string, key: "likes" | "hugs" | "same" | "saved") => {
    if (key === "saved") { setPosts(ps => ps.map(p => p.id === id ? { ...p, saved: !p.saved } : p)); flash("收藏状态已更新"); }
    else { setPosts(ps => ps.map(p => p.id === id ? { ...p, [key]: p[key] + 1 } : p)); apiPost(`/api/posts/${id}/react`, { type: key }).catch(() => {}); flash(key === "hugs" ? "抱抱已送达 🤍" : key === "same" ? "谢谢你让 TA 知道并不孤单" : "已点亮一颗心"); }
  };

  const allCats = useMemo(() => ["全部", ...getAllCategories()], [posts]);
  const filtered = useMemo(() => category === "全部" ? posts : posts.filter(p => p.category === category), [posts, category]);
  const selected = posts.find(p => p.id === selectedId) || posts[0];

  const writeInRoom = (roomId: string) => { setPublishRoomId(roomId); navigate("publish"); };

  return (
    <div className="app-shell">
      <header className="topbar"><div className="topbar-inner">
        <button className="plain logo-button" onClick={() => navigate("home")}><Logo /></button>
        <nav className="desktop-nav" aria-label="主导航">
          <button className={tab === "home" ? "active" : ""} onClick={() => navigate("home")}>首页</button>
          <button className={tab === "rooms" ? "active" : ""} onClick={() => requireLogin("rooms")}>房间</button>
          <button className={tab === "publish" ? "active" : ""} onClick={() => requireLogin("publish")}>写一写</button>
          <button className={tab === "mine" ? "active" : ""} onClick={() => requireLogin("mine")}>我的</button>
        </nav>
        <div className="top-actions"><button className="login-link" onClick={() => user ? navigate("mine") : setShowLogin(true)}>{user ? user.nickname : "登录"}</button><button className="write-btn" onClick={() => requireLogin("publish")}><Icon>＋</Icon> 写下心情</button></div>
      </div></header>

      <main>
        {tab === "home" && <Home posts={filtered} category={category} setCategory={setCategory} allCats={allCats} openPost={openPost} react={react} onWrite={() => requireLogin("publish")} user={user} loading={loadingPosts} />}
        {tab === "rooms" && user && <Rooms user={user} rooms={rooms} roomView={roomView} roomDetail={roomDetail} loadingRooms={loadingRooms} onOpenRoom={openRoom} onBackToList={() => { setRoomView("list"); setRoomDetail(null); }} onCreateRoom={() => setShowCreateRoom(true)} onJoinRoom={() => setShowJoinRoom(true)} onWriteInRoom={writeInRoom} onCopyCode={(code) => { copyToClipboard(code); flash(`邀请码 ${code} 已复制`); }} openPost={openPost} flash={flash} />}
        {tab === "publish" && user && <Publish onCancel={() => { setPublishRoomId(""); navigate(publishRoomId ? "rooms" : "home"); }} onPublish={async (post) => {
          try {
            const result = await apiPost("/api/posts", { title: post.title, content: post.content, category: post.category, need: post.need, author: post.author, avatar: post.avatar, visibility: post.visibility, authorId: post.authorId, avatarType: post.avatarType, coverImage: post.coverImage, roomId: post.roomId, diaryId: post.diaryId });
            const newPost = normalizePost(result.post || result.data || result);
            setPosts(ps => [newPost, ...ps]); setSelectedId(newPost.id); setPublishRoomId("");
            flash("你的心事已经被树洞接住了"); navigate("detail");
          } catch { flash("发布失败，请稍后重试"); }
        }} user={user} publishRoomId={publishRoomId} flash={flash} />}
        {tab === "detail" && selected && <Detail post={selected} onBack={() => navigate("home")} react={react} update={(post) => setPosts(ps => ps.map(p => p.id === post.id ? post : p))} user={user} />}
        {tab === "mine" && user && <Mine posts={posts} openPost={openPost} user={user} onSignOut={() => { localStorage.removeItem("moodtree-user"); setUser(null); navigate("home"); flash("已安全退出"); }} onEditProfile={() => setShowProfileEdit(true)} flash={flash} />}
      </main>

      <nav className="mobile-nav" aria-label="底部导航">
        <button className={tab === "home" ? "active" : ""} onClick={() => navigate("home")}><Icon>⌂</Icon><span>首页</span></button>
        <button className={tab === "rooms" ? "active" : ""} onClick={() => requireLogin("rooms")}><Icon>◈</Icon><span>房间</span></button>
        <button className="mobile-write" onClick={() => requireLogin("publish")}><Icon>＋</Icon><span>写</span></button>
        <button className={tab === "mine" ? "active" : ""} onClick={() => requireLogin("mine")}><Icon>○</Icon><span>我的</span></button>
      </nav>

      <ThemePicker themeColor={themeColor} setThemeColor={setThemeColor} />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} onSuccess={(nextUser) => { localStorage.setItem("moodtree-user", JSON.stringify(nextUser)); setUser(nextUser); setShowLogin(false); flash("登录成功，欢迎回到树洞"); navigate("mine"); }} />}
      {showProfileEdit && user && <ProfileEditModal onClose={() => setShowProfileEdit(false)} user={user} flash={flash} onSuccess={(updated) => { localStorage.setItem("moodtree-user", JSON.stringify(updated)); setUser(updated); setShowProfileEdit(false); flash("资料已更新"); }} />}
      {showCreateRoom && user && <CreateRoomModal onClose={() => setShowCreateRoom(false)} userId={user.id} flash={flash} onSuccess={() => { setShowCreateRoom(false); fetchRooms(); flash("房间创建成功"); }} />}
      {showJoinRoom && user && <JoinRoomModal onClose={() => setShowJoinRoom(false)} userId={user.id} flash={flash} onSuccess={() => { setShowJoinRoom(false); fetchRooms(); flash("已加入房间"); }} />}
      {toast && <div className="toast" role="status">{toast}</div>}
    </div>
  );
}

function Home({ posts, category, setCategory, allCats, openPost, react, onWrite, user, loading }: { posts: Post[]; category: string; setCategory: (c: string) => void; allCats: string[]; openPost: (id: string) => void; react: (id: string, key: "likes" | "hugs" | "same" | "saved") => void; onWrite: () => void; user: AuthUser | null; loading: boolean }) {
  const welcomeMsg = localStorage.getItem("moodtree-welcome-msg") || "";
  return <>
    <section className="hero">
      <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
      <div className="hero-inner">
        <div className="eyebrow"><span>✦</span> {user ? (welcomeMsg || `${user.nickname}，今天还好吗`) : "今天还好吗"}</div>
        <h1>有些话，<em>说出来</em>就会轻一点</h1>
        <p>这里没有人认识你。把情绪留在树洞里，会有人认真听你说。</p>
        <button className="hero-button" onClick={onWrite}>写下此刻的心情 <span>→</span></button>
        <div className="hero-note"><span className="faces">🌿&nbsp; ☁️&nbsp; 🌙</span><span>登录后仍然匿名，真实身份不会展示给其他人</span></div>
      </div>
      <div className="tree-art" aria-hidden="true"><span className="leaf l1" /><span className="leaf l2" /><span className="leaf l3" /><span className="leaf l4" /><span className="leaf l5" /><span className="trunk" /><span className="ground" /></div>
    </section>
    <div className="content-wrap">
      <section className="category-section" aria-label="分类">
        <div className="section-heading"><div><p>EXPLORE</p><h2>最近的树洞</h2></div><span>选一个话题，找到同频的人</span></div>
        <div className="categories">{allCats.map((c) => <button key={c} className={category === c ? "selected" : ""} onClick={() => setCategory(c)}><span>{categoryIcons[c] || "✎"}</span>{c}</button>)}</div>
      </section>
      <section className="feed-section">
        <div className="feed-title"><div><span className="live-dot" /><h2>{category === "全部" ? "最新心事" : `${category} · 心事`}</h2></div></div>
        {loading ? <div className="empty"><span>🍃</span><h3>正在加载…</h3></div> : <>
        <div className="post-grid">{posts.map((post, index) => <PostCard key={post.id} post={post} featured={index === 0} open={() => openPost(post.id)} react={react} />)}</div>
        {posts.length === 0 && <div className="empty"><span>🍃</span><h3>这里还很安静</h3><p>要不要成为第一个分享心事的人？</p><button onClick={onWrite}>写下心情</button></div>}
        </>}
      </section>
    </div>
  </>;
}

function PostCard({ post, featured, open, react }: { post: Post; featured?: boolean; open: () => void; react: (id: string, key: "likes" | "hugs" | "same" | "saved") => void }) {
  return <article className={`post-card ${featured ? "featured" : ""}`}>
    {post.coverImage && <button className="post-cover plain" onClick={open}><img src={post.coverImage} alt="" /></button>}
    <div className="post-top"><div className="author"><AvatarView user={{ avatar: post.avatar, avatarType: post.avatarType, id: post.authorId || post.id }} /><div><b>{post.author}</b><span>{post.time}</span></div></div><span className="tag">{post.category}</span></div>
    <button className="post-body plain" onClick={open}><h3>{post.title}</h3><p>{post.content}</p></button>
    <div className="need-pill"><span>◌</span>{moodCopy[post.need]}</div>
    {post.visibility !== "public" && <div style={{ fontSize: "9px", color: "#9ba19d", marginTop: "8px" }}>{post.visibility === "ai-only" ? "🤖 仅AI陪伴" : post.visibility === "room" ? "◈ 房间内可见" : "🔒 仅自己可见"}</div>}
    <div className="post-actions">
      <button onClick={() => react(post.id, "likes")} aria-label="点赞">♡ <span>{post.likes}</span></button>
      <button onClick={() => react(post.id, "hugs")} aria-label="抱抱">抱 <span>{post.hugs}</span></button>
      <button onClick={open} aria-label="评论">○ <span>{post.comments.length}</span></button>
      <button className={post.saved ? "saved" : ""} onClick={() => react(post.id, "saved")} aria-label="收藏">{post.saved ? "◆" : "◇"}</button>
    </div>
  </article>;
}

function Publish({ onCancel, onPublish, user, publishRoomId, flash }: { onCancel: () => void; onPublish: (p: Post) => void; user: AuthUser; publishRoomId: string; flash: (m: string) => void }) {
  const [title, setTitle] = useState(""); const [content, setContent] = useState("");
  const [category, setCategory] = useState("生活"); const [need, setNeed] = useState<Need>(needs[1]);
  const [visibility, setVisibility] = useState<Visibility>("public");
  const [customCat, setCustomCat] = useState(""); const [showCustomCat, setShowCustomCat] = useState(false);
  const [coverImage, setCoverImage] = useState(""); const [uploading, setUploading] = useState(false);
  const [diaries, setDiaries] = useState<Diary[]>([]); const [selectedDiary, setSelectedDiary] = useState("");
  const allCats = useMemo(() => getAllCategories(), []);

  useEffect(() => { apiGet(`/api/diaries/${user.id}`).then(d => setDiaries(d.diaries || [])).catch(() => {}); }, [user.id]);

  const handleCoverUpload = async (file: File) => {
    setUploading(true);
    try { const url = await compressAndUploadImage(file); setCoverImage(url); } catch { flash("封面图上传失败"); }
    setUploading(false);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    addCustomCategory(category);
    onPublish({
      id: Date.now().toString(), author: user.nickname, avatar: user.avatar, avatarType: user.avatarType, authorId: user.id,
      title, content, category, need, time: "刚刚", likes: 0, hugs: 0, same: 0, comments: [], mine: true,
      visibility: publishRoomId ? "room" : visibility, coverImage: coverImage || undefined,
      roomId: publishRoomId || undefined, diaryId: selectedDiary || undefined,
    });
  };

  return <div className="page-wrap narrow"><button className="back-button" onClick={onCancel}>← 返回</button><div className="page-intro"><span>WRITE IT DOWN</span><h1>写下你想说的话</h1><p>这里是安全的。你可以诚实地做自己。</p></div>
    <form className="publish-card" onSubmit={submit}>
      <div className="anonymous-note"><AvatarView user={user} /><div><small>你的匿名昵称</small><b>{user.nickname}</b></div><span className="privacy">隐私已保护</span></div>

      {publishRoomId && <div className="room-publish-hint">◈ 你正在房间内发帖，只有房间成员可以看到</div>}

      {/* Cover image upload */}
      <label className="cover-upload-section">帖子封面图（可选）
        {coverImage ? (
          <div className="cover-preview"><img src={coverImage} alt="" /><button type="button" onClick={() => setCoverImage("")}>移除封面</button></div>
        ) : (
          <label className="cover-upload-btn">{uploading ? "上传中…" : "＋ 上传一张你喜欢的照片"}
            <input type="file" accept="image/*" style={{ display: "none" }} onChange={e => { const f = e.target.files?.[0]; if (f) handleCoverUpload(f); }} />
          </label>
        )}
      </label>

      <label>给这份心情一个标题<input value={title} onChange={e => setTitle(e.target.value)} maxLength={50} placeholder="比如：今天发生了一件让我很难过的事…" required /><small>{title.length}/50</small></label>
      <label>想说的话<textarea value={content} onChange={e => setContent(e.target.value)} maxLength={3000} placeholder="不用组织语言，想到什么就写什么。我们会认真听你说…" required /><small>{content.length}/3000</small></label>
      <fieldset><legend>这件事关于</legend>
        <div className="choice-row">{allCats.map(c => <button type="button" key={c} className={category === c ? "chosen" : ""} onClick={() => setCategory(c)}>{c}</button>)}{!showCustomCat && <button type="button" onClick={() => setShowCustomCat(true)}>＋ 自定义</button>}</div>
        {showCustomCat && <div className="custom-cat-row"><input value={customCat} onChange={e => setCustomCat(e.target.value)} placeholder="输入自定义分类名" maxLength={10} autoFocus /><button type="button" onClick={() => { const n = customCat.trim(); if (n) { addCustomCategory(n); setCategory(n); setCustomCat(""); setShowCustomCat(false); } }}>添加</button></div>}
      </fieldset>
      <fieldset><legend>此刻，你希望得到什么？</legend><div className="need-choices">{needs.map((n, i) => <button type="button" key={n} className={need === n ? "chosen" : ""} onClick={() => setNeed(n)}><span>{["☁", "♡", "灯", "○"][i]}</span><b>{n}</b><small>{moodCopy[n]}</small></button>)}</div></fieldset>

      {!publishRoomId && <fieldset><legend>这条心事的可见性</legend><div className="visibility-choices">{visibilityOptions.map(v => <button type="button" key={v.value} className={visibility === v.value ? "chosen" : ""} onClick={() => setVisibility(v.value)}><span>{v.icon}</span><b>{v.label}</b><small>{v.desc}</small></button>)}</div></fieldset>}

      {diaries.length > 0 && <fieldset><legend>添加到日记本（可选）</legend><div className="choice-row"><button type="button" className={selectedDiary === "" ? "chosen" : ""} onClick={() => setSelectedDiary("")}>不添加</button>{diaries.map(d => <button type="button" key={d.id} className={selectedDiary === d.id ? "chosen" : ""} onClick={() => setSelectedDiary(d.id)}>{d.name}</button>)}</div></fieldset>}

      <div className="form-actions"><button type="button" onClick={onCancel}>先不写了</button><button className="primary" type="submit" disabled={!title.trim() || !content.trim()}>匿名发布 <span>→</span></button></div>
    </form>
  </div>;
}

function Detail({ post, onBack, react, update, user }: { post: Post; onBack: () => void; react: (id: string, key: "likes" | "hugs" | "same" | "saved") => void; update: (post: Post) => void; user: AuthUser }) {
  const [text, setText] = useState(""); const [replyTo, setReplyTo] = useState<string | null>(null); const [commentSending, setCommentSending] = useState(false);
  const [aiMessages, setAiMessages] = useState<{role: "user"|"ai", text: string}[]>([{role: "ai", text: "你好，我在这里。有什么想说的，都可以告诉我。"}]);
  const [aiInput, setAiInput] = useState(""); const [aiLoading, setAiLoading] = useState(false);

  const sendAiMessage = async () => {
    if (!aiInput.trim() || aiLoading) return;
    const msg = aiInput.trim(); setAiMessages(m => [...m, {role: "user", text: msg}]); setAiInput(""); setAiLoading(true);
    try { const result = await apiPost("/api/ai/chat", { message: msg, postTitle: post.title, postContent: post.content }); setAiMessages(m => [...m, {role: "ai", text: result.reply || result.response || result.message || "我听到了。谢谢你愿意分享。"}]); }
    catch { setAiMessages(m => [...m, {role: "ai", text: "抱歉，我暂时无法回应，请稍后再试。"}]); }
    setAiLoading(false);
  };

  const addComment = async (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim() || commentSending) return;
    setCommentSending(true);
    try {
      const result = await apiPost(`/api/posts/${post.id}/comments`, { author: user.nickname, avatar: user.avatar, avatarType: user.avatarType, authorId: user.id, text: text.trim() });
      const newComment: Comment = result.comment || result.data || { id: Date.now().toString(), author: user.nickname, text: text.trim(), time: "刚刚", likes: 0, replies: [] };
      if (replyTo) update({ ...post, comments: post.comments.map(c => c.id === replyTo ? { ...c, replies: [...c.replies, newComment] } : c) });
      else update({ ...post, comments: [...post.comments, newComment] });
      setText(""); setReplyTo(null);
    } catch {
      const next: Comment = { id: Date.now().toString(), author: user.nickname, text, time: "刚刚", likes: 0, replies: [] };
      if (replyTo) update({ ...post, comments: post.comments.map(c => c.id === replyTo ? { ...c, replies: [...c.replies, next] } : c) });
      else update({ ...post, comments: [...post.comments, next] });
      setText(""); setReplyTo(null);
    }
    setCommentSending(false);
  };

  return <div className="page-wrap detail-wrap"><button className="back-button" onClick={onBack}>← 回到心事广场</button>
    <article className="detail-card">
      {post.coverImage && <div className="detail-cover"><img src={post.coverImage} alt="" /></div>}
      <div className="post-top"><div className="author"><AvatarView user={{ avatar: post.avatar, avatarType: post.avatarType, id: post.authorId || post.id }} /><div><b>{post.author}</b><span>{post.time} · 匿名发布</span></div></div><span className="tag">{post.category}</span></div>
      <div className="detail-copy"><h1>{post.title}</h1><p>{post.content}</p></div>
      <div className="need-pill"><span>◌</span>{post.need}</div>
      <div className="detail-actions"><button onClick={() => react(post.id, "likes")}>♡ 点赞 <b>{post.likes}</b></button><button onClick={() => react(post.id, "hugs")}>抱 抱抱一下 <b>{post.hugs}</b></button><button onClick={() => react(post.id, "same")}>♧ 我也经历过 <b>{post.same}</b></button><button className={post.saved ? "saved" : ""} onClick={() => react(post.id, "saved")}>{post.saved ? "◆ 已收藏" : "◇ 收藏"}</button></div>
    </article>

    {post.visibility === "ai-only" ? (
      <div className="ai-chat-box">
        <style>{`.ai-chat-messages{max-height:400px;overflow-y:auto;padding:12px 16px;display:flex;flex-direction:column;gap:10px}.ai-msg{display:flex;align-items:flex-start;gap:8px;max-width:85%}.ai-msg-user{align-self:flex-end;flex-direction:row-reverse}.ai-msg-avatar{font-size:20px;flex-shrink:0}.ai-msg-text{padding:8px 14px;border-radius:14px;font-size:14px;line-height:1.6;word-break:break-word}.ai-msg-user .ai-msg-text{background:var(--sage-dark,#6f917d);color:#fff;border-bottom-right-radius:4px}.ai-msg-ai .ai-msg-text{background:var(--sage-soft,#e8f0ea);color:#333;border-bottom-left-radius:4px}.ai-typing{color:#999;font-style:italic}`}</style>
        <div className="ai-chat-head"><div className="ai-avatar">🤖</div><div><h2>AI 陪伴</h2><small>你的专属AI倾听者</small></div></div>
        <div className="ai-chat-messages">
          {aiMessages.map((m, i) => (<div key={i} className={`ai-msg ${m.role === "user" ? "ai-msg-user" : "ai-msg-ai"}`}>{m.role === "ai" && <span className="ai-msg-avatar">🤖</span>}<span className="ai-msg-text">{m.text}</span></div>))}
          {aiLoading && <div className="ai-msg ai-msg-ai"><span className="ai-msg-avatar">🤖</span><span className="ai-msg-text ai-typing">正在思考…</span></div>}
        </div>
        <div className="ai-input-row"><input value={aiInput} onChange={e => setAiInput(e.target.value)} placeholder="对AI说点什么…" onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendAiMessage(); } }} disabled={aiLoading} /><button onClick={sendAiMessage} disabled={!aiInput.trim() || aiLoading}>{aiLoading ? "…" : "发送"}</button></div>
      </div>
    ) : post.visibility === "private" ? (
      <div className="ai-chat-box"><div className="ai-coming"><span>🔒</span><p>这条心事仅你自己可见</p></div></div>
    ) : post.visibility === "room" ? (
      <div className="ai-chat-box"><div className="ai-coming"><span>◈</span><p>这条心事在房间内可见，请在房间中查看回应</p></div></div>
    ) : (
      <section className="comments-card"><div className="comments-head"><h2>温暖回应 <span>{post.comments.length}</span></h2><p>友善一点，你的每句话都很重要</p></div>
        <form className="comment-form" onSubmit={addComment}><AvatarView user={user} /><div>{replyTo && <div className="replying">正在回复评论 <button type="button" onClick={() => setReplyTo(null)}>取消</button></div>}<textarea value={text} onChange={e => setText(e.target.value)} placeholder="写下一句温柔的话…" /><div><span>匿名回复 · 请保持善意</span><button disabled={!text.trim() || commentSending}>{commentSending ? "发送中…" : "发送回应"}</button></div></div></form>
        <div className="comment-list">{post.comments.map(c => <CommentView key={c.id} comment={c} onReply={() => setReplyTo(c.id)} />)}{post.comments.length === 0 && <div className="empty compact"><span>🌱</span><h3>还没有回应</h3><p>成为第一个送上温暖的人吧。</p></div>}</div>
      </section>
    )}
  </div>;
}

function CommentView({ comment, onReply }: { comment: Comment; onReply: () => void }) {
  const [liked, setLiked] = useState(false);
  return <div className="comment"><AvatarView user={{ avatar: comment.avatar || "云", avatarType: comment.avatarType, id: comment.id }} size={35} /><div className="comment-main"><div><b>{comment.author}</b><span>{comment.time}</span></div><p>{comment.text}</p><div className="comment-buttons"><button onClick={() => setLiked(!liked)} className={liked ? "saved" : ""}>♡ {comment.likes + (liked ? 1 : 0)}</button><button onClick={onReply}>回复</button></div>{comment.replies.map(r => <div className="reply" key={r.id}><b>{r.author}</b><p>{r.text}</p><span>{r.time}</span></div>)}</div></div>;
}

function LoginModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: (user: AuthUser) => void }) {
  const [step, setStep] = useState<"phone" | "code">("phone");
  const [phone, setPhone] = useState(""); const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false); const [error, setError] = useState("");

  const sendCode = (e: FormEvent) => { e.preventDefault(); if (!/^1\d{10}$/.test(phone)) { setError("请输入正确的中国大陆手机号"); return; } setLoading(true); setError(""); setTimeout(() => { setLoading(false); setStep("code"); }, 500); };

  const verifyCode = async (e: FormEvent) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(code)) { setError("请输入 6 位验证码"); return; }
    setLoading(true); setError("");
    try {
      const nickname = getOrCreateNickname(); const avatar = getOrCreateAvatar();
      const result = await apiPost("/api/auth/login", { phone, nickname, avatar });
      const u = result.user || result;
      const newUser: AuthUser = { id: u.id, phone: `+86${phone}`, nickname: u.nickname || nickname, avatar: u.avatar || avatar, avatarType: u.avatarType || "char", createdAt: u.createdAt, provider: "phone" };
      onSuccess(newUser);
    } catch {
      setError("登录失败，请稍后重试");
    }
    setLoading(false);
  };

  return <div className="login-overlay" role="dialog" aria-modal="true" aria-label="登录 MoodTree" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}><section className="login-modal">
    <button className="login-close" onClick={onClose} aria-label="关闭">×</button><Logo /><div className="login-copy"><h2>欢迎回到树洞</h2><p>登录信息只用于保护你的内容，社区里仍会显示匿名昵称。</p></div>
    <div className="login-divider"><span>手机号登录</span></div>
    {step === "phone" ? <form className="phone-form" onSubmit={sendCode}><label>中国大陆 +86</label><div><span>+86</span><input inputMode="tel" maxLength={11} value={phone} onChange={e => setPhone(e.target.value.replace(/\D/g, ""))} placeholder="请输入手机号" autoFocus /></div><button disabled={loading}>{loading ? "请稍候…" : "下一步"}</button></form> : <form className="phone-form" onSubmit={verifyCode}><label>手机号 +86 {phone.slice(0,3)}****{phone.slice(-4)}</label><div className="code-input"><input inputMode="numeric" maxLength={6} value={code} onChange={e => setCode(e.target.value.replace(/\D/g, ""))} placeholder="输入任意6位数字" autoFocus /></div><button disabled={loading}>{loading ? "正在验证…" : "登录并进入树洞"}</button><button type="button" className="change-phone" onClick={() => { setStep("phone"); setCode(""); setError(""); }}>更换手机号</button><div style={{ background: "rgba(111,145,125,0.08)", borderRadius: "10px", padding: "10px 12px", marginTop: "10px", textAlign: "center" }}><p style={{ fontSize: "12px", color: "#6f917d", fontWeight: 500, margin: 0 }}>💡 本地登录模式，无需等待短信</p><p style={{ fontSize: "11px", color: "#8a938c", margin: "4px 0 0" }}>输入任意6位数字即可登录</p></div></form>}
    {error && <p className="login-error" role="alert">{error}</p>}<p className="login-terms">登录即代表你同意《用户协议》和《隐私政策》</p>
  </section></div>;
}

function Mine({ posts, openPost, user, onSignOut, onEditProfile, flash }: { posts: Post[]; openPost: (id: string) => void; user: AuthUser; onSignOut: () => void; onEditProfile: () => void; flash: (m: string) => void }) {
  const [section, setSection] = useState<"posts" | "saved" | "diaries" | "friends" | "settings">("posts");
  const [welcomeMsg, setWelcomeMsg] = useState(localStorage.getItem("moodtree-welcome-msg") || "");
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [friends, setFriends] = useState<Friend[]>([]);
  const [friendReqs, setFriendReqs] = useState<FriendReq[]>([]);
  const [searchId, setSearchId] = useState(""); const [searchResult, setSearchResult] = useState<Friend | null>(null);
  const [selectedDiary, setSelectedDiary] = useState<Diary | null>(null);
  const [showCreateDiary, setShowCreateDiary] = useState(false);
  const [diaryName, setDiaryName] = useState(""); const [diaryCover, setDiaryCover] = useState(""); const [diaryUploading, setDiaryUploading] = useState(false);

  const myPosts = posts.filter(p => p.mine);
  const savedPosts = posts.filter(p => p.saved);

  useEffect(() => {
    apiGet(`/api/diaries/${user.id}`).then(d => setDiaries(d.diaries || [])).catch(() => {});
    apiGet(`/api/friends/${user.id}`).then(d => setFriends(d.friends || [])).catch(() => {});
    apiGet(`/api/friends/requests/${user.id}`).then(d => setFriendReqs(d.requests || [])).catch(() => {});
  }, [user.id]);

  const saveWelcomeMsg = (val: string) => { setWelcomeMsg(val); if (val.trim()) localStorage.setItem("moodtree-welcome-msg", val.trim()); else localStorage.removeItem("moodtree-welcome-msg"); };

  const handleSearch = async () => {
    if (!searchId.trim()) return;
    try { const data = await apiGet(`/api/user/search?query=${encodeURIComponent(searchId.trim())}`); setSearchResult(data.user || null); }
    catch { flash("搜索失败"); }
  };

  const sendFriendReq = async (toId: string) => {
    try { await apiPost("/api/friends/request", { from: user.id, to: toId }); flash("好友请求已发送"); setSearchResult(null); setSearchId(""); }
    catch { flash("发送失败"); }
  };

  const acceptFriend = async (fromId: string) => {
    try { await apiPost("/api/friends/accept", { from: fromId, to: user.id }); setFriendReqs(r => r.filter(x => x.from !== fromId)); setFriends(f => [...f, friendReqs.find(x => x.from === fromId)!].filter(Boolean) as Friend[]); flash("已添加好友"); }
    catch { flash("操作失败"); }
  };

  const declineFriend = async (fromId: string) => {
    try { await apiPost("/api/friends/decline", { from: fromId, to: user.id }); setFriendReqs(r => r.filter(x => x.from !== fromId)); }
    catch { flash("操作失败"); }
  };

  const handleDiaryCoverUpload = async (file: File) => {
    setDiaryUploading(true);
    try { const url = await compressAndUploadImage(file); setDiaryCover(url); } catch { flash("封面上传失败"); }
    setDiaryUploading(false);
  };

  const createDiary = async () => {
    if (!diaryName.trim()) return;
    try { await apiPost("/api/diaries", { userId: user.id, name: diaryName.trim(), cover: diaryCover }); const d = await apiGet(`/api/diaries/${user.id}`); setDiaries(d.diaries || []); setShowCreateDiary(false); setDiaryName(""); setDiaryCover(""); flash("日记本已创建"); }
    catch { flash("创建失败"); }
  };

  const copyId = () => { copyToClipboard(user.id); flash("ID已复制"); };

  const tabs = [['posts','我的帖子','✎'],['saved','我的收藏','◇'],['diaries','日记本','📖'],['friends','好友','♡'],['settings','设置','⚙']] as const;

  return <div className="page-wrap mine-wrap">
    <section className="profile-card">
      <AvatarView user={user} size={66} />
      <div><span>MY MOODTREE</span><h1>{user.nickname}</h1>
        <div className="id-row"><span className="id-badge" onClick={copyId}>{user.id} 📋</span><span className="id-hint">点击复制ID</span></div>
      </div>
      <div className="profile-actions"><button onClick={onEditProfile}>编辑资料</button><button onClick={onSignOut}>退出</button></div>
    </section>

    <div className="mine-layout"><aside>{tabs.map(([id, label, icon]) => <button key={id} className={section === id ? "active" : ""} onClick={() => { setSection(id); setSelectedDiary(null); }}><span>{icon}</span>{label}</button>)}</aside>
      <section className="mine-content">
        {section === "diaries" && selectedDiary ? (
          <>
            <div className="mine-title"><button className="back-button" onClick={() => setSelectedDiary(null)}>← 返回</button></div>
            <div className="diary-header">{selectedDiary.cover && <img src={selectedDiary.cover} alt="" className="diary-header-cover" />}<div><h2>{selectedDiary.name}</h2><p>{selectedDiary.posts?.length || 0} 篇心事</p></div></div>
            <div className="mine-list">{(selectedDiary.posts || []).map(p => <button key={p.id} onClick={() => openPost(p.id)}><span className="tag">{p.category}</span><div><h3>{p.title}</h3><p>{p.content}</p><small>{p.time}</small></div><b>›</b></button>)}</div>
            {(selectedDiary.posts || []).length === 0 && <div className="empty"><span>📖</span><h3>日记本还是空的</h3><p>发帖时选择添加到这个日记本吧</p></div>}
          </>
        ) : (
          <>
            <div className="mine-title"><div><h2>{section === 'posts' ? '我的帖子' : section === 'saved' ? '我的收藏' : section === 'diaries' ? '日记本' : section === 'friends' ? '好友' : '设置'}</h2><p>{section === 'posts' ? '记录那些被树洞接住的心事' : section === 'saved' ? '留住让你感到共鸣的片刻' : section === 'diaries' ? '把心事整理成册' : section === 'friends' ? '通过ID找到同频的人' : '照顾好你的使用感受'}</p></div><span>{section === 'posts' ? myPosts.length : section === 'saved' ? savedPosts.length : section === 'diaries' ? diaries.length : section === 'friends' ? friends.length : ''}</span></div>

            {(section === "posts" || section === "saved") && ((section === "posts" ? myPosts : savedPosts).length ? <div className="mine-list">{(section === "posts" ? myPosts : savedPosts).map(p => <button key={p.id} onClick={() => openPost(p.id)}><span className="tag">{p.category}</span><div><h3>{p.title}</h3><p>{p.content}</p><small>{p.time} · ♡ {p.likes} · 抱 {p.hugs}</small></div><b>›</b></button>)}</div> : <div className="empty"><span>🌿</span><h3>{section === "saved" ? "还没有收藏" : "还没有写下心事"}</h3><p>你想留住的温暖，会出现在这里。</p></div>)}

            {section === "diaries" && <>
              <button className="create-diary-btn" onClick={() => setShowCreateDiary(!showCreateDiary)}>＋ 创建新日记本</button>
              {showCreateDiary && <div className="create-diary-form">
                <input value={diaryName} onChange={e => setDiaryName(e.target.value)} placeholder="日记本名称" maxLength={20} />
                {diaryCover ? <div className="cover-preview small"><img src={diaryCover} alt="" /><button onClick={() => setDiaryCover("")}>移除</button></div> : <label className="cover-upload-btn">{diaryUploading ? "上传中…" : "＋ 封面图（可选）"}<input type="file" accept="image/*" style={{ display: "none" }} onChange={e => { const f = e.target.files?.[0]; if (f) handleDiaryCoverUpload(f); }} /></label>}
                <button className="primary" onClick={createDiary} disabled={!diaryName.trim()}>创建</button>
              </div>}
              <div className="diary-grid">
                {diaries.map(d => <div key={d.id} className="diary-card" onClick={() => { setSelectedDiary(d); }}>
                  {d.cover ? <div className="diary-cover" style={{ backgroundImage: `url(${d.cover})` }} /> : <div className="diary-cover diary-cover-placeholder">📖</div>}
                  <div className="diary-info"><h3>{d.name}</h3><span>{d.posts?.length || 0} 篇</span></div>
                </div>)}
              </div>
              {diaries.length === 0 && <div className="empty"><span>📖</span><h3>还没有日记本</h3><p>把心事整理成册，随时翻看</p></div>}
            </>}

            {section === "friends" && <>
              <div className="friend-search-bar">
                <input value={searchId} onChange={e => setSearchId(e.target.value)} placeholder="输入MT ID搜索用户" onKeyDown={e => { if (e.key === "Enter") handleSearch(); }} />
                <button onClick={handleSearch}>搜索</button>
              </div>
              {searchResult && <div className="friend-search-result"><AvatarView user={searchResult} size={42} /><div><b>{searchResult.nickname}</b><small>{searchResult.id}</small></div><button onClick={() => sendFriendReq(searchResult.id)}>加好友</button></div>}
              {friendReqs.length > 0 && <div className="friend-section"><h3>好友请求</h3>{friendReqs.map(r => <div key={r.from} className="friend-item"><AvatarView user={r} size={42} /><div><b>{r.nickname}</b><small>{r.from}</small></div><div className="friend-actions"><button className="accept" onClick={() => acceptFriend(r.from)}>接受</button><button className="decline" onClick={() => declineFriend(r.from)}>拒绝</button></div></div>)}</div>}
              <div className="friend-section"><h3>我的好友 ({friends.length})</h3>
                {friends.length ? friends.map(f => <div key={f.id} className="friend-item"><AvatarView user={f} size={42} /><div><b>{f.nickname}</b><small>{f.id}</small></div></div>) : <div className="empty compact"><span>🌱</span><h3>还没有好友</h3><p>通过ID搜索添加同频的人吧</p></div>}
              </div>
            </>}

            {section === "settings" && <div className="settings-list">
              <label><span><b>我的ID</b><small>分享给朋友，让他们找到你</small></span><div className="id-display" onClick={copyId}>{user.id} <span>📋</span></div></label>
              <label><span><b>自定义欢迎语</b><small>首页显示的专属问候（留空使用默认）</small></span><input type="text" value={welcomeMsg} onChange={e => saveWelcomeMsg(e.target.value)} placeholder="如：又见面了，最近怎么样" maxLength={30} /></label>
              <label><span><b>温柔提醒</b><small>收到回应时告诉我</small></span><input type="checkbox" defaultChecked /></label>
              <label><span><b>深夜模式</b><small>晚上自动降低页面亮度</small></span><input type="checkbox" /></label>
              <div className="safety-note"><b>如果你正在经历难以承受的时刻</b><p>请优先联系信任的人或专业心理援助。你不需要独自面对。</p></div>
            </div>}
          </>
        )}
      </section>
    </div>

    {showCreateDiary && section === "diaries" && null}
  </div>;
}

function Rooms({ user, rooms, roomView, roomDetail, loadingRooms, onOpenRoom, onBackToList, onCreateRoom, onJoinRoom, onWriteInRoom, onCopyCode, openPost, flash }: {
  user: AuthUser; rooms: Room[]; roomView: "list" | "detail"; roomDetail: { room: Room; members: any[]; posts: Post[] } | null;
  loadingRooms: boolean; onOpenRoom: (id: string) => void; onBackToList: () => void; onCreateRoom: () => void; onJoinRoom: () => void;
  onWriteInRoom: (roomId: string) => void; onCopyCode: (code: string) => void; openPost: (id: string) => void; flash: (m: string) => void;
}) {
  if (roomView === "detail" && roomDetail) {
    const { room, members, posts } = roomDetail;
    return <div className="page-wrap">
      <button className="back-button" onClick={onBackToList}>← 返回房间列表</button>
      <div className="room-detail-header">
        {room.cover && <div className="room-detail-cover" style={{ backgroundImage: `url(${room.cover})` }} />}
        <div className="room-detail-info">
          <h1>{room.name}</h1>
          <div className="room-invite-code" onClick={() => onCopyCode(room.inviteCode)}>邀请码: <b>{room.inviteCode}</b> 📋</div>
          <span>{members.length} 位成员</span>
        </div>
      </div>
      <div className="room-members"><h3>成员</h3><div className="member-list">{members.map((m: any) => <div key={m.id} className="member-item"><AvatarView user={m} size={36} /><span>{m.nickname}</span></div>)}</div></div>
      <div className="room-posts"><div className="room-posts-head"><h3>房间心事</h3><button className="primary small" onClick={() => onWriteInRoom(room.id)}>在房间内发帖</button></div>
        <div className="post-grid">{posts.map(p => <PostCard key={p.id} post={p} open={() => openPost(p.id)} react={() => {}} />)}</div>
        {posts.length === 0 && <div className="empty"><span>🍃</span><h3>房间还没有帖子</h3><p>成为第一个在房间里分享心事的人</p></div>}
      </div>
    </div>;
  }

  return <div className="page-wrap">
    <div className="page-intro"><span>PRIVATE SPACE</span><h1>我的房间</h1><p>创建私密空间，邀请同频的人进来聊</p></div>
    <div className="room-actions"><button className="primary" onClick={onCreateRoom}>＋ 创建房间</button><button className="primary outline" onClick={onJoinRoom}>输入邀请码加入</button></div>
    {loadingRooms ? <div className="empty"><span>🍃</span><h3>正在加载…</h3></div> : <>
      <div className="room-grid">
        {rooms.map(r => <div key={r.id} className="room-card" onClick={() => onOpenRoom(r.id)}>
          {r.cover ? <div className="room-card-cover" style={{ backgroundImage: `url(${r.cover})` }} /> : <div className="room-card-cover room-cover-placeholder">◈</div>}
          <div className="room-card-info"><h3>{r.name}</h3><span>{r.members?.length || 0} 位成员 · 邀请码 {r.inviteCode}</span></div>
        </div>)}
      </div>
      {rooms.length === 0 && <div className="empty"><span>◈</span><h3>还没有加入任何房间</h3><p>创建一个房间，或用邀请码加入朋友的房间</p></div>}
    </>}
  </div>;
}

function ProfileEditModal({ onClose, user, flash, onSuccess }: { onClose: () => void; user: AuthUser; flash: (m: string) => void; onSuccess: (u: AuthUser) => void }) {
  const [nickname, setNickname] = useState(user.nickname);
  const [avatar, setAvatar] = useState(user.avatar);
  const [avatarType, setAvatarType] = useState(user.avatarType);
  const [uploading, setUploading] = useState(false); const [loading, setLoading] = useState(false);

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    try { const url = await compressAndUploadImage(file); setAvatar(url); setAvatarType("image"); } catch { flash("头像上传失败"); }
    setUploading(false);
  };

  const useCharAvatar = () => { const char = nickname[0] || "？"; setAvatar(char); setAvatarType("char"); };

  const handleSave = async () => {
    if (!nickname.trim()) return;
    setLoading(true);
    try { await apiPost("/api/user/profile", { userId: user.id, nickname: nickname.trim(), avatar, avatarType }); onSuccess({ ...user, nickname: nickname.trim(), avatar, avatarType }); }
    catch { flash("更新失败，请重试"); }
    setLoading(false);
  };

  return <div className="modal-overlay" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="modal-card">
      <button className="login-close" onClick={onClose}>×</button>
      <h2>编辑资料</h2>
      <div className="profile-edit-avatar">
        <div className="avatar-preview">{avatarType === "image" && avatar ? <span className="profile-avatar profile-avatar-img" style={{ backgroundImage: `url(${avatar})`, backgroundSize: "cover", backgroundPosition: "center" }} /> : <span className="profile-avatar">{avatar}</span>}</div>
        <div className="avatar-actions">
          <label className="avatar-upload-btn">{uploading ? "上传中…" : "上传图片"}<input type="file" accept="image/*" style={{ display: "none" }} onChange={e => { const f = e.target.files?.[0]; if (f) handleImageUpload(f); }} /></label>
          <button onClick={useCharAvatar}>文字头像</button>
        </div>
      </div>
      <label className="edit-nickname">昵称<input value={nickname} onChange={e => setNickname(e.target.value)} maxLength={20} placeholder="输入昵称" /></label>
      <button className="primary" onClick={handleSave} disabled={!nickname.trim() || loading}>{loading ? "保存中…" : "保存"}</button>
    </div>
  </div>;
}

function CreateRoomModal({ onClose, userId, flash, onSuccess }: { onClose: () => void; userId: string; flash: (m: string) => void; onSuccess: (room: Room) => void }) {
  const [name, setName] = useState(""); const [cover, setCover] = useState("");
  const [uploading, setUploading] = useState(false); const [loading, setLoading] = useState(false);

  const handleCoverUpload = async (file: File) => {
    setUploading(true);
    try { const url = await compressAndUploadImage(file); setCover(url); } catch { flash("封面图上传失败"); }
    setUploading(false);
  };

  const handleCreate = async () => {
    if (!name.trim()) return;
    setLoading(true);
    try { const result = await apiPost("/api/rooms", { name: name.trim(), owner: userId, cover }); if (result.success !== false) { onSuccess(result.room || result); } else { flash(result.message || "创建失败"); } }
    catch { flash("创建失败，请重试"); }
    setLoading(false);
  };

  return <div className="modal-overlay" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="modal-card">
      <button className="login-close" onClick={onClose}>×</button>
      <h2>创建房间</h2>
      <label>房间名称<input value={name} onChange={e => setName(e.target.value)} placeholder="给房间起个名字" maxLength={20} /></label>
      {cover ? <div className="cover-preview"><img src={cover} alt="" /><button onClick={() => setCover("")}>移除封面</button></div> : <label className="cover-upload-btn">{uploading ? "上传中…" : "＋ 上传封面图（可选）"}<input type="file" accept="image/*" style={{ display: "none" }} onChange={e => { const f = e.target.files?.[0]; if (f) handleCoverUpload(f); }} /></label>}
      <button className="primary" onClick={handleCreate} disabled={!name.trim() || loading}>{loading ? "创建中…" : "创建房间"}</button>
    </div>
  </div>;
}

function JoinRoomModal({ onClose, userId, flash, onSuccess }: { onClose: () => void; userId: string; flash: (m: string) => void; onSuccess: () => void }) {
  const [code, setCode] = useState(""); const [loading, setLoading] = useState(false);

  const handleJoin = async () => {
    if (!/^\d{4}$/.test(code)) { flash("请输入4位邀请码"); return; }
    setLoading(true);
    try { const result = await apiPost("/api/rooms/join", { code, userId }); if (result.success !== false) { onSuccess(); } else { flash(result.message || "加入失败"); } }
    catch { flash("加入失败，请重试"); }
    setLoading(false);
  };

  return <div className="modal-overlay" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="modal-card">
      <button className="login-close" onClick={onClose}>×</button>
      <h2>加入房间</h2>
      <label>邀请码<input value={code} onChange={e => setCode(e.target.value.replace(/\D/g, ""))} placeholder="输入4位邀请码" maxLength={4} className="code-input-field" /></label>
      <button className="primary" onClick={handleJoin} disabled={!code || loading}>{loading ? "加入中…" : "加入房间"}</button>
    </div>
  </div>;
}
