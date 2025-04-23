document.querySelectorAll('.zoom-widget').forEach((img) => {
    img.addEventListener('mouseenter', () => {
        img.style.transition = 'transform 0.3s ease';
        img.style.transform = 'scale(1.1)';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transition = 'transform 0.3s ease';
        img.style.transform = 'scale(1)';
    });
});