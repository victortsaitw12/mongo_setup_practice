#!/bin/bash
docker-compose up -d

docker-compose exec mongoConfig1 -c "mongo --port 27017 < /scripts/init-config.js"
sleep 20
docker-compose exec router sh -c "mongo --port 27017 < /scripts/init-router.js"
sleep 20
docker-compose exec router sh -c "mongo --port 27017 < /scripts/test_sharding.js"
