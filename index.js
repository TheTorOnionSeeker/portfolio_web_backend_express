const server= require('./src/app.js');
const mongoose=require('mongoose');
require('dotenv').config();
const config=require('./config')

const PORT=process.env.PORT || 3001;
/* const mongoUrl ='mongodb+srv://admin:lI44SsHEiyLVyeNq@portfoliowebcluster.ywzfwhm.mongodb.net/?retryWrites=true&w=majority'; */
/* console.log(mongoUrl); */
/* const CONNECTION_URL='mongodb+srv://mongoDBAdmin:kb2Q1tC3qt3R4vZZ@cluster0.sqkbgn9.mongodb.net/?retryWrites=true&w=majority'; */

mongoose.connect(config.db.uri,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>server.listen(PORT,()=>console.log(`Server running on port ${PORT}`)))
    .catch((error)=>console.log(error.message))



    /* const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://admin:<password>@portfoliowebcluster.ywzfwhm.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
      const collection = client.db("test").collection("devices");
      // perform actions on the collection object
      client.close();
    }); */