import StudentProfilesModel from "../models/StudentProfilesModel.js";

export const CreateProfileService= async(req)=>{
    try {

        let profileData = await StudentProfilesModel.create(req.body);

        return {
            statusCode: 200,
            status: "Success",
            message: "Profile Created Successfully",
            data: profileData
        };
    }
    catch(err){
        return {
            statusCode: 400,
            status: "Fail",
            message: err.toString()};
    }
};