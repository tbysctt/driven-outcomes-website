# Getting Started Checklist

This checklist will guide you through setting up and using your new WordPress website built with **TailPress** and Tailwind CSS.

## ☐ Initial Setup (One-Time)

### Prerequisites
- [ ] Install Docker Desktop on your computer
  - Windows/Mac: Download from https://www.docker.com/products/docker-desktop
  - Wait for installation to complete and ensure Docker is running
- [ ] Have a code editor installed (optional, for customization)
  - Recommended: VS Code, Sublime Text, or Atom

### Local Development Setup
- [ ] Clone or download this repository to your computer
- [ ] Open a terminal/command prompt in the project folder
- [ ] Run the validation: `./validate-setup.sh` (or `bash validate-setup.sh` on Windows)
- [ ] Verify all 36 checks pass
- [ ] Copy `.env.example` to `.env`: `cp .env.example .env`
- [ ] (Optional) Edit `.env` to change default passwords

### Start WordPress
- [ ] Run: `./manage.sh start` (or `bash manage.sh start` on Windows)
- [ ] Wait 30 seconds for services to start
- [ ] Open browser to http://localhost:8080
- [ ] Complete WordPress installation wizard:
  - [ ] Select your language
  - [ ] Enter site title (e.g., "Driven Outcomes")
  - [ ] Create admin username (save this!)
  - [ ] Create strong admin password (save this!)
  - [ ] Enter your email address
  - [ ] Click "Install WordPress"

### Activate Theme
- [ ] Log in to http://localhost:8080/wp-admin with your credentials
- [ ] Go to **Appearance** → **Themes**
- [ ] Find "Driven Outcomes" theme
- [ ] Click **Activate**

## ☐ Create Your First Content

### Create Static Pages
- [ ] Go to **Pages** → **Add New**
- [ ] Create "Home" page
  - [ ] Enter title: "Home"
  - [ ] Add welcome content
  - [ ] Click **Publish**
- [ ] Create "About" page
  - [ ] Enter title: "About Us"
  - [ ] Add your company information
  - [ ] Click **Publish**
- [ ] Create "Contact" page
  - [ ] Enter title: "Contact"
  - [ ] Add contact information
  - [ ] Click **Publish**

### Set Homepage
- [ ] Go to **Settings** → **Reading**
- [ ] Select "A static page" for homepage
- [ ] Choose "Home" as your homepage
- [ ] Click **Save Changes**

### Create Your First Workshop
- [ ] Go to **Workshops** → **Add New**
- [ ] Enter workshop title (e.g., "Leadership Training")
- [ ] Add workshop description and details
- [ ] (Optional) Add a featured image:
  - [ ] Click "Set featured image"
  - [ ] Upload an image
  - [ ] Click "Set featured image"
- [ ] Click **Publish**
- [ ] Visit http://localhost:8080/workshop/ to see your workshop

### Create Your First Promotion
- [ ] Go to **Promotions** → **Add New**
- [ ] Enter promotion title (e.g., "Spring Special - 20% Off")
- [ ] Add promotion details
- [ ] (Optional) Add a featured image
- [ ] Click **Publish**
- [ ] Visit http://localhost:8080/promotion/ to see your promotion

## ☐ Set Up Navigation

### Create Main Menu
- [ ] Go to **Appearance** → **Menus**
- [ ] Create a new menu called "Main Menu"
- [ ] Add items to menu:
  - [ ] Add "Home" page
  - [ ] Add "About" page
  - [ ] Add "Workshops" (Custom Link: /workshop/)
  - [ ] Add "Promotions" (Custom Link: /promotion/)
  - [ ] Add "Contact" page
- [ ] Drag items to reorder them as desired
- [ ] Assign menu to "Primary Menu" location
- [ ] Click **Save Menu**

## ☐ Customize Your Site

### Basic Settings
- [ ] Go to **Settings** → **General**
- [ ] Set your site title
- [ ] Set your tagline
- [ ] Verify your email
- [ ] Set timezone
- [ ] Click **Save Changes**

