const fileSearch= require('../utility/fileSearch.js')
const {statSync, rmdirSync, unlink}= require('fs')

let dirname='/Users/mac/desktop/fileserver'

function deleteRouteController(req,res){
    console.log('delete request received')
    let {remoteFiles}= req.body
    remoteFiles= fileSearch(dirname, remoteFiles).toString()
    let stats= statSync(remoteFiles)
    if(stats.isDirectory()){
      rmdirSync(remoteFiles, {recursive: true, force: true})
      return res.render('deleteView')
    }else{
      unlink(remoteFiles,()=>{
        console.log('file deleted...')
      })
      return res.render('deleteView')
    } 
   
  }

  module.exports=deleteRouteController