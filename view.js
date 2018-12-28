// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var express = require('express');
var models  = require('./models');
  
var Catalogo = require('./views/catalog.js');


var addToList = document.querySelector('#add-to-list');
var catComponent = document.getElementById('catalogo');

var catView = new Catalogo(catComponent);

addToList.addEventListener("click",() =>{
      
      let principalModel = catView.getValue();
      models.Producto.create(/*{
                descripcion : desc,
                codigo : codigo,
                precioActual : precio
      }*/ principalModel).then(function (models){
          console.log("item create with id:"+models);
      });

      });


/**
function loadAndDisplayContacts() {  
   
   //Check if file exists
   if(fs.existsSync(filename)) {
      let data = fs.readFileSync(filename, 'utf8').split('\n')
      
      data.forEach((contact, index) => {
         let [ name, email ] = contact.split(',')
         console.log({name,email});
      })
   
   } else {
      console.log("File Doesn\'t Exist. Creating new file.")
      fs.writeFile(filename, '', (err) => {
         if(err)
            console.log(err)
      })
   }
};

loadAndDisplayContacts();


**/