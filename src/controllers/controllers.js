const Person=require('../models/models');
/* require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGO_URL;
const client = new MongoClient(uri, { useNewUrlParser: true });
const collection = client.db("test").collection("devices"); */

const getPerson=async ()=>{
    try {
        let person= await Person.find();
        console.log(person);
        return person;
    } catch (error) {
        console.log(error.message);
        return error;
    }
};

const createPerson = (personData) => {
    try {
        let person=Person.create(personData);
        return person;
    } catch (error) {
        console.log(error.message);
        return error;
    }
}

const updatePerson=(id,personData)=>{
    try {
        let person=Person.findByIdAndUpdate(id, { $set: personData }, { new: true });
        return person;
    } catch (error) {
        console.log(error.message);
        return error;
    }
}

const deletePerson=(id)=>{
    try {
        let person=Person.findByIdAndRemove(id);
        return person;
    } catch (error) {
        console.log(error.message);
        return error;
    }
}

/* const createPerson=(req,res)=>{
    const person=req.body;
    newPerson=new postPerson(person);
    try {
        newPerson.save();
        res.status(201).json(newPerson)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}; */

module.exports={getPerson,createPerson,updatePerson,deletePerson};