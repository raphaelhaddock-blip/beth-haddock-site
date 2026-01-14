#!/bin/bash
set -e

echo "=== BETH HADDOCK SITE INIT ==="
echo "Timestamp: $(date)"

# DEPENDENCIES
echo ">> Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
else
    echo "Dependencies already installed"
fi

# KILL ANY EXISTING DEV SERVERS
echo ">> Cleaning up old processes..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# START DEV SERVER (background)
echo ">> Starting development server..."
npm run dev &
DEV_PID=$!
echo "Dev server PID: $DEV_PID"

# WAIT FOR SERVER
echo ">> Waiting for server to be ready..."
for i in {1..30}; do
    if curl -s http://localhost:3000 > /dev/null 2>&1; then
        echo "Server is ready!"
        break
    fi
    echo "Waiting... ($i/30)"
    sleep 1
done

# HEALTH CHECK
echo ">> Running health check..."
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000)
if [ "$HTTP_CODE" = "200" ]; then
    echo "Health check passed (HTTP $HTTP_CODE)"
else
    echo "Health check failed (HTTP $HTTP_CODE)"
    exit 1
fi

echo "=== INIT COMPLETE ==="
echo "Dev server running at http://localhost:3000"
