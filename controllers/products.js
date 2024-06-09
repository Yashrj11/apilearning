const product = require("../models/product");
const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const myData = await Product.find(req.query);

  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  const { company, name , featured ,sort,select} = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;

    }
    
    if(featured){

      queryObject.featured=featured;
    }
    
    if(name){
      
      queryObject.name={$regex:name,$options:"i"};//////regex se case insensitive wala kaam krta h
      
      }


      let apiData=Product.find(queryObject);

      if(sort){
//let sortFix=sort.replace(" ," , " ");
let sortFix=select.split(",").join(" ")      ;

apiData=apiData.sort(sortFix);

      }



      

      if(select){
       // let selectFix=select.replace(" ," , " ");
        let selectFix=select.split(",").join(" ")      ;
        apiData=apiData.select(selectFix);
        
              }





              let page= Number(req.query.page) || 1;
              let limit=Number(req.query.limit) || 3;
              let skip=(page -1 )*limit;

              apiData=apiData.skip(skip).limit(limit);
        
      console.log(queryObject);
      
  //  const //myData=await Product.find({company:"apple"});
  const myData = await apiData;////sort me field ka naam,descend k liye  use -(minus )
  //const myData = await Product.find(queryObject).sort("price")...
 //////req.query se direct chrome me bhi ?= se search kara skte h

  // console.log("~ file:product.js ~line 10 ~ getallproductstesting ~ req.query", req.query);
     res.status(200).json({ myData,nbHits:myData.length });//////nbHits se total number of data mil jayga
};

module.exports = { getAllProducts, getAllProductsTesting };
