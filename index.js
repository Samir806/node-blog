const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const keys = require('./keys')
const route = require('./routes/posts')

const app = express()
const PORT = process.env.PORT || 3000
const clientPath = path.join(__dirname, 'client')
app.use(express.static(clientPath))
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/post', route)





const start = ()=>{
    mongoose.connect(keys.mongoURL, (err, data)=>{
        if(err){
            console.log(err);
        } else{
            console.log("Connection to db is success");
        }
    })
}

start()


app.listen(PORT, ()=>{
    console.log("server is running");
})