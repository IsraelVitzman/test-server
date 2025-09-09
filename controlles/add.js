import { WriteFile } from "../menegerControlles/manegerWrite.js"
export async function Add(req, res, file) {
    try {
        const { data } = req.body
        await WriteFile(data, file)
        res.status(200).json({ message: "insert succesoflly" })
    } catch (err) {
        res.status(500).json({ message: err })
        return
    }
}