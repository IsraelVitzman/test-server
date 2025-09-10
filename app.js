import express from 'express'
import { RouterPosts } from './router/routerPosts.js'

import cors from "cors";


const PORT = process.env.PORT || 3000;
const server = express()

server.use(express.json())

server.use(cors());
server.use('/post', RouterPosts())


server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});