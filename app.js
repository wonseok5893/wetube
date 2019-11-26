import express from "express"; // require() 찾아서 모듈 가져와 
import morgan from "morgan";//logging middleware 또 helmet이 있음
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;
const handleListening = ()=>{
    console.log(`Listening on :http://localhost:${PORT}`);
}

const handleHome = (req,res)=>res.send('hello ');


const handleProfile = (req,res)=> res.send('Profile');

//const betweenHome = (req,res,next) =>{
//    console.log("i am between");
//    next();}

//app.use(betweenHome);//밑에  실행되는 라우팅 모두 middle ware 실행 전역적

//app.get("/",betweenHome,handleHome); 지역적 middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser);
app.use(morgan("dev"));
app.use(helmet());


app.get("/",handleHome);

app.get("/profile",handleProfile);

app.listen(PORT, handleListening);