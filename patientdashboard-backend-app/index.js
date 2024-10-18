require('dotenv').config() // 1.Loads .env file contents into process.env by default.

//2 import express
const express=require('express')
// 3.import cors
const cors =require('cors')
// 7.import db
const db = require('./DB/connection')
// 8.import router
const router =require('./Routes/router')

// 4. create a appliction using express
const htserver =express()
// 5.use
htserver.use(cors())
htserver.use(express.json())//middleware

htserver.use(router)


//6. port creation
const PORT =4000 || process.env.PORT

htserver.listen(PORT,()=>{
    console.log('health Server listening on port '+PORT);
})

htserver.get('/',(req,res)=>{
    res.send('welcome to healthcare')
})