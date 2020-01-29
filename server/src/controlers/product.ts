import CategoryDb from '../models/Categories';
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
}
export = new Product();