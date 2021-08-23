function desconectar() {
    let usuario = localStorage.getItem('usuario');
    localStorage.clear();
    location.href = "login.html";
    signOut();
  }
  
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log("User signed out.");
      location.href = "login.html";
    });
  }
  