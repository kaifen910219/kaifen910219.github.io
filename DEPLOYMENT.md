# Quick Deployment Guide to GitHub Pages

## 🚀 Fast Track Deployment (5 Minutes)

### Prerequisites
- A GitHub account ([Sign up here](https://github.com/join))
- Git installed on your computer ([Download here](https://git-scm.com/downloads))

### Step-by-Step Instructions

#### 1. Create GitHub Repository

1. Visit [github.com/new](https://github.com/new)
2. Repository name: `alice-tung-portfolio` (or any name you prefer)
3. Description: "Personal portfolio website for concert pianist Alice Tung"
4. Select **Public**
5. **DO NOT** check any boxes (no README, no .gitignore, no license)
6. Click **Create repository**

#### 2. Deploy Your Website

**Option A: Using Terminal (Recommended)**

Open Terminal and run these commands:

```bash
# Navigate to your project folder
cd /Users/chenwei/Desktop/alice_web

# Initialize Git
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial commit: Alice Tung portfolio"

# Connect to GitHub (replace YOUR_USERNAME and YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Desktop (Easier for Beginners)**

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Install and sign in with your GitHub account
3. Click **File** → **Add Local Repository**
4. Choose `/Users/chenwei/Desktop/alice_web`
5. Click **Publish repository**
6. Uncheck "Keep this code private"
7. Click **Publish repository**

#### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Branch: Select **main**
   - Folder: Select **/ (root)**
5. Click **Save**
6. Wait 2-3 minutes

#### 4. Access Your Website

Your website will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

For example, if your username is `alicetung` and repository is `portfolio`:
```
https://alicetung.github.io/portfolio/
```

---

## 📝 Common Issues & Solutions

### Issue 1: "git command not found"
**Solution**: Install Git from [git-scm.com](https://git-scm.com/downloads)

### Issue 2: Authentication failed
**Solution**: Use a Personal Access Token instead of password
1. Go to GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Select "repo" scope
4. Use token as password when prompted

### Issue 3: Website shows 404
**Solution**:
- Wait 5-10 minutes after enabling GitHub Pages
- Check that your repository is public
- Ensure `index.html` is in the root directory
- Check Settings → Pages to see if there are any errors

### Issue 4: Images or styles not loading
**Solution**: Use relative paths in your HTML
- ✅ Correct: `<link rel="stylesheet" href="styles.css">`
- ❌ Wrong: `<link rel="stylesheet" href="/Users/chenwei/Desktop/alice_web/styles.css">`

---

## 🎨 Customization After Deployment

### To Update Your Website

After making any changes to your files:

```bash
cd /Users/chenwei/Desktop/alice_web
git add .
git commit -m "Update: describe your changes"
git push
```

Changes will appear on your live site within 1-2 minutes.

### To Add Your Photo

1. Add your photo file (e.g., `profile.jpg`) to the project folder
2. In `index.html`, find line ~77 (the image placeholder)
3. Replace the `<div class="image-placeholder">...</div>` with:
```html
<img src="profile.jpg" alt="Alice Tung" style="width: 100%; border-radius: 20px; box-shadow: 0 20px 60px rgba(155, 135, 171, 0.3);">
```
4. Commit and push the changes

---

## 🌐 Using a Custom Domain (Optional)

If you want to use your own domain (e.g., `alicetung.com`):

1. Purchase a domain from a registrar (Namecheap, GoDaddy, etc.)
2. Create a file named `CNAME` in your project root (no extension)
3. Add your domain to the file:
   ```
   alicetung.com
   ```
4. Commit and push
5. In your domain registrar's DNS settings, add:
   - Type: **A Record**
   - Host: **@**
   - Value:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Type: **CNAME**
   - Host: **www**
   - Value: **YOUR_USERNAME.github.io**

6. Wait 24-48 hours for DNS propagation

---

## 📊 Tracking Website Visitors (Optional)

### Add Google Analytics

1. Create a Google Analytics account
2. Get your tracking ID (e.g., G-XXXXXXXXXX)
3. Add this code before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔄 Backup Strategy

### Regular Backups

Your code is already backed up on GitHub, but also:

1. **Local Backup**: Keep a copy on external drive
2. **Cloud Backup**: Use Dropbox/Google Drive
3. **Version Control**: Use git tags for major versions:
   ```bash
   git tag -a v1.0 -m "Initial release"
   git push origin v1.0
   ```

---

## 📱 Testing Your Website

### Before Deployment
- Test on different browsers (Chrome, Firefox, Safari)
- Test on mobile devices (phone, tablet)
- Check all links work
- Verify all sections scroll correctly
- Test contact information

### After Deployment
- Visit your live site on multiple devices
- Share with friends for feedback
- Test social media preview (paste link in Facebook, Twitter)
- Check loading speed: [PageSpeed Insights](https://pagespeed.web.dev/)

---

## 🆘 Need Help?

### Resources
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [HTML/CSS Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)

### Contact
- Email: tung09117020@gmail.com
- Create an issue on your GitHub repository

---

## ✅ Deployment Checklist

- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] Git initialized in local folder
- [ ] All files committed
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled in Settings
- [ ] Website accessible at GitHub Pages URL
- [ ] Added your profile photo
- [ ] Tested on mobile and desktop
- [ ] Shared website link with friends
- [ ] Bookmarked GitHub repository for future updates

---

**Congratulations! Your portfolio website is now live! 🎉🎹**

*If you encounter any issues, refer to the troubleshooting section or contact for help.*
