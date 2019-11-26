const express = require('express'); // require() 찾아서 모듈 가져와 
const app = express();
const PORT = 4000;
const handleListening = ()=>{
    console.log(`Listening on :http://localhost:${PORT}`);
}

function handleHome(req,res){
    console.log(req);
    res.send('hello ');
}

function handleProfile(req,res){
    res.send('Profile');
}
app.get("/",handleHome);
app.get("/profile",handleProfile);

app.listen(PORT, handleListening);