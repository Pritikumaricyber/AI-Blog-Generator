function openForm() {
  // Redirect to form.html after checking login conditions
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple validation (for demo purposes)
  if (username === "admin" || password === "1234") {
    alert("Please fill in both fields!");
  } else {
    // Redirect to form.html if login is "successful"
    window.location.href = "form.html"; // Navigates to form.html
  }
}
