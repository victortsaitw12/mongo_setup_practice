#!/bin/bash
docker-compose up -d
sleep 20
docker-compose exec mongorepl1 sh -c "mongo --port 27017 < /scripts/init-config.js"
sleep 20
docker-compose exec mongorepl1 sh -c "mongo --port 27017 < /scripts/check-status.js"
