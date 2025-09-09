import jwt from 'jsonwebtoken';


const SECRET = process.env.SECRET ;

export function verifyUser(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(" ")[1];
    if (!token) {
        console.log("you have not tokn");
        res.json({message:"you have not tokn"});
        return;
    }
    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            console.log(err);
            res.json({message:err});
            return
        }
        console.log(decoded.role);
        if (decoded.role !== 'user') {
            console.log("no accses is no user");
            res.json({ messege: "no accses is no user"})
            return
        }
       
        next();
    });
}

