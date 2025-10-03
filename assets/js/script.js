
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function openChat(message) {
    alert("Balloon says: " + message);
}
