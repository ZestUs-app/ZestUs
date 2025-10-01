
function completeRegistration() {
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    if (!age || !country) {
        alert("Please enter both age and country.");
        return;
    }
    localStorage.setItem("visitorAge", age);
    localStorage.setItem("visitorCountry", country);
    document.getElementById("registration-overlay").style.display = "none";
    registerVisitor();
}

function getAgeGroup(age) {
    age = parseInt(age);
    if (age >= 0 && age <= 12) return "0-12";
    if (age >= 13 && age <= 19) return "13-19";
    if (age >= 20 && age <= 30) return "20-30";
    if (age >= 31 && age <= 40) return "30-40";
    if (age >= 41 && age <= 65) return "40-65";
    if (age >= 66 && age <= 75) return "65-75";
    if (age > 75) return "75+";
    return "Unknown";
}

const visitorStats = {};

function registerVisitor() {
    const age = localStorage.getItem("visitorAge");
    const country = localStorage.getItem("visitorCountry");
    const ageGroup = getAgeGroup(age);

    if (!visitorStats[country]) {
        visitorStats[country] = {};
    }
    if (!visitorStats[country][ageGroup]) {
        visitorStats[country][ageGroup] = 0;
    }
    visitorStats[country][ageGroup] += 1;

    displayStats();
}

function displayStats() {
    const statsDiv = document.getElementById("visitor-stats");
    statsDiv.innerHTML = "<h3>Visitor Stats</h3>";
    let countryCount = 0;
    let ageGroupCount = 0;
    for (const country in visitorStats) {
        countryCount++;
        statsDiv.innerHTML += `<strong>${country}</strong><ul>`;
        for (const ageGroup in visitorStats[country]) {
            ageGroupCount++;
            statsDiv.innerHTML += `<li>${ageGroup}: ${visitorStats[country][ageGroup]}</li>`;
        }
        statsDiv.innerHTML += "</ul>";
    }
    document.getElementById("country-count").textContent = countryCount;
    document.getElementById("age-group-count").textContent = ageGroupCount;
}

function submitProfile() {
    const category = document.getElementById("category").value;
    const avatar = document.getElementById("avatar").value;
    const bio = document.getElementById("bio").value;
    alert(`Profile submitted!\nCategory: ${category}\nAvatar: ${avatar}\nBio: ${bio}`);
}

window.onload = function() {
    if (localStorage.getItem("visitorAge") && localStorage.getItem("visitorCountry")) {
        document.getElementById("registration-overlay").style.display = "none";
        registerVisitor();
    }
};
