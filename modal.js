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
const firstError = document.getElementById("firsterror");
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

//tentative validation formulaire

form.addEventListener("submit",function e(){
  e.preventDefault();
  console.log("click");
});



  









