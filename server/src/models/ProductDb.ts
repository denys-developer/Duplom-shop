import config from "config";
import mongoose from "mongoose";

mongoose.connect(config.get("productDbUrl"), { useNewUrlParser: true },
    () => {
        console.log('phone db connected');
    });

export  default mongoose;
