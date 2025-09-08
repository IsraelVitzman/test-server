import {ReadFile} from "../../menegerControlles/manegerRead.js"
import {WriteFile}from "../../menegerControlles/manegerWrite.js"
export async function DeleltePost(req,res){
    const  nowData= []
    try{
        const id =req.params.id
        const readData = await ReadFile()
        for (let i = 0; i < readData.length; i++) {
            if (!readData[id]===id){
                nowData.push(readData)
            }
        }
        await WriteFile(nowData)
        res.json({message:"delete succesoflly"})
    }catch(err){
         throw err
    }
            
}