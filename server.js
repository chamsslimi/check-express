const { application } = require('express')
const express = require('express')
const server = express()
const date = new Date();
const logger = (req,res,next) => {     const date = new Date();     
  if (       date.getDay() === 0    ||    date.getDay() === 6   ||     date.getHours() < 9 ||       date.getHours() > 17     )
   {res.sendFile(__dirname + "/public/closed.html");} else next();   }
server.use(logger);
server.use(express.static("public"))

server.get("/css/style.css",logger, (req, res) => {
    res.sendFile(__dirname+ "/public/css/style.css")
  })
 
  server.get("/images/single_service_01.jpg",logger, (req, res) => {
    res.sendFile(__dirname+ "/public/images/single_service_01.jpg")
  })
  server.get("/images/figure.jpg",logger, (req, res) => {
    res.sendFile(__dirname+ "/public/images/figure.jpg")
  })
  server.get("/images/client-01.png",logger, (req, res) => {
    res.sendFile(__dirname+ "/public/images/client-01.png")
  })
  server.get("/images/down.jpg",logger, (req, res) => {
    res.sendFile(__dirname+ "/public/images/down.jpg")
  }) 
  server.get("/images/just.jpg",logger, (req, res) => {
    res.sendFile(__dirname+ "/public/images/just.jpg")
  })
server.get("/contact",logger, (req, res) => {
    res.sendFile(__dirname+ "/public/contactus.html")
  })
  server.get("/",logger, (req, res) => {
    res.sendFile(__dirname+ "/public/homepage.html")
  })
  server.get("/services",logger, (req, res) => {
    res.sendFile(__dirname+ "/public/ourservices.html")
  })    
  const port = 5000 ; 
server.listen(port,err=>
    err ? console.log(err):console.log(`the server is started on port ${port} `))