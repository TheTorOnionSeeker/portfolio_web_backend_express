const {Router}=require('express');
const {getPerson, createPerson, updatePerson, deletePerson}=require('../controllers/controllers')

const apiRouter=Router();

apiRouter.get('/person/details',(req,res)=>{
    getPerson()
    .then((pers)=>{
        res.status(200).json(pers);
    })
    .catch((error=>{
        res.status(404).json({error:error.message});
    }))
})

apiRouter.post('/person/create',(req,res)=>{
    let pers=req.body;
    createPerson(pers)
    .then((pers)=>{
        res.status(201).json({personCreated:pers});
    })
    .catch((error)=>{
        res.status(400).json({error:error.message});
    })
})

apiRouter.post('/person/update',(req,res)=>{
    let {id}=req.body;
    let personData=req.body;
    if(id!=="63c98dc07e77e43ca8404262"){
        updatePerson(id,personData)
        .then((pers)=>{
            res.status(200).json({personUpdated:pers});
        })
        .catch((error)=>{
            res.status(400).json({error:error.message});
        })
    }
})

apiRouter.post('/person/delete',(req,res)=>{
    let {id}=req.body;
    if(id!=="63c98dc07e77e43ca8404262"){
        deletePerson(id)
        .then((pers)=>{
            res.status(200).json('Success. Person deleted');
        })
        .catch((error)=>{
            res.status(400).json({error:error.message});
        })
    }
})


module.exports=apiRouter;