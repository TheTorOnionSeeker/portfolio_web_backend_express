const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const personSchema=new Schema({
    name:String,
    image:String,
    role:String,
    education:[String],
    hard_skills:[String],
    percentage_hard_skills:[Number],
    soft_skills:[String],
    languages:[String],
    projects:[String]
});

module.exports=mongoose.model('Person',personSchema);