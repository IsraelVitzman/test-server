import { readFile } from "node:fs"

export async function ReadFile(data) {
    try {
        await readFile("..data/post.json", 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            
        });
    } catch (err) {
        throw err

    }

}