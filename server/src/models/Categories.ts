import mongoose from './mongoose';
const categorySchem = new mongoose.Schema({
    name: String
});
const Category = mongoose.model("Categories", categorySchem);
export = Category;
