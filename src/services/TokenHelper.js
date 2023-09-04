const jwt = require('jsonwebtoken');
require("dotenv").config();

exports.EncodeToken=(email)=> {
   return jwt.sign({ email: email }, process.env.JWT_SECRET, {
     expiresIn: "7d",
   });
}

exports.DecodeToken=(token)=> {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    }
    catch(err) {
        return null;
    }
}
