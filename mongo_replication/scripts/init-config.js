rs.initiate(
{
  _id: "replServer",
  members: [
    {_id: 0, host: "mongorepl1:27017"},
    {_id: 1, host: "mongorepl2:27018"},
    {_id: 2, host: "mongorepl3:27019"}
  ]
}
)
