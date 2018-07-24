rs.initiate(
{
  _id: "configServer",
  configsvr:true,
  members: [
    {_id: 0, host: "mongocfg1:27017"},
    {_id: 1, host: "mongocfg2:27017"}
  ]
}
)
