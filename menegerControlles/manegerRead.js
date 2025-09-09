import { readFile } from "node:fs"

export async function ReadFile(file) {
    try {
        await readFile(`..data/${file}.json`, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            return data
        });
    } catch (err) {
        throw err
    }

}