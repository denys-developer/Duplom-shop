import db from './ProductDb';

var Schema = db.Schema;

var laptopSchema = new Schema({
  name: String,
  coast: String,
  img: String,
  cpu: String,
  ozu:String,
  os: String,
  color: String,
  hd:String
  });

var Laptop = db.model('laptop', laptopSchema);

export default Laptop;
