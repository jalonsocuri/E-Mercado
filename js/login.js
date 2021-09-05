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
   datos.nombre = usuario.value;
   datos.contraseña = contraseña.value;
   datos.estado = 'conectado'
   localStorage.setItem ('datos', JSON.stringify(datos));
   location.href = "index.html";
    }
  }


