use testDB
sh.enableSharding("testDB")
db.createCollection("testCollection")
sh.shardCollection("testDB.testCollection", {"testField": "hashed"})
for(var i = 0; i < 10000; i++){ db.testCollection.insert({"testField": i}) }
