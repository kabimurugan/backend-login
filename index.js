const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

app.listen(3000, ()=> console.log("server started in port:3000") )


const name = "kabilan"
const password = 123
app.post("/", (req, res)=>{
    
    if( name === req.body.name && password == req.body.password ){
        res.send(true)
    }
    else{
        res.send(false)
    }
})