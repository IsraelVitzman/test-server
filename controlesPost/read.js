import { CreateConection } from '../connectToDB/creatConnectMDB.js';



export async function Read(req, res) {
    let clientClose
    try { 
        const { client, collection } = await CreateConection('posts')
        clientClose = client;
        const result = await collection.find().toArray();
        res.status(200).json(result);
    } catch (err) {
        console.error('invalid eroor /read/:', err);
        res.status(500).json({message:err.message});
    }
    finally {
        if (clientClose)
            await clientClose.close()
    }

}
