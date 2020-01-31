import CategoryDb from '../models/Categories';
import ProductDb from '../models/Product';
class Product {
    get categories() {
        return new Promise((resolve, reject) => {
            try {
                CategoryDb.find({}, (err, categories) => {
                    resolve(categories);
                })
            }
            catch (err) {
                resolve(err);
            }
        })
    }
    getAllProducts() {
        return new Promise((resolve, reject) => {
            try {

                ProductDb.find({}, { _id: false }).populate('phones')
                    .exec((err, products) => {
                        resolve(products);
                    })
            } catch (err) {
                resolve(err);
            }
        })
    }
    getProductDetails(id: string) {
        return new Promise((resolve, reject) => {
            try {
                resolve(id);
            }
            catch (err) {
                resolve(err);
            }
        })
    }
}
export = new Product();