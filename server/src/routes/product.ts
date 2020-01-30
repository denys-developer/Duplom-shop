import express from 'express';
import product from '../controlers/product';
const router = express.Router();
router.get('/',(req,res)=>{
res.send('qdewdwed');
});
router.get('/categories', ((req, res) => {
    product.categories.then((categories) => {
        res.send(categories);
    });
}));
export = router;