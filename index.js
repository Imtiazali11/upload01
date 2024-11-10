// Script for smooth scrolling or triggering animations
window.addEventListener("scroll", function () {
    const content = document.querySelector(".content-left");
    if (window.scrollY > 100) {
        content.style.transform = "translateX(0)";
        content.style.opacity = "1";
    }
});
