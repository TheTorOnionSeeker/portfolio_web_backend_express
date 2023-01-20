const express=require('express');
const cors=require('cors');
const router=require('./routes/routes.js')

const server=express();

server.use(cors());
server.use(express.json());
server.use(router);

module.exports=server;