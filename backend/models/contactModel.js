import mongoose from  "mongoose";

const contactSchema = mongoose.Schema({

    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name:{
        type: String,
        required: [true, "Please enter your name"],
    },
    email:{
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
    },
    phone:{
        type: String,
        required: [true, "Please enter your phone number"],
        unique: true,
    },
},{
    timestamps: true,
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;