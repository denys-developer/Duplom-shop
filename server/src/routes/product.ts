import express from 'express';
import product from '../controlers/product';
const router = express.Router();
router.get('/', (req, res) => {
    product.getAllProducts().then((products) => {
        res.send(products);
    })
});
router.post('/details', (req, res) => {
    product.getProductDetails(req.body.id).then((details) => {
        res.send(details);
    })
})
router.get('/categories', ((req, res) => {
    product.categories.then((categories) => {
        res.send(categories);
    });
}));
export = router;