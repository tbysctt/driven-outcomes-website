# Architecture Overview

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT ACCESS                             │
│  (Browser: http://localhost:8080 or https://your-domain.com)   │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                     DOCKER ENVIRONMENT                           │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │           WORDPRESS CONTAINER (Port 8080)                │   │
│  │  ┌───────────────────────────────────────────────────┐  │   │
│  │  │  WordPress Core                                    │  │   │
│  │  │  - PHP                                             │  │   │
│  │  │  - Apache Web Server                               │  │   │
│  │  │  - WordPress Admin Dashboard                       │  │   │
│  │  └───────────────────────────────────────────────────┘  │   │
│  │  ┌───────────────────────────────────────────────────┐  │   │
│  │  │  Custom Theme: "Driven Outcomes" (TailPress)   │  │   │
│  │  │  ┌──────────────────────────────────────────────┐ │  │   │
│  │  │  │  TailPress Framework:                        │ │  │   │
│  │  │  │  - Tailwind CSS (utility-first styling)     │ │  │   │
│  │  │  │  - Vite (fast build tool)                   │ │  │   │
│  │  │  │  - Block editor support                     │ │  │   │
│  │  │  └──────────────────────────────────────────────┘ │  │   │
│  │  │  ┌──────────────────────────────────────────────┐ │  │   │
│  │  │  │  Templates:                                   │ │  │   │
│  │  │  │  - Static Pages (default TailPress)          │ │  │   │
│  │  │  │  - Workshops (archive/single-workshop.php)    │ │  │   │
│  │  │  │  - Promotions (archive/single-promotion.php)  │ │  │   │
│  │  │  └──────────────────────────────────────────────┘ │  │   │
│  │  │  ┌──────────────────────────────────────────────┐ │  │   │
│  │  │  │  Custom Post Types (functions.php):          │ │  │   │
│  │  │  │  - Workshops                                  │ │  │   │
│  │  │  │  - Promotions                                 │ │  │   │
│  │  │  └──────────────────────────────────────────────┘ │  │   │
│  │  └───────────────────────────────────────────────────┘  │   │
│  └────────────────────┬────────────────────────────────────┘   │
│                       │ Database Connection (port 3306)         │
│                       ▼                                          │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              MARIADB CONTAINER                             │   │
│  │  - MariaDB                                             │   │
│  │  - Database: wordpress                                   │   │
│  │  - Persistent Volume: db_data                            │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              PERSISTENT VOLUMES                          │   │
│  │  - wordpress_data (WordPress files)                      │   │
│  │  - db_data (MariaDB database)                              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              BIND MOUNTS (Development)                   │   │
│  │  - ./wp-content/themes/driven-outcomes                   │   │
│  │  - ./wp-content/plugins                                  │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

## Content Management Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        ADMIN USER                                │
│                 (http://localhost:8080/wp-admin)                 │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────────┐
        │    WordPress Admin Dashboard            │
        └────────────────────────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                 │
        ▼                ▼                 ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│    PAGES     │ │  WORKSHOPS   │ │  PROMOTIONS  │
│   (Static    │ │  (Custom PT) │ │  (Custom PT) │
│Information)  │ │              │ │              │
└──────────────┘ └──────────────┘ └──────────────┘
        │                │                 │
        └────────────────┼─────────────────┘
                         ▼
              ┌──────────────────────┐
              │   MariaDB Database     │
              │   (Stored Content)   │
              └──────────────────────┘
                         │
                         ▼
              ┌──────────────────────┐
              │  Theme Templates     │
              │  (Display Content)   │
              └──────────────────────┘
                         │
                         ▼
              ┌──────────────────────┐
              │    Public Website    │
              │  (Visitor View)      │
              └──────────────────────┘
```

## Deployment Environments

### Local Development (Docker Compose)
```
Developer Machine
├── Docker Compose
│   ├── MariaDB Container
│   └── WordPress Container
├── Code Editor (VSCode, etc.)
└── Browser (localhost:8080)
```

### Production (Docker Swarm)
```
VPS Server
├── Docker Swarm (Orchestration)
│   ├── MariaDB Service
│   │   └── Docker Secrets (passwords)
│   └── WordPress Service
├── Reverse Proxy (Optional)
│   ├── Nginx or Traefik
│   └── Let's Encrypt SSL
└── Domain Name
    └── DNS → VPS IP
```

## Data Flow

### Content Creation
```
Admin → Dashboard → Create/Edit → Save → Database → Cache → Display
```

### Content Display
```
Visitor → Request Page → WordPress → Query Database → 
Apply Theme Template → Render HTML → Return to Browser
```

### Workshop/Promotion Management
```
Admin → Workshops/Promotions Menu → Add New → 
Enter Details → Upload Image → Publish → 
Appears in Archive → Clickable to Single View
```

## URL Structure

```
Website Root: /
├── / (Homepage)
├── /about/ (Static Page)
├── /contact/ (Static Page)
├── /workshop/ (Workshop Archive)
│   ├── /workshop/workshop-name-1/
│   ├── /workshop/workshop-name-2/
│   └── /workshop/workshop-name-3/
├── /promotion/ (Promotion Archive)
│   ├── /promotion/promotion-name-1/
│   ├── /promotion/promotion-name-2/
│   └── /promotion/promotion-name-3/
└── /wp-admin/ (Admin Dashboard)
```

## Security Layers

### Development
```
Local Machine
└── Environment Variables (.env file)
    └── Database Credentials
```

### Production
```
Docker Swarm
└── Docker Secrets (encrypted)
    ├── mysql_root_password
    └── mysql_password
```

## Backup Strategy

### What to Backup
```
┌─────────────────────────────────────┐
│          BACKUP TARGETS             │
├─────────────────────────────────────┤
│ 1. Database (MariaDB dump)            │
│    - All content                    │
│    - User accounts                  │
│    - Settings                       │
│                                     │
│ 2. WordPress Files                  │
│    - Custom theme                   │
│    - Uploaded images                │
│    - Plugins (if added)             │
│                                     │
│ 3. Configuration                    │
│    - .env file (secured)            │
│    - Docker configs                 │
└─────────────────────────────────────┘
```

### Backup Commands
```bash
# Database backup
./manage.sh backup-db

# File backup
docker cp driven_outcomes_wp:/var/www/html/wp-content ./backup/
```

## Scaling Considerations

### Current Setup (Single Server)
```
1 MariaDB Container + 1 WordPress Container = Suitable for small to medium traffic
```

### Future Scaling (if needed)
```
1. Add load balancer
2. Scale WordPress service: docker service scale driven-outcomes_wordpress=3
3. Add Redis for caching
4. Use external database service (RDS)
5. Add CDN (Cloudflare)
```

## Technology Stack

```
┌─────────────────────────────────────┐
│         TECHNOLOGY STACK            │
├─────────────────────────────────────┤
│ Frontend:                           │
│ - HTML5                             │
│ - Tailwind CSS v3+                  │
│ - JavaScript (WordPress + Vite)     │
│                                     │
│ Theme Framework:                    │
│ - TailPress (WordPress boilerplate) │
│ - Vite (build tool & dev server)    │
│ - Tailwind CSS (styling)            │
│                                     │
│ Backend:                            │
│ - PHP (WordPress)                   │
│ - MariaDB                         │
│                                     │
│ Infrastructure:                     │
│ - Docker                            │
│ - Docker Compose (dev)              │
│ - Docker Swarm (prod)               │
│                                     │
│ Web Server:                         │
│ - Apache (in WordPress container)   │
└─────────────────────────────────────┘
```

## Development Workflow

```
┌─────────────────────────────────────────────────────────────┐
│                    DEVELOPMENT WORKFLOW                      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
         ┌─────────────────────────────────────┐
         │  1. Clone Repository                 │
         └──────────────┬──────────────────────┘
                        ▼
         ┌─────────────────────────────────────┐
         │  2. Run validate-setup.sh            │
         └──────────────┬──────────────────────┘
                        ▼
         ┌─────────────────────────────────────┐
         │  3. Start with ./manage.sh start     │
         └──────────────┬──────────────────────┘
                        ▼
         ┌─────────────────────────────────────┐
         │  4. Access localhost:8080            │
         └──────────────┬──────────────────────┘
                        ▼
         ┌─────────────────────────────────────┐
         │  5. Complete WordPress Install       │
         └──────────────┬──────────────────────┘
                        ▼
         ┌─────────────────────────────────────┐
         │  6. Activate Theme                   │
         └──────────────┬──────────────────────┘
                        ▼
         ┌─────────────────────────────────────┐
         │  7. Create Content                   │
         └──────────────┬──────────────────────┘
                        ▼
         ┌─────────────────────────────────────┐
         │  8. Test Functionality               │
         └──────────────┬──────────────────────┘
                        ▼
         ┌─────────────────────────────────────┐
         │  9. Deploy to Production VPS         │
         └─────────────────────────────────────┘
```

This architecture provides a robust, scalable solution for the client's WordPress website with clear separation of concerns and easy maintenance.
