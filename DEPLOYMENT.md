# Netlify Deployment Guide

## 🚀 Quick Deploy

1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up/Login** with GitHub
3. **Click "New site from Git"**
4. **Select GitHub** and authorize Netlify
5. **Choose repository**: `Ajang-Deng98/puurku_initiative-`
6. **Deploy settings**:
   - Branch: `master`
   - Build command: `npm run build`
   - Publish directory: `build`
7. **Click "Deploy site"**

## ⚙️ Build Configuration

The project includes:
- `netlify.toml` - Build and redirect configuration
- `public/_redirects` - Client-side routing support
- Optimized for Create React App

## 🌐 Custom Domain (Optional)

1. Go to **Site settings** > **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `puurku.org`)
4. Follow DNS configuration instructions

## 🔄 Automatic Deployments

- **Every push to master** triggers automatic deployment
- **Pull requests** create preview deployments
- **Build logs** available in Netlify dashboard

## 📊 Performance Features

- **Global CDN** for fast loading worldwide
- **Automatic HTTPS** with SSL certificates
- **Image optimization** and compression
- **Branch previews** for testing

Your site will be live at: `https://[site-name].netlify.app`