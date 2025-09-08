import {ReadFile} from "../../menegerControlles/manegerRead.js"

export async function ReadPosts(req,res){
    try{     
       const data = await ReadFile()
       for (let i = 0; i < data.length; i++) {
           if (data.id===id){
               res.json(data[id])
           }
       }
       
       res.json({message:"no found"})
    }catch(err){
        res.JSON({message:err})
        return
    }

}