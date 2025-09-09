import express from 'express'
import Routers from './routing/ruters.js';
import crus from 'cors'


const server=express()
const PORT = 3000
server.use(express.static('public'));
server.use(crus())
server.use(express.json())
server.use("/post" ,Routers())
server.listen(PORT,()=>{
    console.log("server lisining");    
})