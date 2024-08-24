document.addEventListener("DOMContentLoaded", function () {
    // Cargar el contenido del navbar.html en la sección con id "navbar"
    var navbarContainer = document.getElementById("navbar");
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          navbarContainer.innerHTML = xhr.responseText;
        } else {
          console.error("Error al cargar el navbar: " + xhr.status);
        }
      }
    };
    xhr.open("GET", "assets/partials/navbar.html", true);
    xhr.send();
});