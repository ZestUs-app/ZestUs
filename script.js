
function getCountryFromIP(callback) {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => callback(data.country_name || "Unknown"))
        .catch(() => callback("Unknown"));
}

function getAgeGroup(age) {
    if (age >= 0 && age <= 12) return "0-12";
    if (age >= 13 && age <= 19) return "13-19";
    if (age >= 20 && age <= 30) return "20-30";
    if (age >= 31 && age <= 40) return "30-40";
    if (age >= 41 && age <= 65) return "40-65";
    if (age >= 66 && age <= 75) return "65-75";
    if (age > 75) return "75+";
    return "Unknown";
}

function registerVisitor() {
    const ageInput = document.getElementById("age").value;
    const ageGroup = getAgeGroup(parseInt(ageInput));
    getCountryFromIP(function(country) {
        let stats = JSON.parse(localStorage.getItem("visitorStats") || "{}");
        if (!stats[country]) stats[country] = {};
        if (!stats[country][ageGroup]) stats[country][ageGroup] = 0;
        stats[country][ageGroup] += 1;
        localStorage.setItem("visitorStats", JSON.stringify(stats));
        displayStats(stats);
    });
}

function displayStats(stats) {
    const statsDiv = document.getElementById("visitor-stats");
    statsDiv.innerHTML = "<h3>Visitor Stats</h3>";
    let countryCount = 0;
    let ageGroupCount = 0;
    for (const country in stats) {
        countryCount++;
        statsDiv.innerHTML += `<strong>${country}</strong><ul>`;
        for (const ageGroup in stats[country]) {
            ageGroupCount++;
            statsDiv.innerHTML += `<li>${ageGroup}: ${stats[country][ageGroup]}</li>`;
        }
        statsDiv.innerHTML += "</ul>";
    }
    document.getElementById("country-count").textContent = countryCount;
    document.getElementById("age-group-count").textContent = ageGroupCount;
}

document.addEventListener("DOMContentLoaded", function() {
    const stats = JSON.parse(localStorage.getItem("visitorStats") || "{}");
    displayStats(stats);
});
