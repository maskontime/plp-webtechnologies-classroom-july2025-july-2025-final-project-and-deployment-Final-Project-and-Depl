// Toggle navigation menu on small screens
document.getElementById("menu-toggle").addEventListener("click", function() {
  document.querySelector("nav ul").classList.toggle("show");
});

// Simple form validation
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form from refreshing the page
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let msg = document.getElementById("formMsg");

  if (name === "" || email === "" || message === "") {
    msg.textContent = "⚠️ Please fill in all fields.";
    msg.style.color = "red";
  } else {
    msg.textContent = "✅ Thank you for your message!";
    msg.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});
