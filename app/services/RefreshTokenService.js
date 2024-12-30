import jwt from 'jsonwebtoken';
import { CreateAccessToken } from '../utility/tokenUtility_2.js';
import { REFRESH_TOKEN_SECRET_KEY } from '../config/config.js';

export const RefreshTokenService = async (req) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return {
      statusCode: 401,
      status: 'fail',
      message: 'No refresh token provided',
    };
  }

  try {
    // Verify the refresh token
    const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET_KEY);
    
    // Generate a new access token
    const newAccessToken = CreateAccessToken(decoded.email, decoded._id);

    return {
      statusCode: 200,
      status: 'success',
      message: 'New access token generated',
      data: { accessToken: newAccessToken },
    };
  } catch (error) {
    return {
      statusCode: 403,
      status: 'fail',
      message: 'Invalid or expired refresh token',
    };
  }
};
