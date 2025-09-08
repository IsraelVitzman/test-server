import {ReadFile} from "../../menegerControlles/manegerRead.js"
import {WriteFile}from "../../menegerControlles/manegerWrite.js"
export async function UpdatePost(req,res){
    try{
        const id =req.params.id
        const {data} =req.body
        const readData = await ReadFile()
        const nowData= readData.map((elemnt)=>{
           if (elemnt.id===id){
              elemnt[id]=data
           }
        })
        await WriteFile(nowData)
        res.json({message:"updete succesoflly"})
    }catch(err){
         throw err
    }
            
}