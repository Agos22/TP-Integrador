const images = ["imahgen1.jpg", "imagen2.jpg", "imagen3.jpg"];
let currentIndex = 0;

function showImage(index) {
    const imgElement = document.getElementById("carouselImage");
    imgElement.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const responseDiv = document.getElementById('formResponse');

    // Validaciones
    if (!name || !email || !phone) {
        responseDiv.innerHTML = "<p>Error: Todos los campos son obligatorios.</p>";
        return;
    }

    responseDiv.innerHTML = `<p>Datos Enviados:<br>Nombre: ${name}<br>Email: ${email}<br>Teléfono: ${phone}</p>`;
});