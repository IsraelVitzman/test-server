import {ReadFile} from "../menegerControlles/manegerRead.js"
import {WriteFile}from "../menegerControlles/manegerWrite.js"

export async function Update(req,res,file){
    try{
        const id =req.params.id
        const {data} =req.body
        const readData = await ReadFile(file)
        const nowData= readData.map((elemnt)=>{
           if (elemnt.id===id){
              elemnt[id]=data
           }
        })
        await WriteFile(nowData)
        res.status(200).json({message:"updete succesoflly"})
    }catch(err){
        res.status(500).json({message:err})
         throw err
    }
            
}