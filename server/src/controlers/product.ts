import CategoryDb from '../models/Categories';
// import Product from '../models/Product'
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
    get products(){
        return new Promise((resolve,reject)=>{

        })
    }
}
export = new Product();