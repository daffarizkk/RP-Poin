let express = require('express')
let apiRoutes = require("./api-routes")
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let mongooseMorgan = require('mongoose-morgan')

app.use(mongooseMorgan({
    connectionString: 'mongodb://localhost:27017/logs-db'
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true});
var db = mongoose.connection;

var port = process.env.PORT || 8080

app.use('/api', apiRoutes)

app.get('/', (req, res) => res.send('Hi!'));
app.listen(port, function () {
    console.log("Server Running on " + port);
});
