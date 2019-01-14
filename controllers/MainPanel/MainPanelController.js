
var nav = new Navigation();

var catalogBtn = document.querySelector('#goToCat');

catalogBtn.addEventListener('click',(event)=>{
	nav.loadComponent(Places.Catalogo, "content"); 	
})







