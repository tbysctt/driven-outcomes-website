#!/bin/bash
# Script to create Docker secrets for production deployment
# Usage: ./create-secrets.sh

set -e

echo "==================================="
echo "Docker Secrets Setup for Production"
echo "==================================="
echo ""

# Function to create a secret
create_secret() {
    local secret_name=$1
    local prompt_text=$2
    
    # Check if secret already exists
    if docker secret inspect "$secret_name" >/dev/null 2>&1; then
        echo "✓ Secret '$secret_name' already exists"
        return 0
    fi
    
    # Prompt for secret value
    echo -n "$prompt_text: "
    read -s secret_value
    echo ""
    
    # Create the secret
    echo "$secret_value" | docker secret create "$secret_name" -
    
    if [ $? -eq 0 ]; then
        echo "✓ Secret '$secret_name' created successfully"
    else
        echo "✗ Failed to create secret '$secret_name'"
        return 1
    fi
}

# Check if Docker Swarm is initialized
if ! docker info 2>/dev/null | grep -q "Swarm: active"; then
    echo "Error: Docker Swarm is not initialized."
    echo "Please run 'docker swarm init' first."
    exit 1
fi

echo "Creating Docker secrets..."
echo ""

# Create MySQL root password secret
create_secret "mysql_root_password" "Enter MySQL root password"

# Create MySQL user password secret
create_secret "mysql_password" "Enter MySQL user password"

echo ""
echo "==================================="
echo "All secrets created successfully!"
echo "==================================="
echo ""
echo "You can now deploy the stack with:"
echo "  docker stack deploy -c docker-stack.yml driven-outcomes"
echo ""
