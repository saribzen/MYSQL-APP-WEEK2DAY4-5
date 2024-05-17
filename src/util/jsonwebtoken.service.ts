const jwt = require("jsonwebtoken");

const createToken = (email : String, role : String) => {
    const token = jwt.sign( 
        {email: email, role: role },
        process.env.JWTKEY,
        { expiresIn: "1h" }
    )

    return token;
}



module.exports = {createToken};