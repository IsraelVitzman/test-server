import express from 'express'
export function RouterUser() {
    const routerUser=express.Router()
     
    routerUser.post("/login",(req,res)=>{
            AddPosts(req,res,'user')
    })
     
}