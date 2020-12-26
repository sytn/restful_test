const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser'); /*POST REQ YAPMAK İÇİN GEREKİ. BU KULLANILMAZSA POST
EDILEN VERILER UNDEFINED OLARAK GORUNUR.*/
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json()); // BODY-PARSER REQ'LERDEN ONCE KULLANILMALIDIR.
//import routes
const postsRoute = require("./routes/posts");
const usersRoute = require("./routes/users");
const homeRoute = require("./routes/home");
//Middleware
app.use('/posts', postsRoute);
app.use('/users', usersRoute);
app.use('/', homeRoute);


//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true,  useUnifiedTopology: true  },() => {
    console.log("Connected to db");
})
//HOW TO LISTEN TO THE SERVER?
app.listen(3000);