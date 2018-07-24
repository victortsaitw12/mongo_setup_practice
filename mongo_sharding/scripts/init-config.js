rs.initiate(
{
  _id: "shardConfigs",
  configsvr:true,
  members: [
    {_id: 0, host: "mongoConfig1:27017"},
    {_id: 1, host: "mongoConfig2:27017"}
  ]
}
)
