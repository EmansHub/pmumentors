function signup() {
  const user = {
    name: name.value,
    email: email.value,
    password: password.value
  };
  localStorage.setItem(user.email, JSON.stringify(user));
  alert("Account created");
}

function login() {
  const user = JSON.parse(localStorage.getItem(email.value));
  if (user && user.password === password.value) {
    window.location = "dashboard.html";
  } else {
    alert("Login failed");
  }
}
