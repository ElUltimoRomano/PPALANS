window.addEventListener("DOMContentLoaded", () => {
  fetch("Barra_Default.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("navbar").innerHTML = html;
    });
});