import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const validateTokenHandler = expressAsyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;

    //* In header, it may possible that the token is sent as "Bearer YOUR_TOKEN" so we need to split it and get the token part
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                res.status(401);
                throw new Error("Unauthorized, invalid token");
            }
            req.user = decoded.user;
            console.log(decoded);
            next();
        });
    }
    if(!token){
        res.status(401);
        throw new Error("Unauthorized, no token");
    }
});

export default validateTokenHandler;