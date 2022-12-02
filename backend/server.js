const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")

const DB_URL = "mongodb+srv://fpanda:fpanda@cluster0.gzuk5c6.mongodb.net/lab?retryWrites=true&w=majority"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use("/api/", apiRoutes)

app.get('/', (req, res) => {
    res.send("<h1>Welcome to the assignment project</h1>");
});


app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});