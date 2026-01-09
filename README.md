# Driven Outcomes Website

A WordPress website with Docker support for local development and VPS deployment using Docker Swarm. This website includes static information pages and dynamic content management for workshops and promotions.

## Features

- **Static Pages**: Create and manage informational pages about your business
- **Workshops**: Custom post type for managing workshop listings
- **Promotions**: Custom post type for managing special offers and promotions
- **Responsive Design**: Mobile-friendly layout
- **Docker Support**: Easy deployment with Docker Compose (local) and Docker Swarm (production)
- **Admin Dashboard**: Full WordPress admin interface for content management

## Prerequisites

- Docker (v20.10 or higher)
- Docker Compose (v2.0 or higher)
- For production: Docker Swarm initialized on your VPS

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/tbysctt/driven-outcomes-website.git
cd driven-outcomes-website
```

### 2. Configure Environment Variables

Copy the example environment file and customize it:

```bash
cp .env.example .env
```

Edit `.env` and set secure passwords:

```env
MYSQL_ROOT_PASSWORD=your_secure_root_password
MYSQL_DATABASE=wordpress
MYSQL_USER=wordpress
MYSQL_PASSWORD=your_secure_password
WORDPRESS_DEBUG=false
```

### 3. Start the Development Environment

```bash
docker-compose up -d
```

This will start:
- MySQL database on port 3306
- WordPress on port 8080

### 4. Access WordPress

Open your browser and navigate to:
- **Website**: http://localhost:8080
- **Admin Dashboard**: http://localhost:8080/wp-admin

Follow the WordPress installation wizard to set up your site:
1. Select your language
2. Create an admin account (save these credentials!)
3. Complete the installation

### 5. Activate the Custom Theme

1. Log in to the WordPress admin dashboard
2. Go to **Appearance > Themes**
3. Activate the **Driven Outcomes** theme

### 6. Set Up Navigation Menu

1. Go to **Appearance > Menus**
2. Create a new menu called "Primary Menu"
3. Add pages, workshops archive, and promotions archive to the menu
4. Assign the menu to the "Primary Menu" location
5. Save the menu

## Managing Content

### Creating Static Pages

1. Go to **Pages > Add New** in the WordPress admin
2. Enter the page title and content
3. Click **Publish**
4. Add the page to your navigation menu if desired

### Creating Workshops

1. Go to **Workshops > Add New** in the WordPress admin
2. Enter the workshop title, description, and details
3. Add a featured image (optional)
4. Click **Publish**
5. Workshops will appear on the workshops archive page

### Creating Promotions

1. Go to **Promotions > Add New** in the WordPress admin
2. Enter the promotion title and details
3. Add a featured image (optional)
4. Click **Publish**
5. Promotions will appear on the promotions archive page

## Production Deployment (Docker Swarm)

### Prerequisites

- VPS with Docker installed
- Docker Swarm initialized (`docker swarm init`)
- Domain name pointed to your VPS IP address

### 1. Set Up Docker Secrets

Create secrets for sensitive data:

```bash
# Create MySQL root password secret
echo "your_secure_root_password" | docker secret create mysql_root_password -

# Create MySQL password secret
echo "your_secure_password" | docker secret create mysql_password -
```

### 2. Deploy the Stack

```bash
# Copy the stack file to your VPS
scp docker-stack.yml user@your-vps-ip:/path/to/deploy/

# SSH into your VPS
ssh user@your-vps-ip

# Deploy the stack
docker stack deploy -c docker-stack.yml driven-outcomes
```

### 3. Verify Deployment

Check that services are running:

```bash
docker stack services driven-outcomes
```

### 4. Access Your Website

Navigate to your domain in a browser and complete the WordPress installation process.

### 5. Set Up SSL/TLS (Recommended)

For production, it's highly recommended to set up HTTPS. You can use:
- **Reverse proxy** (e.g., Nginx or Traefik) with Let's Encrypt
- **Cloudflare** for SSL and CDN

## Docker Commands Reference

### Local Development

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Restart services
docker-compose restart

# Remove all data (WARNING: This deletes your database!)
docker-compose down -v
```

### Production (Docker Swarm)

```bash
# Deploy stack
docker stack deploy -c docker-stack.yml driven-outcomes

# List services
docker stack services driven-outcomes

# View service logs
docker service logs driven-outcomes_wordpress

# Update a service
docker service update driven-outcomes_wordpress

# Remove stack
docker stack rm driven-outcomes
```

## Backup and Restore

### Backup Database

```bash
# Local development
docker exec driven_outcomes_db mysqldump -u wordpress -pwordpress wordpress > backup.sql

# Production
docker exec $(docker ps -q -f name=driven-outcomes_db) mysqldump -u wordpress -p wordpress > backup.sql
```

### Restore Database

```bash
# Local development
docker exec -i driven_outcomes_db mysql -u wordpress -pwordpress wordpress < backup.sql

# Production
docker exec -i $(docker ps -q -f name=driven-outcomes_db) mysql -u wordpress -p wordpress < backup.sql
```

### Backup WordPress Files

```bash
# Backup wp-content directory
docker cp driven_outcomes_wp:/var/www/html/wp-content ./wp-content-backup
```

## Troubleshooting

### Cannot Connect to Database

If WordPress cannot connect to the database:
1. Ensure the database service is running: `docker-compose ps`
2. Check environment variables in `.env` file
3. Wait 30 seconds for MySQL to fully start, then restart WordPress:
   ```bash
   docker-compose restart wordpress
   ```

### Port 8080 Already in Use

If port 8080 is already in use on your system:
1. Edit `docker-compose.yml`
2. Change the port mapping from `"8080:80"` to another port like `"8081:80"`
3. Restart services: `docker-compose down && docker-compose up -d`

### Theme Not Appearing

1. Ensure the theme files are in the correct location: `wp-content/themes/driven-outcomes/`
2. Check file permissions
3. Go to **Appearance > Themes** in WordPress admin and activate the theme

## File Structure

```
driven-outcomes-website/
├── docker-compose.yml          # Local development configuration
├── docker-stack.yml            # Production Docker Swarm configuration
├── .env.example                # Example environment variables
├── .gitignore                  # Git ignore rules
├── README.md                   # This file
└── wp-content/
    ├── themes/
    │   └── driven-outcomes/    # Custom theme
    │       ├── style.css       # Theme styles
    │       ├── functions.php   # Theme functions and custom post types
    │       ├── header.php      # Header template
    │       ├── footer.php      # Footer template
    │       ├── index.php       # Main template
    │       ├── page.php        # Page template
    │       ├── single.php      # Single post template
    │       ├── single-workshop.php      # Single workshop template
    │       ├── single-promotion.php     # Single promotion template
    │       ├── archive-workshop.php     # Workshop archive template
    │       └── archive-promotion.php    # Promotion archive template
    └── plugins/                # Custom plugins directory
```

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Docker logs: `docker-compose logs`
3. Check WordPress debug log (if WORDPRESS_DEBUG=true)

## License

This project is licensed under the GNU General Public License v2 or later.