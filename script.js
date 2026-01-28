document.addEventListener("DOMContentLoaded", function () {
    // 1. Get the modal element from the DOM
    var myModal = new bootstrap.Modal(document.getElementById('imageModal'));

    // 2. Select the image tag inside the modal
    var modalImage = document.getElementById('modalImage');

    // 3. Add click event to all gallery images
    var images = document.querySelectorAll('.gallery-item');

    images.forEach(function (img) {
        img.addEventListener('click', function () {
            // Set the modal image source to the clicked image's source
            modalImage.src = this.src;
            // Show the modal
            myModal.show();
        });
    });
});