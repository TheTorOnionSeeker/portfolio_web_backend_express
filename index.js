const server= require('./src/app.js');
const mongoose=require('mongoose');
require('dotenv').config();
const config=require('./config')

const PORT=process.env.PORT || 3001;

mongoose.connect(config.db.uri,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>server.listen(PORT,()=>console.log(`Server running on port ${PORT}`)))
    .catch((error)=>console.log(error.message))