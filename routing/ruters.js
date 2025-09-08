import express from 'express'
import routerPost from '../routers/routePosts.js'

export default function Routers(){

    const routers =express.Router()
    routers.use("/post", routerPost())
    
    return routers
}
