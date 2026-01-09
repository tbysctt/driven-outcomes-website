# Quick Start Guide

## Get Your WordPress Site Running in 5 Minutes

### Step 1: Install Docker

If you don't have Docker installed:
- **Windows/Mac**: Download [Docker Desktop](https://www.docker.com/products/docker-desktop)
- **Linux**: Follow [Docker installation guide](https://docs.docker.com/engine/install/)

### Step 2: Clone and Setup

```bash
# Clone the repository
git clone https://github.com/tbysctt/driven-outcomes-website.git
cd driven-outcomes-website

# Create environment file
cp .env.example .env

# Edit .env and change the passwords (optional for local dev)
nano .env  # or use any text editor
```

### Step 3: Start WordPress

```bash
docker-compose up -d
```

Wait about 30 seconds for everything to start.

### Step 4: Complete Installation

1. Open http://localhost:8080 in your browser
2. Choose your language
3. Create your admin account:
   - Username: admin (or your choice)
   - Password: (use a strong password)
   - Email: your@email.com
4. Click "Install WordPress"

### Step 5: Activate Theme

1. Log in to http://localhost:8080/wp-admin
2. Go to **Appearance > Themes**
3. Click **Activate** on the "Driven Outcomes" theme

### You're Done! 🎉

Your site is now running at http://localhost:8080

## Next Steps

### Create Your First Page

1. In the WordPress admin, go to **Pages > Add New**
2. Enter a title like "About Us"
3. Add some content
4. Click **Publish**

### Create Your First Workshop

1. Go to **Workshops > Add New**
2. Enter workshop details
3. Click **Publish**
4. View at http://localhost:8080/workshop/

### Create Your First Promotion

1. Go to **Promotions > Add New**
2. Enter promotion details
3. Click **Publish**
4. View at http://localhost:8080/promotion/

### Set Up Navigation

1. Go to **Appearance > Menus**
2. Create a menu called "Primary Menu"
3. Add your pages and post types
4. Assign to "Primary Menu" location
5. Save

## Stopping the Site

```bash
docker-compose down
```

## Restarting the Site

```bash
docker-compose up -d
```

Your data is saved in Docker volumes, so you won't lose anything when you stop and restart.

## Need Help?

Check the main [README.md](README.md) for detailed documentation and troubleshooting.
