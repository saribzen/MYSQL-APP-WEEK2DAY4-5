import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");


const verifyToken = (req : Request, res : Response, next : NextFunction) => {
    const token = req.header('Authorization');
    
    if(token){
        const decode = jwt.verify(token, process.env.JWTKEY);
        if(decode.role == "teacher"){
            next();
        }
        else{
            return res.json("ACCESS DENIED");
        }
    }
    else{
        return res.json("ACCESS DENIED");
    }
}

module.exports = {
    verifyToken
}