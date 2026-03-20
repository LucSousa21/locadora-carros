document.querySelectorAll('.carousel').forEach(carousel => {

    const imgTag = carousel.querySelector('.car-img');
    const images = JSON.parse(carousel.getAttribute('data-images'));
    let index = 0;

    const updateImage = () => imgTag.src = images[index];
    updateImage(); // inicializa a primeira imagem

    const nextImage = () => {
        index = (index + 1) % images.length;
        updateImage();
    };

    const prevImage = () => {
        index = (index - 1 + images.length) % images.length;
        updateImage();
    };

    carousel.querySelector('.next').addEventListener('click', nextImage);
    carousel.querySelector('.prev').addEventListener('click', prevImage);

});
