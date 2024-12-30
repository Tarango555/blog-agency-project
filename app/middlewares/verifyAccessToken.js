import BlacklistModel from '../models/BlacklistModel.js';
import { TokenDecode } from '../utility/tokenUtility_2.js';

export const verifyAccessToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ status: "fail", message: "Access token missing" });
  }

  const token = authHeader.split(' ')[1];

  // Check if the token is blacklisted
  const blacklisted = await BlacklistModel.findOne({ token });
  if (blacklisted) {
    return res.status(401).json({ status: "fail", message: "Access token has been invalidated" });
  }

  const decoded = TokenDecode(token);
  if (decoded.error) {
    return res.status(401).json({ status: "fail", message: decoded.error });
  }

  req.user = decoded; // Attach the decoded token payload to the request
  next(); // Proceed to the next middleware/controller
};
