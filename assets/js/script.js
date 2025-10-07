
function submitProfile() {
  const category = document.getElementById('category').value;
  const avatar = document.getElementById('avatar').value;
  const about = document.getElementById('about').value;
  const profile = { category, avatar, about };
  localStorage.setItem('zestus_profile', JSON.stringify(profile));
  alert('Profile saved!');
}

fetch('https://ipinfo.io/json?token=demo')
  .then(response => response.json())
  .then(data => {
    document.getElementById('visitor-info').innerText =
      `You are visiting from ${data.city}, ${data.country}`;
  })
  .catch(() => {
    document.getElementById('visitor-info').innerText = 'Visitor info unavailable';
  });
