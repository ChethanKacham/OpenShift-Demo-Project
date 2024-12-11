const { urlencoded } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const url = 'mongodb://localhost/OpenShift'

const app=express()

app.use(cors())

mongoose.connect(url, {useNewUrlParser:true})
const con=mongoose.connection

con.on('open',function(){
    console.log('connected')
})

app.use(express.json())

const detailRouter = require('./routes/projectdetails')

app.use('/',detailRouter)

app.listen(9001, ()=>{
    console.log('Server started')
})