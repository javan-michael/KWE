document.addEventListener("DOMContentLoaded", function () {
    // 1. Initialize Bootstrap Modal
    const modalEl = document.getElementById('imageModal');
    const myModal = new bootstrap.Modal(modalEl);

    // 2. Select DOM elements inside the modal
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');

    // 3. Attach click handlers to all gallery cards
    const galleryCards = document.querySelectorAll('.gallery-card');

    galleryCards.forEach(function (card) {
        card.addEventListener('click', function () {
            const img = this.querySelector('.gallery-item');
            const captionEl = this.querySelector('.caption');

            if (img) {
                // Pass image source to modal
                modalImage.src = img.src;
                modalImage.alt = img.alt || 'Gallery Preview';

                // Pass caption text if it exists, otherwise clear it
                if (captionEl) {
                    modalCaption.textContent = captionEl.textContent;
                    modalCaption.style.display = 'block';
                } else {
                    modalCaption.textContent = img.alt || '';
                    modalCaption.style.display = img.alt ? 'block' : 'none';
                }

                // Trigger modal display
                myModal.show();
            }
        });
    });

    // 4. Clear image source on modal close to reset memory/view
    modalEl.addEventListener('hidden.bs.modal', function () {
        modalImage.src = '';
        modalCaption.textContent = '';
    });
});