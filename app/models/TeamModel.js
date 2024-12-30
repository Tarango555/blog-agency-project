import mongoose from "mongoose";

const DataSchema= new mongoose.Schema({
    name: {type: String, required: true},
    role: {type: String, required: true},
    bio: {type: String},
    profileImage: {type: String},
    socialLinks: {linkedin: { type: String }, twitter: { type: String }, github: { type: String }},
},
{
    timestamps: true,
    versionKey: false
});

const TeamModel = mongoose.model('Team', DataSchema);

export default TeamModel;