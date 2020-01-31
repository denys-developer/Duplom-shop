import mongoose from '../mongoose';
const laptopScheme = new mongoose.Schema({
    collectionName:String,
    name:String,
    coast:String,
    expansionDisplay: String,
    batterySize: String,
    img: String,
    os: String,
    cpu: String,
    color: String,
    videoAdapter:String,
    typeOzu:String,
    ozu:Number,
    disk:String
});
const Laptop = mongoose.model("Laptop", laptopScheme,'laptop');
export = Laptop;
