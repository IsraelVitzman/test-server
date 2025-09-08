import {ReadFile} from "../../menegerControlles/manegerRead.js"

export async function ReadPosts(req,res){
    try{     
       const data = await ReadFile()
       res.json(data)
    }catch(err){
        res.JSON({message:err})
        return
    }

}