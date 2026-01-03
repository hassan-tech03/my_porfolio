# Hassan Shahid - Developer Portfolio

A modern, responsive portfolio website showcasing 5 years of UI development experience with ReactJS, NextJS, Ruby on Rails, and Scrum Master expertise.

## 🎨 Features

- ✨ Modern, human-centered design
- 🎭 Beautiful animations with Framer Motion
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessible design
- 🎯 Smooth scroll navigation
- 💼 Skills showcase with soft skills
- 📖 About section with career timeline
- 📧 Contact form with validation
- 🔗 Social links (LinkedIn, Upwork, GitHub)
- 🎨 SCSS modules for styling

## 🚀 Quick Start

### Prerequisites

- Node.js v22.15.0 or higher

### Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **http://localhost:5173** to see your portfolio!

## 📝 Customization Guide

### 1. Update Your Information

**Hero Section** (`src/components/Hero/Hero.jsx`):
- ✅ Name already updated to "Hassan Shahid"
- Update the description if needed

**About Section** (`src/components/About/About.jsx`):
- ✅ Name and bio already set
- Update timeline events with your actual experience
- Update stats (years, projects, clients)

**Contact Section** (`src/components/Contact/Contact.jsx`):
- Update email: `hassan.shahid@example.com` → your email
- Update phone: `+1 (234) 567-890` → your phone
- Update social links:
  - LinkedIn: `https://www.linkedin.com/in/hassan-shahid`
  - Upwork: `https://www.upwork.com/freelancers/hassanshahid`
  - GitHub: `https://github.com/hassanshahid`

### 2. Add Your Profile Photo

Replace `public/profile.jpg` with your professional photo:
- Recommended size: 400x400px (square)
- Format: JPG or PNG
- Keep the filename as `profile.jpg`

### 3. Customize Skills

Edit `src/data/skills.jsx`:
- ✅ Soft skills already added
- Update experience years
- Add/remove skills as needed

### 4. Customize Colors

Edit `src/styles/variables.scss` to change the color scheme:
```scss
$color-primary: #2D3748;    // Main dark color
$color-secondary: #4A90E2;  // Accent blue
$color-accent: #F59E0B;     // Warm amber
```

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero/           ✅ Complete
│   │   ├── Navigation/     ✅ Complete
│   │   ├── Skills/         ✅ Complete (with soft skills)
│   │   ├── About/          ✅ Complete (with timeline)
│   │   └── Contact/        ✅ Complete (with form + social links)
│   ├── hooks/              ✅ Custom React hooks
│   ├── data/               ✅ Skills and projects data
│   ├── styles/             ✅ SCSS variables and global styles
│   └── utils/              ✅ Validation utilities
└── public/
    └── profile.jpg         ⚠️ Replace with your photo
```

## ✅ What's Included

- [x] Navigation with mobile menu
- [x] Hero section with your name (Hassan Shahid)
- [x] Skills section with categories + soft skills
- [x] About section with bio and timeline
- [x] Contact form with validation
- [x] Social links (LinkedIn, Upwork, GitHub, Email)
- [x] Responsive design
- [x] Smooth animations
- [x] SCSS styling

## 🎯 Next Steps

1. **Upgrade Node.js** to v22.15.0:
   ```bash
   nvm install 22.15.0
   nvm use 22.15.0
   ```

2. **Add your photo** to `public/profile.jpg`

3. **Update contact info** in `Contact.jsx`

4. **Update social links** with your actual profiles

5. **Customize timeline** in `About.jsx` with your experience

6. **Add projects** (optional - section placeholder is ready)

## 🛠️ Tech Stack

- React 19
- Vite 5
- SCSS Modules
- Framer Motion
- React Hook Form
- React Icons

## 📧 Contact Form

The contact form includes:
- Name validation (min 2 characters)
- Email validation (proper format)
- Message validation (min 10 characters)
- Success/error feedback
- Loading state

**Note**: Currently logs to console. To make it functional, integrate with:
- EmailJS
- Formspree
- Your own backend API

## 🎨 Design Philosophy

This portfolio follows a human-centered design approach:
- Thoughtful animations (not generic)
- Custom color palette
- Intentional spacing
- Personality-driven content
- Professional yet approachable

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - Free to use for your portfolio!

---

Built with ❤️ by Hassan Shahid using React, Vite, and modern web technologies.
