document.addEventListener('scroll', () => {
    document.querySelectorAll('.content').forEach(section => {
        const scrollPosition = window.scrollY;
        section.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
});
