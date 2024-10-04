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