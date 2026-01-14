#!/bin/bash
# Validation script to check if the setup is correct
# Usage: ./validate-setup.sh

echo "=========================================="
echo "WordPress Docker Setup Validation"
echo "=========================================="
echo ""

# Counter for checks
PASSED=0
FAILED=0

# Function to check something
check() {
    local description=$1
    local command=$2
    
    echo -n "Checking $description... "
    if eval "$command" > /dev/null 2>&1; then
        echo "✓ PASS"
        ((PASSED++))
        return 0
    else
        echo "✗ FAIL"
        ((FAILED++))
        return 1
    fi
}

# Check Docker installation
echo "=== System Requirements ==="
check "Docker is installed" "docker --version" || true
check "Docker Compose is available" "docker compose version" || true
echo ""

# Check files
echo "=== Required Files ==="
check "docker-compose.yml exists" "test -f docker-compose.yml" || true
check "docker-stack.yml exists" "test -f docker-stack.yml" || true
check ".env.example exists" "test -f .env.example" || true
check "README.md exists" "test -f README.md" || true
echo ""

# Check theme files
echo "=== Theme Files ==="
check "Theme directory exists" "test -d wp-content/themes/driven-outcomes" || true
check "style.css exists" "test -f wp-content/themes/driven-outcomes/style.css" || true
check "functions.php exists" "test -f wp-content/themes/driven-outcomes/functions.php" || true
check "index.php exists" "test -f wp-content/themes/driven-outcomes/index.php" || true
check "header.php exists" "test -f wp-content/themes/driven-outcomes/header.php" || true
check "footer.php exists" "test -f wp-content/themes/driven-outcomes/footer.php" || true
check "single.php exists" "test -f wp-content/themes/driven-outcomes/single.php" || true
check "package.json exists" "test -f wp-content/themes/driven-outcomes/package.json" || true
check "vite.config.mjs exists" "test -f wp-content/themes/driven-outcomes/vite.config.mjs" || true
echo ""

# Check custom post type templates
echo "=== Custom Post Type Templates ==="
check "Workshop archive template" "test -f wp-content/themes/driven-outcomes/archive-workshop.php" || true
check "Workshop single template" "test -f wp-content/themes/driven-outcomes/single-workshop.php" || true
check "Promotion archive template" "test -f wp-content/themes/driven-outcomes/archive-promotion.php" || true
check "Promotion single template" "test -f wp-content/themes/driven-outcomes/single-promotion.php" || true
echo ""

# Validate Docker Compose configuration
echo "=== Configuration Validation ==="
if docker compose config > /dev/null 2>&1; then
    echo "Docker Compose config syntax... ✓ PASS"
    ((PASSED++))
else
    echo "Docker Compose config syntax... ✗ FAIL"
    ((FAILED++))
fi

# Check PHP syntax
echo ""
echo "=== PHP Syntax Check ==="
for file in wp-content/themes/driven-outcomes/*.php; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        if php -l "$file" > /dev/null 2>&1; then
            echo "PHP syntax in $filename... ✓ PASS"
            ((PASSED++))
        else
            echo "PHP syntax in $filename... ✗ FAIL"
            ((FAILED++))
        fi
    fi
done

# Check helper scripts
echo ""
echo "=== Helper Scripts ==="
check "manage.sh exists" "test -f manage.sh" || true
check "manage.sh is executable" "test -x manage.sh" || true
check "create-secrets.sh exists" "test -f create-secrets.sh" || true
check "create-secrets.sh is executable" "test -x create-secrets.sh" || true
echo ""

# Summary
echo "=========================================="
echo "Validation Summary"
echo "=========================================="
echo "Passed: $PASSED"
echo "Failed: $FAILED"
echo ""

if [ $FAILED -eq 0 ]; then
    echo "All checks passed! ✓"
    echo ""
    echo "You can now start your development environment with:"
    echo "  ./manage.sh start"
    echo ""
    echo "Or manually with:"
    echo "  docker compose up -d"
    echo ""
    exit 0
else
    echo "Some checks failed. Please review the errors above."
    exit 1
fi
