# Deployment Guide

This guide will walk you through deploying your portfolio website to various platforms. Choose the option that best fits your needs.

## 🚀 Quick Start - Vercel (Recommended)

Vercel is the easiest and fastest way to deploy your React portfolio website.

### Prerequisites
- GitHub account
- Vercel account (free)

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-website.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "New Project"
   - Import your portfolio repository
   - Vercel will automatically detect it's a React project
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - In your Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain
   - Update DNS records as instructed

**✅ Benefits**: Automatic deployments, global CDN, custom domains, analytics

---

## 🌐 Netlify Deployment

Netlify is another excellent option with great features.

### Steps

1. **Build your project locally**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign up
   - Drag and drop your `dist` folder to the deploy area
   - Or connect your GitHub repository for automatic deployments

3. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` (or your preferred version)

4. **Custom Domain**
   - Go to "Domain settings" in your Netlify dashboard
   - Add your custom domain
   - Update DNS records

**✅ Benefits**: Form handling, serverless functions, A/B testing

---

## 📚 GitHub Pages Deployment

Free hosting directly from your GitHub repository.

### Steps

1. **Update package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/', // Add this line
     // ... rest of config
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "gh-pages" branch as source

**✅ Benefits**: Free hosting, integrated with GitHub, easy updates

---

## ☁️ AWS S3 + CloudFront

For more control and scalability.

### Prerequisites
- AWS account
- AWS CLI installed and configured

### Steps

1. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://your-portfolio-website
   ```

2. **Configure bucket for static website hosting**
   ```bash
   aws s3 website s3://your-portfolio-website --index-document index.html --error-document index.html
   ```

3. **Upload files**
   ```bash
   npm run build
   aws s3 sync dist/ s3://your-portfolio-website
   ```

4. **Set bucket policy for public read access**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-portfolio-website/*"
       }
     ]
   }
   ```

5. **Create CloudFront distribution**
   - Go to CloudFront console
   - Create distribution
   - Origin: S3 bucket
   - Default root object: index.html
   - Enable HTTPS

**✅ Benefits**: Global CDN, high performance, cost-effective for high traffic

---

## 🔧 Environment Setup

Before deploying, ensure your development environment is properly configured.

### Install Node.js
1. Download from [nodejs.org](https://nodejs.org)
2. Choose LTS version (recommended)
3. Verify installation: `node --version` and `npm --version`

### Install Dependencies
```bash
npm install
```

### Test Locally
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 📱 Performance Optimization

### Before Deployment
1. **Optimize images**
   - Use WebP format when possible
   - Compress images without losing quality
   - Implement lazy loading

2. **Code splitting**
   - Vite automatically handles this
   - Consider route-based splitting for large apps

3. **Bundle analysis**
   ```bash
   npm install --save-dev rollup-plugin-visualizer
   ```

### After Deployment
1. **Test performance**
   - Use Google PageSpeed Insights
   - Check Core Web Vitals
   - Test on various devices

2. **Monitor analytics**
   - Set up Google Analytics
   - Monitor user behavior
   - Track conversion rates

---

## 🔒 Security Considerations

### HTTPS
- All modern hosting platforms provide HTTPS by default
- Ensure your custom domain has SSL certificate

### Environment Variables
- Never commit sensitive data to your repository
- Use environment variables for API keys
- Consider using `.env.local` for local development

### Content Security Policy
- Implement CSP headers
- Restrict resource loading to trusted sources
- Monitor for security violations

---

## 📊 Analytics & Monitoring

### Google Analytics
1. Create Google Analytics account
2. Add tracking code to your HTML
3. Set up goals and conversions

### Performance Monitoring
- **Vercel Analytics**: Built-in with Vercel
- **Netlify Analytics**: Available with paid plans
- **Custom monitoring**: Implement with tools like Sentry

---

## 🚨 Troubleshooting

### Common Issues

1. **Build fails**
   - Check Node.js version compatibility
   - Clear node_modules and reinstall
   - Verify all dependencies are installed

2. **Routing issues**
   - Ensure proper base path in vite.config.js
   - Configure hosting platform for SPA routing
   - Test all routes after deployment

3. **Images not loading**
   - Check file paths
   - Verify image files are in public folder
   - Use relative paths for assets

4. **Performance issues**
   - Optimize bundle size
   - Implement lazy loading
   - Use CDN for static assets

### Getting Help
- Check platform documentation
- Search GitHub issues
- Ask in community forums
- Contact platform support

---

## 🎯 Next Steps

After successful deployment:

1. **Customize content**
   - Update personal information
   - Add your actual projects
   - Customize styling and colors

2. **SEO optimization**
   - Add meta descriptions
   - Implement structured data
   - Submit sitemap to search engines

3. **Marketing**
   - Share on social media
   - Add to your LinkedIn profile
   - Include in job applications

4. **Maintenance**
   - Regular updates
   - Performance monitoring
   - Security updates

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Documentation](https://pages.github.com)
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment)

---

**Happy deploying! 🚀**

Your portfolio website is now ready to showcase your skills to the world!
