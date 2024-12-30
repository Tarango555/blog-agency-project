import AdminLoginModel from '../models/AdminLoginModel.js';
import jwt from "jsonwebtoken";
import BlacklistModel from '../models/BlacklistModel.js';
import { 
  CreateAccessToken, 
  CreateRefreshToken, 
  StoreRefreshTokenInCookie 
} from '../utility/tokenUtility_2.js';

export const AdminLoginService = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if admin exists
      const admin = await AdminLoginModel.findOne({ email });
      if (!admin) {
        return {
          statusCode: 404,
          status: 'fail',
          message: 'Admin not found',
        };
      }
  
      // Check if password matches
      const isMatch = await admin.matchPassword(password);
      if (!isMatch) {
        return {
          statusCode: 401,
          status: 'fail',
          message: 'Invalid credentials',
        };
      }
  
      // Generate Access and Refresh Tokens
      const accessToken = CreateAccessToken(admin.email, admin._id);
      const refreshToken = CreateRefreshToken(admin.email, admin._id);
  
      // Store Refresh Token in a secure HTTP-only cookie
      StoreRefreshTokenInCookie(res, 'refreshToken', refreshToken); // Use req.res to access the response object
  
      return {
        statusCode: 200,
        status: 'success',
        message: 'Login successful',
        data: {
          accessToken,
          refreshToken,
          admin: {
            id: admin._id,
            email: admin.email,
            role: admin.role,
          },
        },
      };
    } catch (error) {
      return {
        statusCode: 500,
        status: 'fail',
        message: error.toString(),
      };
    }
};

export const AdminProfileService = async (email) => {
    try {
      const admin = await AdminLoginModel.findOne({ email }, '-password'); // Exclude password from returned object
      if (!admin) {
        return { statusCode: 404, status: "fail", message: "Admin not found" };
      }
      return {
        statusCode: 200,
        status: "success",
        message: "Admin profile retrieved successfully",
        data: admin
      };
    } catch (err) {
      return { statusCode: 500, status: "fail", message: err.toString() };
    }
};

export const UpdateAdminProfileService = async (email, updateData) => {
  try {
    const updatedAdmin = await AdminLoginModel.findOneAndUpdate(
      { email },
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedAdmin) {
      return { statusCode: 404, status: "fail", message: "Admin not found" };
    }
    return {
      statusCode: 200,
      status: "success",
      message: "Admin profile updated successfully",
      data: updatedAdmin
    };
  } catch (err) {
    return { statusCode: 400, status: "fail", message: err.toString() };
  }
};

export const AdminLogoutService = async (req) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header
    if (token) {
      const decoded = jwt.decode(token); // Decode to get token expiration
      
      await BlacklistModel.create({
        token: token,
        expiresAt: new Date(decoded.exp * 1000), // JWT expiry is in seconds
      });
    }

    // Clear the refresh token cookie
    return {
      statusCode: 200,
      status: "success",
      message: "Logged out successfully",
    };
  } catch (error) {
    return {
      statusCode: 500,
      status: "fail",
      message: "Logout failed: " + error.toString(),
    };
  }
};
