document.addEventListener("DOMContentLoaded", function () {
  console.log("Sharma Home Decor Website Loaded");

  const button = document.querySelector("button");

  if (button) {
    button.addEventListener("click", function () {
      window.location.href = "tel:7076735147";
    });
  }
});
