import mongoose from "mongoose";

const DataSchema= new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    iconUrl: {type: String},
},
{
    timestamps: true,
    versionKey: false
});

const ServiceModel = mongoose.model('Service', DataSchema);

export default ServiceModel;