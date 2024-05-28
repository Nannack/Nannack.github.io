let myImage = document.querySelector('img');

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/OIP.jpg") {
    myImage.setAttribute("src", "images/rose.jpg");
  } else {
    myImage.setAttribute("src", "images/OIP.jpg");
  }
});

"bouton d'utilisateur"
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Veuillez saisir votre nom.");
  localStorage.setItem("nom", myName);
  myHeading.textContent = "hello, " + myName;
}
if (!localStorage.getItem("nom")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("nom");
  myHeading.textContent = "hello, " + storedName;
}
myButton.addEventListener("click", function () {
  setUserName();
});