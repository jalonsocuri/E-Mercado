//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {});

function login() {
  let usuario = document.getElementById("usuario");
  let contraseña = document.getElementById("contraseña");
  let datos = {};
  if (usuario.value.trim() === "" || contraseña.value.trim() === "") {
    alert("Ingresar datos solicitados");
  } else {
   usuario.nombre = usuario.value;
   contraseña = contraseña.value;
   usuario.estado = 'Conectado'
   localStorage.setItem ('datos', JSON.stringify(datos));
   location.href = "index.html";
    }
  }

function onLoad() {
  gapi.load("auth2", function () {
    gapi.auth2.init();
  });
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
    location.href = "login.html";
  });
}
function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  /*console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log("Full Name: " + profile.getName());
  console.log("Given Name: " + profile.getGivenName());
  console.log("Family Name: " + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());*/
  //usuario.estado = 'Conectado'
  location.href="index.html";
}

