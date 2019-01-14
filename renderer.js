'use strict'
let Navigation = require('./utils/navigation.js');
let Places = require('./utils/Places.json');

console.log('Hi');

var nav = new Navigation();
nav.loadComponent(Places.MainPanel, "content"); 


/*var catalogBtn = document.querySelector('#goToCat');
catalogBtn.addEventListener('click',(event)=>{
	nav.loadComponent("./views/catalogUi.html", "content"); 	
})
*/










