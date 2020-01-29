import express from "express";
import cors from "cors";
import config from "config";
import bodyParser from "body-parser";
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())
app.use('/user', require('./src/routes/user'));
app.use('/product',require('./src/routes/product'));
app.listen(config.get('port'), () => {
    console.log("Server work");
});
