import express from 'express';

import { Read } from "../controlesPost/read.js";
import { Add } from "../controlesPost/add.js";
import { Update } from "../controlesPost/update.js";
import { Delete } from "../controlesPost/dalete.js";



export function RouterPosts() {
  const router = express.Router();
  
  
  router.post('/addpost',  (req, res) => {
    Add(req, res);

  });

  router.delete('/deletepost:id', (req, res) => {
    Delete(req, res);

  });

  router.put('/updatepost/:id',  (req, res) => {
    Update(req, res);

  });

  router.get('/getAllpost', (req, res) => {
    Read(req, res);

  });
 
  return router

}

