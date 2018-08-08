rs.initiate(
{
  _id: "config",
  configsvr:true,
  members: [
    {_id: 0, host: "mongocfg1:27023"},
    {_id: 1, host: "mongocfg2:27024"},
    {_id: 2, host: "mongocfg3:27025"}
  ]
}
)
