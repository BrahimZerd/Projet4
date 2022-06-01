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
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const participations = document.getElementById("quantity");
const form = document.querySelector("form");
var inputs = document.getElementsByTagName("input");
const btn = document.getElementById("btn-submit");
const radioError = document.querySelector(".checkbox-label");
const quantity = document.getElementById("quantity");
const condition = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//fonction de fermeture MODAL
function close() {
  modalbg.style.display = "none";
  

}
// appel pour fermeture modal au click
modalClose.addEventListener("click", close);

//désactivation submit par défaut du formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault();
  
});

//fonction pour validation de soumission du formulaire
let valid = false;

//validation du champs : "MAIL"
let error = document.createElement("p");
let errorMail = email.parentNode.appendChild(error);
//événement pour le mail
email.addEventListener("change", validEmail);
// fonction pour celui ci
function validEmail() {
  let mail = email.value;
  let regexMail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;

  if (regexMail.exec(mail) == null) {
    errorMail.textContent = "Veuillez renseigner une adresse mail valide";
    errorMail.style.color = "red";
    errorMail.style.fontSize = "16px";
    email.style.border = "2px solid red";
    valid = false;
    return false;
  } else {
    errorMail.textContent = "";
    email.style.border = "none";
    valid = true;
    return true;
  }
}

//création d'un élément pour le message d'erreur
let span = document.createElement("span");
span.style.color = "red";
span.style.fontSize = "16px";
// Evenement pour la validation du prénom
firstName.addEventListener("keyup", validName);
//fonction de validation pour le prénom
function validName() {
  let firstInput = firstName.value;
  if (firstInput.length < 2 && firstInput !== null) {
    firstName.parentNode.appendChild(span);
    span.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      firstName.style.border = "2px solid red"
    valid = false;
    return false;
  } else {
    firstName.parentNode.removeChild(span);
    firstName.style.border = "none";
    valid = true;
    return true;
  }
}

// Evenement pour la validation du nom
lastName.addEventListener("keyup", validLast);
//fonction de validation pour le nom
let span2 = document.createElement("span");
span2.style.color = "red";
span2.style.fontSize = "16px";
function validLast() {
  let lastInput = lastName.value;
  if (lastInput.length < 2 && lastInput !== null) {
    lastName.parentNode.appendChild(span2);
    lastName.style.border = "2px solid red"
    span2.textContent =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    valid = false;
    return false;
  } else {
    lastName.parentNode.removeChild(span2);
    lastName.style.border = "none";
    span2.style.textAlign = "center";
    valid = true;
    return true;
  }
}

// Evenement pour la validation de la date de naissance

var date_regex = /^\d{4}-\d\d-\d\d$/;
birthdate.addEventListener("input", birthdateValidation);
const errorBirth = document.createElement("span");
function birthdateValidation() {
  //si le format regex correspond, il retourne une valeur true
  if (date_regex.test(birthdate.value)) {
    birthdate.parentNode.removeChild(errorBirth);
    birthdate.style.border = "none"
    valid = true;
    return true;
  } else {
    //sinon un bloc apparait et un message d'erreur en rouge en ressort avec la valeur false

    birthdate.parentNode.appendChild(errorBirth);
    errorBirth.innerText = "Vous devez entrer votre date de naissance";
    errorBirth.style.color = "red";
    birthdate.style.border = "red 2px solid"
    errorBirth.style.fontSize = "16px";
    valid = false;
    return false;
  }
}

//Validation pour intégrer un nombre dans le nombre d'événements participé.
quantityError = document.createElement("span");
quantityError.style.color = "red";
quantityError.style.fontSize = "18px";
//intégration d'une regex. qui intégre les nombres entre 0 et 99
regexQuantity = /\b([0-9]|[1-9][0-9])\b/;

//création d'une fonction qui test les entrées dans quantity.values  afin de vérifier que ça concorde avec la regex
quantity.addEventListener("input", quantityValidation);
function quantityValidation() {
  if (regexQuantity.test(quantity.value)) {
    quantity.parentNode.removeChild(quantityError);
    quantity.style.border = "none"
    valid = true;
    return true;
  } else {
    quantity.parentNode.appendChild(quantityError);
    quantityError.innerText = "Veuillez saisir une valeur comprise entre 0 et 99";
    quantity.style.border = "red 2px solid"
    valid = false;
    return false;
  }
}
//validation des conditions cochés à l'envoie du formulaire
const errorCondition = document.createElement("span");
condition.addEventListener("click", Conditions);
function Conditions() {
  if (condition.checked == true) {
    //si les conditions sont cochés on renvoie la valeur true
    condition.parentNode.removeChild(errorCondition);
    valid = true;
    return true;
  } else {
    //sinon on renvoie la valeur false avec un message qui apparait en rouge
    condition.parentNode.appendChild(errorCondition);
    errorCondition.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    errorCondition.style.color = "red";
    errorCondition.style.fontSize = "16px";

    valid = false;
    return false;
  }
}

// Appel en cas de soumission du formulaire pour vérifier si une destination a été coché
const radios = document.querySelectorAll("input[type=radio]");
const p2 = document.createElement("p");
p2.style.color = "red";
p2.style.fontSize = "18px";
//fonction avec boucle pour vérification de chaque cas de boutons check, si un seul est check la fonction s'arrête
// Sinon elle fait apparaitre un message d'erreur.
form.addEventListener("change", radioCheck);
function radioCheck() {
  for (let i = 0; i < radios.length; ) {
    if (radios[i].checked) {
      radioError.parentNode.removeChild(p2);
      valid = true;
    } else {
      i++;
      radioError.parentNode.appendChild(p2);
      p2.innerText = "Veuillez faire un choix";
      valid = false;
    }
  }
}

//fonction de validation du formulaire pour soumission de celui ci, il vérifie que chaque fonction s'éxécute et si c'est le cas, il envoie le formulaire avec un message
// apparition de bloc de remerciements après finalisation & validation du formulaire.
form.addEventListener("submit", Valid);
function Valid() {
  if (valid === true) {
    const thank = document.getElementById("thanks");
    thank.style.display = "block";
    const body = document.querySelector(".modal-body");
    body.style.display = "none";
  } else {
    valid = false;
    alert("Merci de compléter les cases manquantes");
  }
}

//fonction d'envoie du formulaire en cliquant sur fermer
//réinitialisation du formulaire.

const thankclose = document.getElementById("thankbtn");

thankclose.addEventListener("click", thankYou);
function thankYou() {
  form.reset()
  const thank = document.getElementById("thanks");
  thank.style.display = "none";
  modalbg.style.display = "none";
  const body = document.querySelector(".modal-body");
    body.style.display = "block";
}

//fonction réinitialisation du modal au clic sur la croix apres remerciements.
modalClose.addEventListener("click", closeThank)
function closeThank() {
  const thank = document.getElementById("thanks");
    thank.style.display = "none";
    modalbg.style.display = "none";
    const body = document.querySelector(".modal-body");
    body.style.display = "block";
    
    
}
