const express= require('express');
const mongoose= require('mongoose');
const app=express();


const url= "mongodb://localhost:27017/samplestwo";
mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const studentrouter= require("./route/students");
app.use('/students',studentrouter)

const port=8080;
app.listen(port, () =>{
    console.log('Server started');
})


