import {ReadFile} from "../menegerControlles/manegerRead.js"

export async function Read(req,res,file){
    try{     
       const data = await ReadFile(file)
       res.json(data)
    }catch(err){
        res.status(500).json({message:err})
        return
    }

}