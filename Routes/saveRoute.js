const express= require('express');
const app=express();
const router= new express.Router()

const saveRouteController= require('../controllers/saveRouteController')

 router.put('/save', saveRouteController)

  module.exports= router