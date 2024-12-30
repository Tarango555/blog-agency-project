import {
    AdminLoginService,
    AdminProfileService,
    UpdateAdminProfileService,
    AdminLogoutService
} from '../services/AdminService.js';

export const AdminLogin = async (req, res) => {
    try {
        let result = await AdminLoginService(req, res);
        return res.status(result.statusCode).json(result);
    } catch (err) {
        return res.status(500).json({ status: "fail", message: err.toString() });
    }
};

export const AdminProfile = async (req, res) => {
  try {
    const result = await AdminProfileService(req.user.email); // Email from token
    return res.status(result.statusCode).json(result);
  } catch (err) {
    return res.status(500).json({ status: "fail", message: err.toString() });
  }
};

export const UpdateAdminProfile = async (req, res) => {
  try {
    const result = await UpdateAdminProfileService(req.user.email, req.body);
    return res.status(result.statusCode).json(result);
  } catch (err) {
    return res.status(500).json({ status: "fail", message: err.toString() });
  }
};

export const AdminLogout = async (req, res) => {
  try {
    const result = await AdminLogoutService(req, res); // Pass both request and response
    return res.status(result.statusCode).json(result);
  } catch (err) {
    return res.status(500).json({ status: "fail", message: err.toString() });
  }
};
