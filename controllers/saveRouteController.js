const {statSync, writeFileSync, unlinkSync}= require('fs')
const fileSearch= require('../utility/fileSearch.js')

let dirname='/Users/mac/desktop/fileserver'

function saveRouteController (req,res){
    console.log('save request received...')
    let {remoteFiles, textArea}= req.body;
    remoteFiles= fileSearch(dirname, remoteFiles).toString();
    let stats=statSync(remoteFiles);
    if(!stats.isDirectory()){
      unlinkSync(remoteFiles);
      writeFileSync(remoteFiles,textArea);
      return res.render('updateViews')
    }
    
  }

  module.exports= saveRouteController