import express from 'express'
import Routers from './routing/ruters.js';
const server=express()
const PORT = 3000
server.use(express.static('public'));

server.use(express.json())
server.use(Routers())
server.listen(PORT,()=>{
    console.log("server lisining");
    
})