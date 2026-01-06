// Optional: set this to your Formspree endpoint URL (e.g. 'https://formspree.io/f/xxxxxxx')
const FORMSPREE_ENDPOINT = "";

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {
  form.reset();
  statusEl.textContent = "";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  statusEl.textContent = "";

  const name = document.getElementById("nameInput").value.trim();
  const email = document.getElementById("emailInput").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  if (!name || !email || !message) {
    statusEl.textContent = "Please fill in all fields.";
    return;
  }

  // Basic email pattern check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    statusEl.textContent = "Please enter a valid email address.";
    return;
  }

  // Always send to the owner's email
  const recipient = "Nwankwokingsley3939@gmail.com";
  const subject = encodeURIComponent("Contact from profile site: " + name);
  const body = encodeURIComponent(
    message + "\n\n— " + name + " <" + email + ">"
  );
  const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`;

  window.location.href = mailto;
  statusEl.textContent = "Opening your email client...";
});
