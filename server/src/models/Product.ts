import mongoose from './mongoose';
const productScheme = new mongoose.Schema({
    name: String,
    coast: String,
    img: String,
});
const Product = mongoose.model("Users", productScheme);
export = Product;
