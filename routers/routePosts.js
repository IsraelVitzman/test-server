import express from 'express'
import {AddPosts} from "../controlles/controlerPosts/add.js"
import {ReadPosts} from "../controlles/controlerPosts/read.js"
import {DeleltePost} from "../controlles/controlerPosts/delete.js"
import { UpdatePost } from '../controlles/controlerPosts/update.js'

export default function RouterPost(){
    const routerPost =express.Router()
    routerPost.post('/addpost',(req,res)=>{
         AddPosts(req,res)
    })
    routerPost.get('/getpost',(req,res)=>{
        ReadPosts(req,res)
    })
    routerPost.delete('/deletepost',(req,res)=>{
        DeleltePost(req,res)
    })
    routerPost.put('/updatepost',(req,res)=>{
        UpdatePost(req,res)
    })
    return routerPost
}