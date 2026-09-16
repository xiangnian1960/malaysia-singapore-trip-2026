# 2026 马来西亚 · 槟城 · 新加坡亲子旅行网页

这是一个完全静态的网站，不需要 npm、不需要数据库、不需要 API Key。

## 文件
- `index.html`：页面结构
- `styles.css`：视觉样式、响应式、日/夜模式
- `itinerary-data.js`：**行程数据（以后改行程主要编辑这个文件）**
- `app.js`：倒计时、今日行程、Google Maps、Checklist、主题切换逻辑

## 这版已经包含
- 顶部“下一项行程”实时倒计时
- 9/21：**13:00 集合准备 / 13:40 ETS 实际发车** 分离显示
- 手绘感路线总览 SVG
- 每日时间轴
- 地点直达 Google Maps
- 9/26 爸妈 / 我的双路线标识
- 9/27 → 9/28 跨日航班
- 待办清单（localStorage）
- 马来西亚 / 新加坡当地时间的自动日夜配色 + 手动切换
- 手机、平板、电脑响应式
- 不公开展示费用

## 本机预览
最简单：双击 `index.html` 即可打开。

## GitHub + Cloudflare Pages（无构建）
1. 在 GitHub 创建一个新仓库。
2. 把本文件夹内的 5 个文件上传到仓库根目录。
3. Cloudflare → Workers & Pages → Create → Pages → Connect to Git。
4. 选择该 GitHub 仓库。
5. Framework preset 选择 `None`。
6. Build command 留空；Build output directory 设为 `/`（根目录）。
7. Deploy。
8. Cloudflare 会生成固定的 `*.pages.dev` 地址。
9. 以后只要更新 GitHub 同一个仓库，Cloudflare 会自动重新部署，链接不变。

## 后续怎么改行程
打开 `itinerary-data.js`，找到对应日期和条目：
- 改显示时间：`time`
- 改倒计时开始：`startISO`
- 改标题：`title`
- 改交通：`transport`
- 改备注：`note`
- 改导航地点：`mapQuery`

注意：`startISO` / `endISO` 包含时区偏移，马来西亚 / 新加坡 / 中国通常是 `+08:00`，日本是 `+09:00`。
