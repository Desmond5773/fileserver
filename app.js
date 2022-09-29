//import the express module
const express= require('express');
const app=express();


//import routes and handler from MVC files
const homeRoute= require('./Routes/homeRoute')
const deleteRoute= require('./Routes/deleteRoute')
const getContent= require('./Routes/getContentRoute')
const save= require('./Routes/saveRoute')

//set ejs as template engine
app.set('view engine', 'ejs');

//set public as directory for additional file request
app.use('/public',express.static('./public'))

//utilize node built-in middlewares to enable us parse body from request(formerly done using body parser)
app.use(express.urlencoded())
app.use(express.json())


//insert importes routes into server
app.use(homeRoute)
app.use(deleteRoute)
app.use(getContent)
app.use(save)


  app.listen(5000, ()=>console.log('server is now listening on port 5000'))

//worked
//worked again 

