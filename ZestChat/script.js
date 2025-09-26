const container = document.getElementById('balloon-container');
const emojis = ['😊', '🎉', '💬', '🌍', '🚀', '❤️', '😎', '🤗', '✨', '🎈'];
const names = ['Alex', 'Bella', 'Chris', 'Dana', 'Eli', 'Fay', 'Gabe', 'Hana', 'Ivan', 'Jade'];
const balloons = [];

function createBalloon(name, color) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.textContent = name;
    balloon.style.backgroundColor = color;
    balloon.style.left = Math.random() * (window.innerWidth - 80) + 'px';
    balloon.style.top = Math.random() * (window.innerHeight - 100) + 'px';
    container.appendChild(balloon);
    balloons.push({element: balloon, dx: Math.random() * 2 - 1, dy: Math.random() * 2 - 1});
    
    balloon.addEventListener('click', () => {
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        balloon.appendChild(bubble);
        setTimeout(() => balloon.removeChild(bubble), 3000);
    });
}

function moveBalloons() {
    balloons.forEach(balloon => {
        let rect = balloon.element.getBoundingClientRect();
        let x = rect.left + balloon.dx;
        let y = rect.top + balloon.dy;

        if (x < 0 || x > window.innerWidth - 80) balloon.dx *= -1;
        if (y < 0 || y > window.innerHeight - 100) balloon.dy *= -1;

        balloon.element.style.left = (rect.left + balloon.dx) + 'px';
        balloon.element.style.top = (rect.top + balloon.dy) + 'px';

        balloons.forEach(other => {
            if (balloon !== other) {
                let r1 = balloon.element.getBoundingClientRect();
                let r2 = other.element.getBoundingClientRect();
                if (r1.left < r2.right && r1.right > r2.left &&
                    r1.top < r2.bottom && r1.bottom > r2.top) {
                    balloon.dx *= -1;
                    balloon.dy *= -1;
                    other.dx *= -1;
                    other.dy *= -1;
                }
            }
        });
    });
}

function surpriseDrop() {
    const name = names[Math.floor(Math.random() * names.length)];
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    createBalloon(name, color);
}

names.forEach(name => {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    createBalloon(name, color);
});

setInterval(moveBalloons, 30);
setInterval(surpriseDrop, 10000);
