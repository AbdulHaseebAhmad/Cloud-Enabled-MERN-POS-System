import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";

const COGNITO_JWKS_URL = process.env.COGNITO_JWKS_URL;

const client = jwksClient({ jwksUri: COGNITO_JWKS_URL });

const verifyJWT = (req, res, next) => {
  const token = req.headers.authorization
    ? req.headers.authorization.split(" ")[1]
    : null;

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const getKey = (header, callback) => {
    if (!header.kid) {
      return callback(new Error("Missing Key ID ('kid') in the JWT header."));
    }
    client.getSigningKey(header.kid, (err, key) => {
      if (err) {
        return callback(err);
      }
      const publicKey = key.getPublicKey();
      callback(null, publicKey);
    });
  };

  jwt.verify(token, getKey, { algorithms: ["RS256"] }, function (err, decoded) {
    if (err) {
      res.status(401).json({ message: "Invalid token" });
      return;
    }
    req.user = decoded;
    next();
  });
};

export default verifyJWT;
