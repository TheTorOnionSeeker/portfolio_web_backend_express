const Person=require('../models/models');

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

module.exports={getPerson,createPerson,updatePerson,deletePerson};