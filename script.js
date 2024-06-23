var tablinks = document.getElementsByClassName("links");
var tabcontents = document.getElementsByClassName("tabcontents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active");
  }
  event.currentTarget.classList.add("active");
  document.getElementById(tabname).classList.add("active");
}

var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0px";
}
function closemenu() {
  sidemeu.style.right = "-300px";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwg9XuOaov1Vlr859unUskAEAeVrxwLCyTKX9jYeppkQZdzPSr7wSLrsHAWEVKFNCFPtw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

function comingsoon(){
  alert("Website will be updated......")
}
