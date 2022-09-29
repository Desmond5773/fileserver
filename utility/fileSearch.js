const { resolve }= require('path');
const { readdirSync, statSync }= require('fs');

function fileSearch(dir, name){
    let keyword= new RegExp(name)
    let directoryFiles= readdirSync(dir);
    for(let member of directoryFiles){
        let file= resolve(dir, member)
        let stats= statSync(file);
        if(keyword.test(member)){
            return file
        }else if(member==='node_modules'){
          continue
        }else if(stats.isDirectory()){
            let newAdditions= readdirSync(file)
            newAdditions=newAdditions.map((addition)=>{
                addition= member+ "/"+ addition
                return addition
            })
            directoryFiles.push(...newAdditions)
        }
    }
}



module.exports= fileSearch

//fileSearch is an utility function that traverses a set directory for a file. it takes in two...
//parameters; the directory it is to traverse and the file it is to search for