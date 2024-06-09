const mongoose=require("mongoose");


// uri="mongodb+srv://yashrjmourya11:9691081997@clusterapilearning.rps7tnv.mongodb.net/apilearning2?retryWrites=true&w=majority&appName=ClusterApiLearning"

const connectDB=(uri)=>{

console.log("connect db");

return mongoose.connect(uri,{

    useNewUrlParser:true,
    useUnifiedTopology:true,


});


};

module.exports= connectDB;