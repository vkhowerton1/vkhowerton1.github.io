function setupGallery(galleryId, images) {
    let current = 0;
    const container = document.getElementById(galleryId);
    const img = container.querySelector("img");
    const caption = container.querySelector(".caption");
    const prevBtn = container.querySelector("button[id^='prev']");
    const nextBtn = container.querySelector("button[id^='next']");

    img.src = images[current].src;
    caption.textContent = images[current].caption;

    prevBtn.addEventListener("click", function() {
        console.log("Prev button clicked");
        current = (current - 1 + images.length) % images.length;
        img.src = images[current].src;
        caption.textContent = images[current].caption;
    });
    
    nextBtn.addEventListener("click", function() {
        console.log("Next button clicked");
        current = (current + 1) % images.length;
        img.src = images[current].src;
        caption.textContent = images[current].caption;
    });    
}