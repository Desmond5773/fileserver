let container= document.querySelector('html')
let remoteFiles=document.querySelector('#remoteFiles');
let jump= document.querySelector('#jump');
let remove= document.querySelector('#remove');
let put= document.querySelector('#put')
let textArea=document.querySelector('#textArea')

remove.addEventListener('click', removeHandler)
put.addEventListener('click', saveHandler)  
remoteFiles.addEventListener('change', getContent)  

function removeHandler(event){
      event.preventDefault()
      console.log(document.querySelectorAll('button'))
      let xhr= new XMLHttpRequest();
      xhr.open('DELETE', `http://localhost:5000/delete`, false)
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      xhr.onload=function(){
          container.innerHTML=this.responseText
      }

      xhr.send(`remoteFiles=${remoteFiles.value}`)
    }

 
  function saveHandler(event){
      event.preventDefault();
      let xhr= new XMLHttpRequest();
      xhr.open('PUT', 'http://localhost:5000/save', true)
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onload= function(){
          container.innerHTML=this.responseText
      }
      xhr.send(JSON.stringify({
          remoteFiles: remoteFiles.value,
          textArea: textArea.value
      }))
  }

  remoteFiles.addEventListener('change', (event)=>{
      console.log(remoteFiles.value)
  })


 function getContent(event){
     let xhr= new XMLHttpRequest();
     xhr.open('POST', 'http://localhost:5000/getContent', true);
     xhr.setRequestHeader('Content-type', 'application/json')
     xhr.onload=function(){
         textArea.value=this.responseText
     }

     xhr.send(JSON.stringify({
         remoteFiles: remoteFiles.value
     }))
 }