document.addEventListener("DOMContentLoaded", function() {
    let count = localStorage.getItem('visitorCount') || 0;
    count++;
    localStorage.setItem('visitorCount', count);
    document.getElementById('count').textContent = count;

    const profile = {
        category: localStorage.getItem('zestCategory'),
        avatar: localStorage.getItem('zestAvatar'),
        description: localStorage.getItem('zestDescription')
    };

    if (profile.category) {
        document.getElementById('visitor-info').textContent = `Location: Guest | Age Group: ${profile.category}`;
    } else {
        document.getElementById('visitor-info').textContent = `Location: Guest | Age Group: Guest`;
    }
});
