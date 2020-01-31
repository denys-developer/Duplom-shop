import mongoose from './mongoose';
import Phones from './product-Models/Mobile';
import Laptop from './product-Models/Laptop';
let Schema = mongoose.Schema;
const productScheme = new Schema({
        phones: 
            [{
                type: Schema.Types.ObjectId,
                ref: Phones
            }]
        ,
        laptop: 
            [{
                type: Schema.Types.ObjectId,
                ref: Laptop
            }]
        

});
const Product = mongoose.model("Products", productScheme);
export = Product;
