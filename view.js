// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let fs = require('fs');



let filename = 'contacts';
let sno = 0;


let errorCallback = function (err) {
  if (err) throw err;
  console.log('Saved!');
}


var addToList = document.querySelector('#add-to-list');

addToList.addEventListener("click",() =>{
		let name = document.querySelector('#Name').value;
		let email = document.querySelector('#Email').value;

		fs.appendFile(filename, name + ',' + email + '\n',errorCallback)

		console.log({name,email});	
      }
   		
);



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


