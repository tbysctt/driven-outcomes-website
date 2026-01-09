#!/bin/bash
# Helper script for managing the WordPress development environment
# Usage: ./manage.sh [command]

set -e

COMPOSE_CMD="docker compose"

case "$1" in
    start)
        echo "Starting WordPress environment..."
        $COMPOSE_CMD up -d
        echo ""
        echo "WordPress is starting up..."
        echo "Please wait 30 seconds for the database to initialize."
        echo ""
        echo "Access your site at: http://localhost:8080"
        echo "Access admin at: http://localhost:8080/wp-admin"
        ;;
    
    stop)
        echo "Stopping WordPress environment..."
        $COMPOSE_CMD down
        echo "Environment stopped."
        ;;
    
    restart)
        echo "Restarting WordPress environment..."
        $COMPOSE_CMD restart
        echo "Environment restarted."
        ;;
    
    logs)
        echo "Showing logs (Ctrl+C to exit)..."
        $COMPOSE_CMD logs -f
        ;;
    
    status)
        echo "Checking service status..."
        $COMPOSE_CMD ps
        ;;
    
    backup-db)
        echo "Creating database backup..."
        BACKUP_FILE="backup-$(date +%Y%m%d-%H%M%S).sql"
        docker exec driven_outcomes_db mysqldump -u wordpress -pwordpress wordpress > "$BACKUP_FILE"
        echo "Database backed up to: $BACKUP_FILE"
        ;;
    
    restore-db)
        if [ -z "$2" ]; then
            echo "Usage: ./manage.sh restore-db <backup-file.sql>"
            exit 1
        fi
        echo "Restoring database from: $2"
        docker exec -i driven_outcomes_db mysql -u wordpress -pwordpress wordpress < "$2"
        echo "Database restored successfully!"
        ;;
    
    clean)
        echo "WARNING: This will remove all containers and data!"
        echo "Press Ctrl+C to cancel, or Enter to continue..."
        read
        $COMPOSE_CMD down -v
        echo "All data removed."
        ;;
    
    shell)
        echo "Opening shell in WordPress container..."
        docker exec -it driven_outcomes_wp bash
        ;;
    
    db-shell)
        echo "Opening MySQL shell..."
        docker exec -it driven_outcomes_db mysql -u wordpress -pwordpress wordpress
        ;;
    
    *)
        echo "WordPress Development Environment Manager"
        echo ""
        echo "Usage: ./manage.sh [command]"
        echo ""
        echo "Commands:"
        echo "  start       - Start the WordPress environment"
        echo "  stop        - Stop the WordPress environment"
        echo "  restart     - Restart the WordPress environment"
        echo "  logs        - View logs (real-time)"
        echo "  status      - Check service status"
        echo "  backup-db   - Create a database backup"
        echo "  restore-db  - Restore database from backup file"
        echo "  clean       - Remove all containers and data (WARNING!)"
        echo "  shell       - Open shell in WordPress container"
        echo "  db-shell    - Open MySQL shell"
        echo ""
        exit 1
        ;;
esac
