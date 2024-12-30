import mongoose from "mongoose";

const DataSchema= new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
    status: {type: String, enum: ['new', 'resolved'], default: 'new'},
},
{
    timestamps: true,
    versionKey: false
});

const ContactModel = mongoose.model('Contact', DataSchema);

export default ContactModel;