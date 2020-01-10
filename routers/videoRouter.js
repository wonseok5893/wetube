import express from "express";
import routes from "../routes";
import { video, videoDetail, deleteVideo, getUpload, postUpload, getEditVideo, postEditVideo } from "../controllers/videoController";
import { uploadVideo } from "../localMiddleware";

const videoRouter = express.Router();

videoRouter.get(routes.videos,video)
//upload
videoRouter.get(routes.upload,getUpload)
videoRouter.post(routes.upload, uploadVideo, postUpload)
//video Detail
videoRouter.get(routes.videoDetail(),videoDetail)
//Edit Video
videoRouter.get(routes.editVideo(),getEditVideo)
videoRouter.post(routes.editVideo(),postEditVideo)
//Delete Video
videoRouter.get(routes.deleteVideo(),deleteVideo)

export default videoRouter;