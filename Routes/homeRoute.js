const express= require('express')
const Router= express.Router
const router= new Router();
const {readdirSync}= require('fs')

const homeaRouteController= require('../controllers/homeRouteController')


let remoteFolder= readdirSync('/Users/mac/desktop/fileserver')
let appState= {
  backView:{remoteFolder, textArea: "contents of non-folder and readable files are displayed here..."},
  back:readdirSync(__dirname)
}



router.get('/home',(req, res)=>{
  res.render('home', appState.backView)
  })

  router.post('/home', homeaRouteController)

  module.exports= router

