const {readFileSync, statSync}= require('fs')
const fileSearch= require('../utility/fileSearch.js')

let dirname='/Users/mac/desktop/fileserver'

function getContentController (req,res){
    let {remoteFiles}= req.body
    if(remoteFiles==='back')  return res.send('contents of non-folder and readable files are displayed here...')
    remoteFiles= fileSearch(dirname, remoteFiles)
    let stats=statSync(remoteFiles);
    if(stats.isDirectory()){
      res.send('contents of non-folder and readable files are displayed here...')
    }else{
      res.send(readFileSync(remoteFiles))
    }

  }

  module.exports= getContentController