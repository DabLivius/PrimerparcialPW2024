function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  alert("Username: " + username);
  alert("Password: " + password);
}

function validaciones() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var nameRegex = /^[A-Za-z]{1,10}$/;

  if (!nameRegex.test(name)) {
    alert("Invalid name. Only letters allowed, maximum 10 characters.");
    return;
  }

  if (!nameRegex.test(lastName)) {
    alert("Invalid last name. Only letters allowed, maximum 10 characters.");
    return;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address.");
    return;
  }

  var phoneRegex = /^\d{1,10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Invalid phone number. Only numbers allowed, maximum 10 digits.");
    return;
  }

  console.log("Username: " + username);
  console.log("Password: " + password);
  console.log("Name: " + name);
  console.log("Last Name: " + lastName);
  console.log("Email: " + email);
  console.log("Phone: " + phone);
}
