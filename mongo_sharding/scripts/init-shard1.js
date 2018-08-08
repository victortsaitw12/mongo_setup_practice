rs.initiate({
  _id: "replServer1",
  members:[
    {_id: 0, host:"mongoshard1r1:27017"},
    {_id: 1, host:"mongoshard1r2:27018"},
    {_id: 2, host:"mongoshard1r3:27019"}
  ]
})
