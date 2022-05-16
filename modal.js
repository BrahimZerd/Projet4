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
const btn = document.getElementById("btn-submit");
const radio = document.querySelectorAll(".checkbox-input");
const quantity = document.getElementById("quantity");
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

//validation du champs : "prénom & nom"

//validation du champs : "MAIL" 
  let error = document.createElement("p");
  let errorMail = email.parentNode.appendChild(error);
  //événement pour le mail
  email.addEventListener("change", validEmail);
 // fonction pour celui ci
  function validEmail() {
  let mail = email.value;
  let regexMail 	= /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
  
  if(regexMail.exec(mail) == null) {
    errorMail.textContent = "Veuillez renseigner une adresse mail valide"
    errorMail.style.color = "red";
    
    return false;
    } else {
    errorMail.textContent = ""
    return true;}
  }

// Evenement pour la validation du prénom
  firstName.addEventListener("keyup",ValidName);
  //création d'un élément pour le message d'erreur
  let span = document.createElement("span")
  firstName.parentNode.appendChild(span);
  //fonction de validation
  function ValidName() {
    let firstInput = firstName.value;
    if( firstInput.length < 2 && firstInput !== null) {
      firstName.parentNode.appendChild(span);
      span.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
      span.style.color ="red";
      return false;
    } else {
      firstName.parentNode.removeChild(span);
      return true;
      
      }
  }


  // Evenement pour la validation du nom
  lastName.addEventListener("keyup",Validlast);
  //création d'un élément pour le message d'erreur
 
  //fonction de validation
  function Validlast() {
    let lastInput = lastName.value;
    if( lastInput.length < 2 && lastInput !== null) {
      lastName.parentNode.appendChild(span);
      span.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
      span.style.color ="red";
      return false;
    } else {
      lastName.parentNode.removeChild(span);
      return true;
      }
  }

 // Evenement pour la validation de la quantité d'événements
 let quantityReg = /^(0?[1-9]|[1-9][0-9])$/;
 quantity.addEventListener("keyup",qtyValid);
  const quantityValue = quantity.value;
  function qtyValid () {
   if( quantityValue(isNaN)){
    quantity.parentNode.appendChild(span)
    span.textContent = "Veuillez entrer un chiffre entre 0 et 99"
    
   } else {
    quantity.parentNode.appendChild(span)
    span.textContent = ""
   }
  }



    
  
  
  

  









