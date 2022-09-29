const {resolve}= require('path')
const {statSync, readdirSync, readFileSync}= require('fs')

function resolvePath(fileName){
    let path= resolve(fileName);
    let stats= statSync(path);
    if(stats.isDirectory()){
     let result= readdirSync(path);
     return result
    }else{
      let result= readFileSync(path).toString();
      return result
    }
  }

  module.exports=resolvePath