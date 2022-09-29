const {readdirSync}= require('fs')
const fileSearch= require('../utility/fileSearch.js')
const resolvePath= require('../utility/resolvePath')

let remoteFolder= readdirSync('/Users/mac/desktop/fileserver')
let dirname='/Users/mac/desktop/fileserver'
let appState= {
  backView:{remoteFolder, textArea: "contents of non-folder and readable files are displayed here..."},
  back:readdirSync(__dirname)
}

function homeaRouteController (req,res){
    let {remoteFiles}=req.body;
    if(remoteFiles==='back')return res.render('home', appState.backView)
    remoteFiles= fileSearch(dirname, remoteFiles)
    let textArea= resolvePath(remoteFiles)
    if(typeof(textArea)==='string'){
       res.render('postviews', {remoteFolder, textArea})
    }else{
      remoteFolder=textArea;
      return res.render('postviews', {remoteFolder, textArea:"contents of non-folder and readable files are displayed here..."})
    }
    
  }

  module.exports= homeaRouteController