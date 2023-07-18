const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const locationRoutes = require("./routes/location-routes")

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  
    next();
  });

app.use("/api/location", locationRoutes);

mongoose.connect(`mongodb+srv://dashincodes:RKMoKCrGHzWxgSFM@serverlessinstance0.xiyynfo.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    app.listen( 4000, () => {
        console.log("app running")
    });
  })
  .catch((err) => {
    console.log(err);
  });