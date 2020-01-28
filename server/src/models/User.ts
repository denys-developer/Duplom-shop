import mongoose from './mongoose';
const userScheme = new mongoose.Schema({
    firstName:String,
    lastName:String,
    password: String,
    email: String
});
const User = mongoose.model("Users", userScheme);
export = User;
