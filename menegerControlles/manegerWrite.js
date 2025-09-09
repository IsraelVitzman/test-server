import {writeFile} from "node:fs"

export async function WriteFile(data,file){
    try{
        await writeFile(`..data/${file}.json`, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }})
    }catch(err){
         throw err
       
    }

}