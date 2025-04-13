// Parallax Scrolling Effect
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;

    parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Change 0.5 to adjust the speed
});
