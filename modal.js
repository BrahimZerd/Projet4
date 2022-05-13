function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const participations = document.getElementById("quantity");
const form = document.querySelector("form");
var inputs = document.getElementsByTagName("input");
const firstError = document.getElementById("firsterror");
const lastError = document.getElementById("lasterror");
const btn = document.getElementById("btn-submit");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//fonction de fermeture MODAL
function close() {
  modalbg.style.display = "none";
};
// appel pour fermeture modal au click
modalClose.addEventListener('click', close);

//désactivation submit par défaut du formulaire
form.addEventListener('submit',function(e){
  e.preventDefault();
 console.log("click")
 

});

//Test unitaire prénom & nom
lastName.addEventListener("input", myEvent);
function myEvent(a){
  if (a.target.value !== null) {
    lastError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }
}
//test unitaire MAIL 
email.addEventListener("input", validEmail);
function validEmail() {
  let mail = email.value;
  let errorMail = document.getElementById("errormail");
  let verif 	= /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;

  if(verif.exec(mail) == null) {
    errorMail.innerText = "Veuillez renseigner une adresse mail valide"
    errorMail.style.color ="red"
    return false;

  } else {
    errorMail.innerText = "e-mail correct"
    errorMail.style.color = "green";
    return true;
    
  }
}




/// test validation function ///
function isValid() {
  if( lastName.value =="" && lastName.length < 2){
   
    lastError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }
  if(firstName.value =="" && firstName.length < 2){
    firstError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    return false;
  }
}



  









