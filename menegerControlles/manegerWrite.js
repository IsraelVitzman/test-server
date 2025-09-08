import {writeFile} from "node:fs"

export async function WriteFile(data){
    try{
        await writeFile("..data/post.json", data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }})
    }catch(err){
         throw err
        return
    }

}