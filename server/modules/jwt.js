require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.secretKey = process.env.SECRET_KEY || "anykey";

module.exports.protect = (req, res, next) => {
    const secretKey = process.env.SECRET_KEY || "anykey";
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({status: false, msg: "no token provided"});

    // verify the token
    jwt.verify(token, secretKey, (err, decoded) => {
        if ( err ) return res.status(403).json({status: false, msg: "failed to authorize"})

        req.user = decoded;
        next()
    })
}