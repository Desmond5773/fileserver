const express= require('express');
const router= new express.Router()

const getContentController= require('../controllers/getContentaController')

router.post('/getContent', getContentController)

  module.exports= router