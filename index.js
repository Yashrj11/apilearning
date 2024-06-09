require("dotenv").config();



const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

const connectDB=require("./db/connect");


const products_routes=require("./routes/products");


app.get("/", (req, res) => {
  res.send("hi am live");
});



///middleware or to set router

app.use("/api/products", products_routes);/////yeh direct chalwa deta h.... aage naam likhoo ,,piche route ka path do

const start = async () => {

    try {



      await connectDB(process.env.MONGODB_URL);
      app.listen(PORT, () => {
      console.log("server started at 5000");
    });
  } 
  
  catch (error) {
    console.log(error);
  }
};

start();