### Permalink Settings
- [ ] Go to **Settings** → **Permalinks**
- [ ] Select "Post name" (recommended for SEO)
- [ ] Click **Save Changes**

### Theme Customization (Optional)
- [ ] Go to **Appearance** → **Customize**
- [ ] Customize:
  - [ ] Site identity (logo, site icon)
  - [ ] Colors (if supported)
  - [ ] Header/Footer
- [ ] Click **Publish** when done

## ☐ Daily Content Management

### Adding New Workshops
1. Go to **Workshops** → **Add New**
2. Enter title and content
3. Add featured image
4. Click **Publish**

### Adding New Promotions
1. Go to **Promotions** → **Add New**
2. Enter title and content
3. Add featured image
4. Set expiration date in content if needed
5. Click **Publish**

### Editing Existing Pages
1. Go to **Pages** → **All Pages**
2. Click on page title to edit
3. Make changes
4. Click **Update**

### Managing Media
- [ ] Go to **Media** → **Library** to see all uploaded images
- [ ] Click "Add New" to upload new images
- [ ] Use "Alt Text" for accessibility

## ☐ Production Deployment (When Ready)

### Prepare VPS
- [ ] Purchase VPS from provider (DigitalOcean, Linode, etc.)
- [ ] Note down your VPS IP address
- [ ] SSH into your VPS
- [ ] Install Docker (see DEPLOYMENT.md)
- [ ] Initialize Docker Swarm: `docker swarm init`

### Deploy to VPS
- [ ] Create Docker secrets (see DEPLOYMENT.md)
- [ ] Clone repository to VPS
- [ ] Deploy stack: `docker stack deploy -c docker-stack.yml driven-outcomes`
- [ ] Wait for services to start
- [ ] Access via VPS IP address
- [ ] Complete WordPress installation again (production)
- [ ] Activate theme
- [ ] Recreate content (or import from local)

### Set Up Domain
- [ ] Point your domain to VPS IP address
- [ ] Wait for DNS propagation (can take 24-48 hours)
- [ ] Set up SSL/HTTPS (see DEPLOYMENT.md for options)
- [ ] Update WordPress URLs in **Settings** → **General**

## ☐ Maintenance Tasks

### Regular Tasks
- [ ] Backup database weekly: `./manage.sh backup-db`
- [ ] Update WordPress core (through admin dashboard)
- [ ] Update plugins (if any installed)
- [ ] Review and moderate comments (if enabled)
- [ ] Check for security updates

### Monthly Tasks
- [ ] Review and update content
- [ ] Check broken links
- [ ] Review analytics (if installed)
- [ ] Test forms and functionality
- [ ] Update backups offsite

## ☐ Troubleshooting

If something doesn't work:

1. **Check logs**: `./manage.sh logs`
2. **Restart services**: `./manage.sh restart`
3. **Check status**: `./manage.sh status`
4. **Review documentation**: See README.md or DEPLOYMENT.md
5. **Validate setup**: Run `./validate-setup.sh` again

## 📚 Documentation Reference

- **README.md** - Complete reference guide
- **QUICKSTART.md** - 5-minute quick start
- **DEPLOYMENT.md** - Production deployment guide
- **ARCHITECTURE.md** - System architecture overview
- **IMPLEMENTATION_SUMMARY.md** - What was built and why

## ✅ Success Checklist

You're done when you can:
- [ ] Access your website at http://localhost:8080
- [ ] Log in to WordPress admin
- [ ] Create and edit pages
- [ ] Create and edit workshops
- [ ] Create and edit promotions
- [ ] See all content displaying correctly on the site
- [ ] Navigate using your custom menu

## 🎉 Congratulations!

You now have a fully functional WordPress website with:
- ✅ Static pages for information
- ✅ Dynamic workshops you can add/edit
- ✅ Dynamic promotions you can add/edit
- ✅ Full admin control
- ✅ Ready for production deployment

Need help? Review the documentation files or contact your developer.
