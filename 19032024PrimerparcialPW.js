function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  alert("Username: " + username);
  alert("Password: " + password);
}

function validaciones() {
    var Nombres = document.getElementById("Nombres").value;
    var Apellidos = document.getElementById("Apellidos").value;
    var Telefono = document.getElementById("Telefono").value;
    var Email = document.getElementById("Email").value;
    var nameRegex = /^[A-Z-a-z]{1,30}$/;

    if (!nameRegex.test(Nombres)) {
        alert("Nombres invalidos. Solo letras minusculas por favor, Maximo 30 letras.");
        return;
    }

    if (!nameRegex.test(Apellidos)) {
        alert("Apellidos invalidos. Solo letras mnusculas por favor, Maximo 30 letras.");
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
        alert("Email invalido.");
        return;
    }

    var phoneRegex = /^\d{1,10}$/;
    if (!phoneRegex.test(Telefono)) {
        alert("Telefono invalido. Solo se permiten numeros, maximo 10 digitos.");
        return;
    }

    alert("Nombres: " + Nombres + "Es valido.");
    alert("Apellidos: " + Apellidos + "Es valido.");
    alert("Email: " + Email + "Es valido.");
    alert("Telefono: " + Telefono + "Es valido.");
}
