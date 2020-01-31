import mongoose from '../mongoose';
const phonesScheme = new mongoose.Schema({
    collectionName:String,
    name:String,
    coast:Number,
    expansionDisplay: String,
    frontCamera: Number,
    batterySize: Number,
    img: String,
    os: String,
    cpu: String,
    color: String
});
const Phones = mongoose.model("Phones", phonesScheme,'phones');
export = Phones;
