# 使用指南 / Usage Guide

## 📸 如何添加新的照片到 Gallery

### 自動載入機制

Gallery 現在會**自動載入**所有符合以下格式的圖片：
- 檔案名稱：`數字.副檔名`
- 支援的副檔名：`.jpg`, `.jpeg`, `.png`
- 範例：`1.jpg`, `14.jpeg`, `25.png`

### 添加新照片的步驟

1. **命名您的照片**
   ```
   images/14.jpg
   images/15.png
   images/16.jpeg
   ```

2. **將照片放入 `images/` 資料夾**
   ```bash
   # 複製照片到 images 資料夾
   cp your-photo.jpg /Users/chenwei/Desktop/alice_web/images/14.jpg
   ```

3. **刷新網頁**
   - 照片會自動出現在 Gallery 中！
   - 不需要修改任何程式碼

### 重要提醒

✅ **正確的命名格式**：
- `1.jpg` ✓
- `2.jpeg` ✓
- `15.png` ✓
- `20.jpg` ✓

❌ **錯誤的命名格式**：
- `photo1.jpg` ✗ (包含文字)
- `IMG_001.jpg` ✗ (包含文字)
- `1-concert.jpg` ✗ (包含連字符)
- `profile.jpg` ✗ (不是純數字)

### 照片順序

照片會按照數字順序顯示：
- 1.jpg → 2.jpg → 3.jpg → ... → 13.jpg → 14.jpg

---

## 📰 如何添加新聞和演奏會資訊

### 添加新聞的步驟

1. **打開 `index.html` 文件**

2. **找到 News Section**（約在第 221 行附近）
   ```html
   <!-- News Section -->
   <section id="news" class="section news-section">
   ```

3. **複製以下模板並修改內容**：

   **得獎消息模板**：
   ```html
   <div class="news-card">
       <div class="news-date">Month Year</div>
       <div class="news-badge award">Award</div>
       <h3>獎項名稱</h3>
       <p>得獎的詳細資訊和描述。</p>
   </div>
   ```

   **演奏會模板**：
   ```html
   <div class="news-card">
       <div class="news-date">March 2026</div>
       <div class="news-badge concert">Concert</div>
       <h3>Piano Recital at Carnegie Hall</h3>
       <p>Join me for an evening of Chopin and Liszt at Carnegie Hall, New York City.</p>
       <a href="https://tickets-link.com" class="news-link">Get Tickets →</a>
   </div>
   ```

### 新聞卡片的組成

#### 日期
```html
<div class="news-date">October 2025</div>
```

#### 標籤
- 得獎：`<div class="news-badge award">Award</div>`
- 演奏會：`<div class="news-badge concert">Concert</div>`

#### 標題
```html
<h3>您的標題</h3>
```

#### 內容
```html
<p>詳細描述...</p>
```

#### 連結（選用）
```html
<a href="網址" class="news-link">Learn More →</a>
```

### 完整範例

```html
<div class="news-card">
    <div class="news-date">February 2026</div>
    <div class="news-badge concert">Concert</div>
    <h3>Solo Recital - Taipei National Concert Hall</h3>
    <p>An evening featuring works by Beethoven, Chopin, and Debussy. This special performance celebrates my return to Taiwan.</p>
    <a href="#" class="news-link">Learn More →</a>
</div>
```

---

## 🎨 自訂顏色和樣式

### 更改主色調

編輯 `styles.css` 文件的第 11-19 行：

```css
:root {
    --primary-purple: #d4c5e2;      /* 主要淺紫色 */
    --secondary-purple: #b8a8c9;    /* 次要紫色 */
    --accent-purple: #9b87ab;       /* 強調紫色 */
    --dark-purple: #6b5b7a;         /* 深紫色 */
    /* ... */
}
```

### 更改字體

在 `index.html` 的 `<head>` 部分更改 Google Fonts 連結。

---

## 🚀 更新網站到 GitHub

每次修改後，使用以下指令更新網站：

```bash
cd /Users/chenwei/Desktop/alice_web

# 查看更改
git status

# 添加所有更改
git add .

# 提交更改
git commit -m "Add new photos and news"

# 推送到 GitHub
git push
```

等待 1-2 分鐘，您的網站就會更新！

---

## 📋 檢查清單

### 添加新照片
- [ ] 照片命名為數字格式（1.jpg, 2.png等）
- [ ] 照片已放入 `images/` 資料夾
- [ ] 刷新網頁確認照片顯示

### 添加新聞
- [ ] 複製新聞卡片模板
- [ ] 填入日期、標籤、標題、內容
- [ ] 選擇正確的標籤（award 或 concert）
- [ ] 預覽網頁確認顯示正確

### 部署更新
- [ ] `git add .`
- [ ] `git commit -m "描述更改"`
- [ ] `git push`
- [ ] 等待 1-2 分鐘
- [ ] 訪問網站確認更新成功

---

## 🆘 常見問題

### Q: 我添加了照片但沒有顯示？
A: 請檢查：
1. 檔案名稱是否為純數字（如 `14.jpg`）
2. 照片是否在 `images/` 資料夾中
3. 副檔名是否為 `.jpg`, `.jpeg`, 或 `.png`
4. 嘗試清除瀏覽器快取（Ctrl+F5 或 Cmd+Shift+R）

### Q: 如何更改照片順序？
A: 照片按照數字順序顯示。要更改順序，請重新命名檔案：
- `1.jpg` 會最先顯示
- `2.jpg` 會第二個顯示
- 以此類推

### Q: 我可以使用其他圖片格式嗎（如 .gif）？
A: 目前僅支援 `.jpg`, `.jpeg`, `.png`。如需添加其他格式，請聯絡開發者。

### Q: 新聞如何排序？
A: 新聞按照在 HTML 中的順序顯示。建議將最新的新聞放在最前面。

### Q: 如何刪除舊照片？
A: 直接從 `images/` 資料夾刪除對應的圖片檔案即可。

---

## 📞 需要協助？

如有任何問題，請聯絡：
- Email: tung09117020@gmail.com

---

**最後更新**：2025年2月
