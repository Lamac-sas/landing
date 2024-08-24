// Define la función antes de usarla
function loadContent(containerId, url) {
    var container = document.getElementById(containerId);
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                container.innerHTML = xhr.responseText;
            } else {
                console.error(`Error al cargar ${containerId}: ${xhr.status}`);
            }
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}

// Usa la función dentro del event listener
document.addEventListener("DOMContentLoaded", function () {
    loadContent("navbar", "assets/partials/navbar.html");
    loadContent("footer", "assets/partials/footer.html");
    loadContent("herosection", "assets/partials/hero-section.html");
    // Añade más llamadas según sea necesario
});
