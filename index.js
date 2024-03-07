const express = require('express')
const app = express()



app.get('/', function (req, res) {
  res.json(
    {
        message:"ok",
        data:  
        {name:"kunal"}
        
    }
  )
})

app.listen(3000,() => console.log('server is running on port 3000'))