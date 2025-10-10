
document.getElementById("zestProfileBtn").onclick = () => {
    document.getElementById("profileModal").style.display = "block";
};
document.getElementById("aboutZestBtn").onclick = () => {
    document.getElementById("aboutModal").style.display = "block";
};

function submitProfile() {
    const category = document.getElementById("category").value;
    const about = document.getElementById("about").value;
    localStorage.setItem("zestProfile", JSON.stringify({ category, about }));
    alert("Profile saved!");
    document.getElementById("profileModal").style.display = "none";
}

fetch("https://ipinfo.io/json?token=demo")
    .then(response => response.json())
    .then(data => {
        document.getElementById("visitor-info").innerText = `Visitor from ${data.country}`;
    });

const avatarContainer = document.getElementById("avatars");
for (let i = 1; i <= 9; i++) {
    const img = document.createElement("img");
    img.src = `assets/avatars/avatar${i}.png`;
    img.style.width = "60px";
    img.style.margin = "5px";
    avatarContainer.appendChild(img);
}
