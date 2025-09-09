import express from 'express'
import {RouterPost}from '../routers/routePosts.js'
import multer from 'multer';


export default function Routers() {
    const uploud = multer({ storage: storge })
    const routers = express.Router()
    routers.use("/post",uploud.single('image'), RouterPost())
    routers.use("/user",) 
    return routers
}
