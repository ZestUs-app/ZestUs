
document.getElementById("zestProfileBtn").addEventListener("click", () => {
    document.getElementById("profileModal").style.display = "flex";
});
document.getElementById("submitProfile").addEventListener("click", () => {
    const category = document.getElementById("category").value;
    const about = document.getElementById("about").value;
    const avatar = document.querySelector(".avatar.selected")?.src || "";
    const profile = { category, about, avatar };
    localStorage.setItem("zestProfile", JSON.stringify(profile));
    alert("Profile saved!");
    document.getElementById("profileModal").style.display = "none";
});
document.querySelectorAll(".avatar").forEach(img => {
    img.addEventListener("click", () => {
        document.querySelectorAll(".avatar").forEach(i => i.classList.remove("selected"));
        img.classList.add("selected");
    });
});
fetch("https://ipinfo.io/json?token=demo")
    .then(response => response.json())
    .then(data => {
        document.getElementById("visitor-info").innerText = `Visitors: 1 | Location: ${data.country}`;
    })
    .catch(() => {
        document.getElementById("visitor-info").innerText = "Visitors: 1 | Location: Unknown";
    });
