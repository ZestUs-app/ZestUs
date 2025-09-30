
async function getCountryFromIP() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        return data.country_name || "Unknown Country";
    } catch (error) {
        console.error("Geolocation error:", error);
        return "Unknown Country";
    }
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

const visitorStats = {};

async function registerVisitor() {
    const ageInput = document.getElementById("age").value;
    const ageGroup = getAgeGroup(parseInt(ageInput));
    const country = await getCountryFromIP();

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
    for (const country in visitorStats) {
        statsDiv.innerHTML += `<strong>${country}</strong><ul>`;
        for (const ageGroup in visitorStats[country]) {
            statsDiv.innerHTML += `<li>${ageGroup}: ${visitorStats[country][ageGroup]}</li>`;
        }
        statsDiv.innerHTML += "</ul>";
    }
}
