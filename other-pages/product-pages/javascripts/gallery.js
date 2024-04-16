let currentImageIndex = 0;
const imageContainers = document.querySelectorAll('.image-container');

function showImage(index) {
    imageContainers.forEach(container => {
        container.classList.remove('active');
    });
    imageContainers[index].classList.add('active');
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % imageContainers.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + imageContainers.length) % imageContainers.length;
    showImage(currentImageIndex);
}
