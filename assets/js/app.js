const form = document.querySelector(".form");
const inputs = document.getElementsByTagName("input");
const msg = document.getElementById("msg");
const faqs = document.querySelectorAll(".faq");

form.addEventListener("submit", (e) => {
  // Preventing Browser From Reloading
  e.preventDefault();

  //  Clear input's filed after sending data !
  for (var i = 0; i < inputs.length; i++) {
    // Clearing Text & Email
    if (inputs[i].type == "text" || inputs[i].type == "email") {
      inputs[i].value = "";
    }
  }
  // Clearing Message Area.
  msg.value = "";
});
// Setting-up accordions layout
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
