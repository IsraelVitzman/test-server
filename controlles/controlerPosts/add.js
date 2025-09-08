import { WriteFile } from "../../menegerControlles/manegerWrite.js"
export async function AddPosts(req, res) {
    try {
        const { data } = req.body
        await WriteFile(data)
        res.json({ message: "insert succesoflly" })
    } catch (err) {
        res.JSON({ message: err })
        return
    }

}