import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())
app.use('/user',require('./src/routes/user'));

app.listen(8080,()=>{
    console.log("Server work");
});
