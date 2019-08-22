//importing express
let express = require('express')

//Import Body Parser
let bodyParser = require('body-parser');


//import mongoose
let mongoose = require('mongoose')

//initialize the app
let app = express();

//import routes
let apiRoutes = require("./api-routes")

//configure bodyparser to handle post request
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


//Connect to Mongoose and set connection variable
//Deprecated: mongoose.connect('mongodb://localhost/resthub');

mongoose.connect('mongodb://localhost/resthub', {
    useNewUrlParser: true
});

let db = mongoose.connection;

//Added check for db connection

(!db) ? console.log('Error connecting db') : console.log('DB connected succesfully');

//setup server port
let port = process.env.PORT || 8080

//send message for default URL
app.get('/', (req, res) => res.send('Hello World With Express and Nodemon'))


//use api routes in the App
app.use('/api', apiRoutes)



//Launch app to listen to specified port
app.listen(port, () => {
    console.log(`Running RestHub on ${port}`);
})



