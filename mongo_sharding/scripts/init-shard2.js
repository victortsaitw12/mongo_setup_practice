rs.initiate({
  _id: "replServer2",
  members:[
    {_id: 0, host:"mongoshard2r1:27020"},
    {_id: 1, host:"mongoshard2r2:27021"},
    {_id: 2, host:"mongoshard2r3:27022"}
  ]
})
