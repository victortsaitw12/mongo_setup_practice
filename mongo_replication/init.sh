#!/bin/bash
docker-compose up -d

docker-compose exec mongocfg1 sh -c "mongo --port 27017 < /scripts/init-config.js"
sleep 20
docker-compose exec mongos1 sh -c "mongo < /scripts/init-router.js"
sleep 20
docker-compose exec mongos1 sh -c "mongo < /scripts/test_sharding.js"
