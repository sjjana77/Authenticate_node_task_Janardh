const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'default_secret_key_here';


function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    // console.log(bearerToken);
    jwt.verify(bearerToken, secretKey, (err, authData) => {
      // console.log(err);
      if (err) {
        res.sendStatus(403); //Invalid Token
      } else {
        req.authData = authData; //Valid token, decoded data 
        // console.log(authData);
        next();
      }
    });
  } else {
    res.sendStatus(403);//empty token
  }
}

module.exports = verifyToken;