import routes from "../routes";
import Video from "../models/Video";

export const home = async(req,res)=> {
    try{
    const videos = await Video.find({});
}
    catch (error){
    console.log(error); 
    res.render("home", {pageTilte:"Home", videos:[]});
}
}
export const search = (req,res)=> {
    const {
        query:{term:searchingBy}
}= req;
    res.render("search", {pageTitle: "Search",searchingBy, videos});
}
export const video = (req,res)=> {
    res.render("video", {pageTitle: "Video"});
}
export const getUpload = (req,res)=> {
    res.render("upload", {pageTitle: "Upload"});
}
export const postUpload = (req,res)=> {
    const {
        body:{file,title,description}
        }=req;
        //할일 비디오 생성시 생성되는 id
    
    console.log(body);
    //res.redirect(routes.videoDetail(321313));
}

export const videoDetail = (req,res)=>{
     res.render("videoDetail", {pageTitle: "Video Detail"});
}
export const editVideo = (req,res)=>{
     res.render("editVideo", {pageTitle: "Edit Video"});
}
export const deleteVideo= (req,res)=>{
     res.render("deleteVideo", {pageTitle: "Delete Video"});
}
