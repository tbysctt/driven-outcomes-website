# Deployment Guide for VPS with Docker Swarm

This guide walks you through deploying your WordPress site to a production VPS using Docker Swarm.

## Prerequisites

- A VPS (Virtual Private Server) from providers like:
  - DigitalOcean
  - Linode
  - AWS EC2
  - Google Cloud
  - Azure
- Ubuntu 20.04 or later (recommended)
- Root or sudo access to the VPS
- A domain name pointing to your VPS IP address

## Step 1: Prepare Your VPS

### SSH into Your VPS

```bash
ssh root@your-vps-ip
```

### Update System Packages

```bash
apt update && apt upgrade -y
```

### Install Docker

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Start Docker service
systemctl start docker
systemctl enable docker

# Verify installation
docker --version
```

### Configure Firewall

```bash
# Allow SSH, HTTP, and HTTPS
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```

## Step 2: Initialize Docker Swarm

```bash
# Initialize swarm
docker swarm init

# You should see output like:
# Swarm initialized: current node (xxx) is now a manager.
```

## Step 3: Set Up Docker Secrets

Docker secrets are the secure way to store passwords in production.

```bash
# Create MySQL root password secret
echo "your_very_secure_root_password_here" | docker secret create mysql_root_password -

# Create MySQL user password secret
echo "your_very_secure_password_here" | docker secret create mysql_password -

# Verify secrets were created
docker secret ls
```

**Important**: Replace the example passwords with strong, unique passwords!

## Step 4: Deploy Your Stack

### Option A: Deploy from Git Repository

```bash
# Clone the repository
git clone https://github.com/tbysctt/driven-outcomes-website.git
cd driven-outcomes-website

# Deploy the stack
docker stack deploy -c docker-stack.yml driven-outcomes
```

### Option B: Deploy from Local File

If you've made custom changes:

```bash
# From your local machine, copy the stack file to VPS
scp docker-stack.yml root@your-vps-ip:/root/

# SSH into VPS
ssh root@your-vps-ip

# Deploy the stack
docker stack deploy -c docker-stack.yml driven-outcomes
```

## Step 5: Verify Deployment

```bash
# Check services are running
docker stack services driven-outcomes

# Expected output:
# ID             NAME                         MODE         REPLICAS   IMAGE
# xxx            driven-outcomes_db          replicated   1/1        mysql:8.0
# xxx            driven-outcomes_wordpress   replicated   1/1        wordpress:latest

# View service logs
docker service logs driven-outcomes_wordpress
docker service logs driven-outcomes_db
```

Wait 1-2 minutes for all services to start.

## Step 6: Complete WordPress Installation

1. Navigate to `http://your-domain.com` or `http://your-vps-ip`
2. Select your language
3. Create admin account (save credentials securely!)
4. Complete installation

### Activate Custom Theme

1. Log in to WordPress admin
2. Go to **Appearance > Themes**
3. Activate "Driven Outcomes" theme

## Step 7: Set Up SSL/HTTPS (Recommended)

### Option A: Using Nginx Reverse Proxy with Let's Encrypt

Install Nginx and Certbot:

```bash
apt install nginx certbot python3-certbot-nginx -y
```

Create Nginx configuration:

```bash
nano /etc/nginx/sites-available/driven-outcomes
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site and get SSL certificate:

```bash
# Enable site
ln -s /etc/nginx/sites-available/driven-outcomes /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx

# Get SSL certificate
certbot --nginx -d your-domain.com -d www.your-domain.com
```

### Option B: Using Cloudflare

1. Sign up for [Cloudflare](https://www.cloudflare.com/) (free plan available)
2. Add your domain to Cloudflare
3. Update your domain's nameservers at your registrar
4. Enable SSL in Cloudflare dashboard (Full or Flexible mode)

## Step 8: Update WordPress Configuration

After enabling HTTPS, update WordPress URLs:

1. Log in to WordPress admin
2. Go to **Settings > General**
3. Update both URLs to use `https://`:
   - WordPress Address (URL): `https://your-domain.com`
   - Site Address (URL): `https://your-domain.com`
4. Save changes

## Maintenance Commands

### View Stack Status

```bash
docker stack services driven-outcomes
docker stack ps driven-outcomes
```

### Update Services

```bash
# Pull latest images
docker service update --image wordpress:latest driven-outcomes_wordpress

# Scale services (if needed)
docker service scale driven-outcomes_wordpress=2
```

### View Logs

```bash
# Real-time logs
docker service logs -f driven-outcomes_wordpress
docker service logs -f driven-outcomes_db

# Last 100 lines
docker service logs --tail 100 driven-outcomes_wordpress
```

### Backup Database

```bash
# Find the database container ID
docker ps | grep mysql

# Create backup
docker exec [container-id] mysqldump -u wordpress -p wordpress > backup-$(date +%Y%m%d).sql
```

### Restore Database

```bash
docker exec -i [container-id] mysql -u wordpress -p wordpress < backup-20240101.sql
```

### Remove Stack (Careful!)

```bash
# This will stop all services but preserve data in volumes
docker stack rm driven-outcomes

# To also remove volumes (WARNING: This deletes your data!)
docker volume ls
docker volume rm [volume-name]
```

## Troubleshooting

### Services Not Starting

```bash
# Check service logs
docker service logs driven-outcomes_wordpress
docker service logs driven-outcomes_db

# Check container status
docker ps -a
```

### Database Connection Issues

```bash
# Restart the WordPress service
docker service update --force driven-outcomes_wordpress

# Check secrets are created
docker secret ls
```

### Port Already in Use

If port 80 is already in use:

1. Check what's using it: `netstat -tulpn | grep :80`
2. Stop the service (e.g., `systemctl stop apache2`)
3. Or modify `docker-stack.yml` to use a different port

## Security Best Practices

1. **Use strong passwords** for Docker secrets
2. **Enable firewall** and only open necessary ports
3. **Keep Docker updated**: `apt update && apt upgrade docker-ce`
4. **Regular backups**: Set up automated database backups
5. **Monitor logs**: Check for suspicious activity
6. **Update WordPress**: Keep WordPress, themes, and plugins updated
7. **Disable debug mode**: Ensure `WORDPRESS_DEBUG=false` in production

## Performance Optimization

### Enable Caching

Consider installing WordPress caching plugins:
- W3 Total Cache
- WP Super Cache
- Redis Object Cache

### Use CDN

Set up a CDN like:
- Cloudflare (free)
- AWS CloudFront
- StackPath

### Monitor Resources

```bash
# Check resource usage
docker stats

# Check disk space
df -h

# Check memory
free -h
```

## Support

For issues or questions:
- Check service logs: `docker service logs driven-outcomes_wordpress`
- Review the main [README.md](README.md)
- Check Docker Swarm documentation: https://docs.docker.com/engine/swarm/

## Next Steps

After deployment:
1. Create your static pages
2. Add workshops and promotions
3. Set up navigation menus
4. Configure WordPress settings
5. Install additional plugins if needed
6. Set up regular backups
7. Monitor site performance

Congratulations! Your WordPress site is now live in production! 🚀
