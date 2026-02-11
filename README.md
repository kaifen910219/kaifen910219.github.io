# Alice Tung - Concert Pianist Portfolio

An elegant and artistic personal portfolio website for concert pianist Alice Tung, featuring her biography, education, achievements, and extensive repertoire.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Elegant Aesthetics**: Artistic design with soft purple color palette inspired by classical music aesthetics
- **Custom Background**: Beautiful background image from your performances in the hero section
- **Professional Photo**: High-quality profile photo in the About section
- **Dynamic Photo Gallery**: Automatically loads all numbered images (1.jpg, 2.png, etc.) from the images folder - just add photos and they appear instantly!
- **Interactive Lightbox**: Click any photo to view in fullscreen with keyboard navigation (← → arrows, ESC to close)
- **News & Events Section**: Showcase awards and upcoming concerts with beautiful card layout
- **Smooth Animations**: Subtle scroll animations and transitions for enhanced user experience
- **Interactive Navigation**: Sticky navigation bar with smooth scrolling to sections
- **Timeline Layout**: Visual timeline of achievements and performances
- **Master Class Gallery**: Grid display of master classes with renowned pianists
- **Contact Information**: Easy access to contact details and social media

## 🎨 Design Elements

- **Color Palette**: Soft purples, lavenders, and neutral tones
- **Typography**: Playfair Display for headings, Lato for body text
- **Layout**: Clean, spacious design with generous whitespace
- **Animations**: Fade-in effects, parallax scrolling, and hover transitions

## 📁 File Structure

```
alice_web/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript for interactions
└── README.md           # This file
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., `alice-tung-portfolio` or `username.github.io` for a user site)
4. Choose "Public" visibility
5. Do NOT initialize with README, .gitignore, or license (we already have files)
6. Click "Create repository"

### Step 2: Initialize Git and Push to GitHub

Open your terminal/command prompt and navigate to the project folder:

```bash
# Navigate to your project directory
cd /Users/chenwei/Desktop/alice_web

# Initialize Git repository
git init

# Add all files to staging
git add .

# Create first commit
git commit -m "Initial commit: Alice Tung portfolio website"

# Add your GitHub repository as remote origin
# Replace YOUR_USERNAME and YOUR_REPO with your actual GitHub username and repository name
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Under "Branch", select "main" and folder "/ (root)"
6. Click "Save"
7. Wait a few minutes for deployment
8. Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Alternative: Using GitHub Desktop

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click "File" → "Add Local Repository"
4. Navigate to `/Users/chenwei/Desktop/alice_web`
5. Click "Publish repository" to push to GitHub
6. Follow Step 3 above to enable GitHub Pages

## 🎯 Customization Guide

⭐ **See [USAGE_GUIDE.md](USAGE_GUIDE.md) for detailed instructions in Chinese/English**

### Adding New Gallery Photos (Automatic!)

Simply add photos to the `images/` folder with number names:
- `14.jpg`, `15.png`, `16.jpeg` etc.
- Supported formats: `.jpg`, `.jpeg`, `.png`
- Photos automatically appear in the gallery - no code changes needed!

### Adding News & Events

1. Open `index.html`
2. Find the News Section (around line 221)
3. Copy and modify a news card template:

```html
<div class="news-card">
    <div class="news-date">Month Year</div>
    <div class="news-badge award">Award</div> <!-- or "concert" -->
    <h3>Your Title</h3>
    <p>Description of the award or event.</p>
    <a href="#" class="news-link">Learn More →</a> <!-- optional -->
</div>
```

### Changing Photos

To update your profile photo or background:
1. Replace `images/profile.jpeg` with your new profile photo
2. Replace `images/background.jpeg` with your new hero background

### Changing Colors

Edit the CSS variables in `styles.css` (lines 11-19):

```css
:root {
    --primary-purple: #d4c5e2;      /* Main accent color */
    --secondary-purple: #b8a8c9;    /* Secondary accent */
    --accent-purple: #9b87ab;       /* Highlights */
    --dark-purple: #6b5b7a;         /* Dark text */
    /* ... */
}
```

### Adding Performance Videos

Add a new section before the Contact section in `index.html`:

```html
<section id="videos" class="section videos-section">
    <div class="container">
        <h2 class="section-title">Performances</h2>
        <div class="videos-grid">
            <div class="video-item">
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                    frameborder="0" allowfullscreen>
                </iframe>
            </div>
        </div>
    </div>
</section>
```

### Adding a News/Blog Section

Create a new section for upcoming performances or news:

```html
<section id="news" class="section news-section">
    <div class="container">
        <h2 class="section-title">Upcoming Performances</h2>
        <div class="news-grid">
            <div class="news-item">
                <div class="news-date">March 15, 2025</div>
                <h3>Solo Recital at Carnegie Hall</h3>
                <p>Program featuring works by Chopin and Liszt</p>
                <a href="#" class="news-link">Learn More →</a>
            </div>
        </div>
    </div>
</section>
```

## 🛠️ Technical Details

### Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance Optimizations

- Lazy loading for images
- Debounced scroll events
- CSS animations using GPU acceleration
- Minimal JavaScript dependencies (vanilla JS only)

### Accessibility Features

- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast text for readability
- Responsive font sizes

## 📱 Mobile Optimization

The site is fully responsive with breakpoints at:
- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px

## 🔧 Future Enhancements

Potential additions for future updates:

- [ ] Photo gallery section
- [ ] Video performance showcase
- [ ] Blog/news section for updates
- [ ] Online booking system for lessons
- [ ] Multi-language support (English/Chinese)
- [ ] Audio player for repertoire samples
- [ ] Press kit download section
- [ ] Concert calendar integration

## 📄 License

This website is created for Alice Tung. All content and design © 2025 Alice Tung.

## 🤝 Support

For technical issues or questions about the website:
- Email: tung09117020@gmail.com
- Facebook: [Alice Tung](https://www.facebook.com/kaifen.tung/)

## 🎵 About Alice Tung

Alice Tung is a concert pianist currently pursuing a Master's Degree in Piano Performance at CUNY Brooklyn College. Born in Yilan, Taiwan, she brings nearly 6 years of teaching and accompaniment experience to her artistic journey. Recent winner of the Euro Arts Festival Concerto Competition, Alice continues to dedicate herself to advancing the art of piano performance.

---

**Built with ❤️ and 🎹**

*Last updated: February 2025*
