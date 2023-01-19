const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const personSchema=new Schema({
    name:String,
    image:String,
    role:String,
    education:[String],
    skills:[String],
    projects:[String]
});

module.exports=mongoose.model('Person',personSchema);