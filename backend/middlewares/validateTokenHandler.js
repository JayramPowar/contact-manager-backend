import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const validateTokenHandler = expressAsyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = decoded.user; // ✅ correct for your token structure
            console.log("DECODED:", decoded);

            next(); // ✅ now in proper flow
        } catch (err) {
            res.status(401);
            throw new Error("Unauthorized, invalid token");
        }
    } else {
        res.status(401);
        throw new Error("Unauthorized, no token");
    }
});

export default validateTokenHandler;