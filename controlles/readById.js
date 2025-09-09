import {ReadFile} from "../menegerControlles/manegerRead.js"

export async function ReadById(req,res,file){
    try{     
       const data = await ReadFile(file)
       for (let i = 0; i < data.length; i++) {
           if (data.id===id){
               res.json(data[id])
           }
       }
       
       res.status(200).json({message:"no found"})
    }catch(err){
        res.status(500).JSON({message:err})
        return
    }

}