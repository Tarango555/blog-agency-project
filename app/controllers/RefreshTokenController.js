import {RefreshTokenService} from '../services/RefreshTokenService.js';

export const RefreshToken = async(req, res)=>{
    let result= await RefreshTokenService(req, res);
    return res.status(result.statusCode).json(result);
}