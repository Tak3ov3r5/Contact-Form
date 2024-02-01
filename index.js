const scriptURL =
  "https://script.google.com/macros/s/AKfycbz2lfSnxoZ61y1cBuqS_lZcgR71cZzDh3mSrjplQoyM75CaZl9SX2Z0yA7hABKzxObwqQ/exec";
const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
