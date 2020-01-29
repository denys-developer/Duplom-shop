import config from "config";
import mongoose from "mongoose";
let Schema = mongoose.Schema;
mongoose.connect(config.get("dbUrl"), { useNewUrlParser: true },
    () => {
        console.log('db connected');
    });
export = mongoose;
