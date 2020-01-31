import mongoose from './mongoose';
import Phones from './Mobile';
let Schema = mongoose.Schema;
const productScheme = new Schema({
    phones: [{
        type: Schema.Types.ObjectId,
        ref: Phones
    }]
});
const Product = mongoose.model("Products", productScheme);
export = Product;
