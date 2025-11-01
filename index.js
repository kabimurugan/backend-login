const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

// ✅ Render gives a dynamic port, fallback 3000 for local testing
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`✅ Server started on port: ${PORT}`))

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