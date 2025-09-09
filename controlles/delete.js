import { ReadFile } from "../menegerControlles/manegerRead.js"
import { WriteFile } from "../menegerControlles/manegerWrite.js"
export async function Delelte(req, res) {
    const nowData = []
    try {
        const id = req.params.id
        const readData = await ReadFile(file)
        for (let i = 0; i < readData.length; i++) {
            if (!readData[id] === id) {
                nowData.push(readData)
            }
        }
        await WriteFile(nowData,file)
        res.status(200).json({ message: "delete succesoflly" })
    } catch (err) {
        res.status(500).json({ message: err })
        return
    }

}