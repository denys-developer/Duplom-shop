import express from 'express';
import Laptop from "../models/Laptop";
const router = express.Router();

router.get('/', (req, res) => {
 let products:any = [];
 Laptop.find({},(err,array) => {
   array.forEach((item:any) =>{
      let obj = {
      name: item.name,
      id: item._id,
      img: item.img
      };
    products.push(obj);
   })
  res.send(products);
 });

 router.post('/', (req,res) => {
   Laptop.findById(req.body.id,(err,result) => {
     res.send(result);
   });
 });
});

module.exports = router;
