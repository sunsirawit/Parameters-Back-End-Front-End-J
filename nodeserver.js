const express = require('express'); //install express: Terminal >npm install express --save
const req = require('express/lib/request');
const app = express()
const port = 8080
 
//Define Variables
var id = 65140322;
var status = "Single";
//Add Variables
var user_list = [
    { name: "Nester", address: "BKK", birth_year: 2003},
    { name: "Annie", address: "PKT", birth_year: 1999},
    { name: "Winner", address: "CNX", birth_year: 2022}
];
 
//Add Feature Bar Variables
var feature = [
    {img : "images/programming.jpg", 
    top : "Programming Courses", 
    bottom : "Enjoy Coding and Playing HTML, CSS, JavaScript <^v^>"},
 
    {img : "images/aiot.jpg",
    top : "AIoT and Robotics Course",
    bottom : "Enjoy Coding and Playing Python, ROS, Mechanics <^v^>"}
]
 
//Add Content Fonts
var contentfont1 = "ONLINE CREATIVE WEBSITE"
var contentfont2 = "Presented by Aj. NesT the Series"
 
//Set &amp; Call EJS
app.set('view engine','ejs')
 
//Connect public folder
app.use(express.static('public'))
 
//Back-End NodeJS Display
app.get("/hello",(req,res) =>{
    res.send("Hello NodeJS Test!")
}) 
 
//New Font-End EJS Show HTML Display
app.get("/",(req,res) =>{
    res.render('index', {userid : id, status : status, 
        obj_user_list : user_list})
})
 
//Connect index2.ejs
app.get("/index2",(req,res) =>{
    res.render('index2', {obj_feature : feature, 
        contentfont1 : contentfont1, 
        contentfont2 : contentfont2})
})
 
//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})