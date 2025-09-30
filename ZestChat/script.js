// Firebase configuration (replace with your own Firebase project config)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const container = document.getElementById('balloon-container');
const chatWindow = document.getElementById('chat-window');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

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
        chatWindow.classList.remove('hidden');
        chatMessages.innerHTML = '';
        db.ref('messages').on('child_added', snapshot => {
            const msg = snapshot.val();
            const div = document.createElement('div');
            div.textContent = msg.name + ": " + msg.text;
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        });
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
    });
}

function sendMessage() {
    const text = chatInput.value;
    if (text.trim() !== '') {
        db.ref('messages').push({
            name: "You",
            text: text
        });
        chatInput.value = '';
    }
}

names.forEach(name => {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    createBalloon(name, color);
});

setInterval(moveBalloons, 30);

