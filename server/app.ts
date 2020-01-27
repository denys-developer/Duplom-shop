let express = require('express');
let config = require('config');
let bodyParser = require('body-parser');
let cors = require('cors')
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())
app.use('/user',require('./src/routes/user'));

app.listen(config.get('port'),()=>{
    console.log("Server work");
})