import { Router } from "express";
import AmazonCognitoIdentity from "amazon-cognito-identity-js";
import { config as configDotenv } from "dotenv";
import AWS from "aws-sdk";
configDotenv();

const userRouter = Router();

AWS.config.update({ region: process.env.AWS_REGION });

const poolData = {
  UserPoolId: process.env.COGNITO_USER_POOL_ID,
  ClientId: process.env.COGNITO_CLIENT_ID,
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

userRouter.post("/api/authenticate/signup", (req, res) => {
  const { username, password, email } = req.body;
  const attributeList = [
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "email",
      Value: email,
    }),
  ];

  userPool.signUp(username, password, attributeList, null, (err, result) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ message: "User signed up!", user: result.user });
  });
});

userRouter.post("/api/authenticate/login", (req, res) => {
  const { username, password } = req.body;
    //console.log(username, password)
  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
    {
      Username: username,
      Password: password,
    }
  );

  const userData = {
    Username: username,
    Pool: userPool,
  };
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (result) => {
      res.json({ token: result.getIdToken().getJwtToken() });
    },
    onFailure: (err) => {
      res.status(400).json({ error: err.message });
    },
  });
});

export default userRouter;
