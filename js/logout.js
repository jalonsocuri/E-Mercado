function desconectar() {
  localStorage.clear();
  location.href = "login.html";
  signOut();
}

document.addEventListener("DOMContentLoaded", function (e) {
  let datos = JSON.parse(localStorage.getItem("datos"));
  document.getElementById("perfil").innerHTML = datos.nombre;
});
