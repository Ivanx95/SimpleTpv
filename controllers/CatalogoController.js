// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var express = require('express');
var models  = require('./models');
  
var Catalogo = require('./views/Catalogo/CatalogView.js');


var addToList = document.querySelector('#add-to-list');
var catComponent = document.getElementById('catalogo');

var catView = new Catalogo(catComponent);

addToList.addEventListener("click",() =>{
      
      let principalModel = catView.getValue();
      models.producto.create(/*{
                descripcion : desc,
                codigo : codigo,
                precioActual : precio
      }*/ principalModel).then(function (models){
          console.log("item create with id:"+models);
      });

      });



var tableCat = document.querySelector('#catalogo-table');


function loadAndDisplayCatalogo() {  
   models.producto.findAll().then((models) => {

        models.forEach(function(values){
            console.log(values.dataValues);
             var row =   tableCat.insertRow(tableCat.rows.length);

             var cell1 = row.insertCell(0);
             var cell2 = row.insertCell(1);
             var cell3 = row.insertCell(1);

             var descNode  = document.createTextNode(values.dataValues.descripcion);
             cell1.appendChild(descNode);

             var codNode  = document.createTextNode(values.dataValues.codigo);
             cell2.appendChild(codNode);

             var precioNode  = document.createTextNode(values.dataValues.precioActual);
             cell3.appendChild(precioNode);

        });

   });
   
};

var goLogin = document.querySelector('#login');

goLogin.addEventListener('click',(event)=>{
    loadAndDisplayCatalogo();
});





