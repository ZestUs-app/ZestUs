
document.querySelectorAll('.balloon').forEach(balloon => {
    balloon.addEventListener('click', () => {
        alert('Balloon clicked: ' + balloon.textContent);
    });
});
