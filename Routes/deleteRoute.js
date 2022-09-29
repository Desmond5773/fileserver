const express= require('express')
const router= new express.Router()

const deleteRouteController= require('../controllers/deleteRouteController')

router.delete('/delete',deleteRouteController)

  module.exports= router