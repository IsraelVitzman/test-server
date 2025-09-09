import express from 'express'
import {AddPosts} from "../controlles/add.js"
import {ReadPosts} from "../controlles/read.js"
import {DeleltePost} from "../controlles/delete.js"
import { UpdatePost } from '../controlles/update.js'

export function RouterPost(){
    const routerPost =express.Router()
    routerPost.post('/addpost',(req,res)=>{
         AddPosts(req,res,'post')
    })
    routerPost.get('/getpost',(req,res)=>{
        ReadPosts(req,res,'post')
    })
    routerPost.delete('/deletepost',(req,res)=>{
        DeleltePost(req,res,'post')
    })
    routerPost.put('/updatepost',(req,res)=>{
        UpdatePost(req,res,'post')
    })
    return routerPost
}