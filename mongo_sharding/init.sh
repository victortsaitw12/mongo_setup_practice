#!/bin/bash
docker-compose up -d
sleep 60
docker-compose exec mongocfg1 sh -c "mongo --port 27023 < /scripts/init-config.js"
sleep 20
docker-compose exec mongoshard1r1 sh -c "mongo --port 27017 < /scripts/init-shard1.js"
sleep 20
docker-compose exec mongoshard2r1 sh -c "mongo --port 27020 < /scripts/init-shard2.js"
sleep 20
docker-compose exec router sh -c "mongo --port 27026 < /scripts/init-router.js"
sleep 20
docker-compose exec router sh -c "mongo --port 27026 < /scripts/test_sharding.js"
