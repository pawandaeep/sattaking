// पुराना रिजल्ट स्टोर करने के लिए एक एरे
let oldResults = JSON.parse(localStorage.getItem("oldResults")) || [];

// लाइव रिजल्ट अपडेट करने का फंक्शन
function updateResult() {
    let result = document.getElementById("resultInput").value;
    let location = document.getElementById("locationInput").value;

    if (result && location) {
        document.getElementById("liveResult").innerText = result;
        document.getElementById("locationName").innerText = location;

        // पुराने रिकॉर्ड में नया रिजल्ट जोड़ें
        oldResults.unshift(${location}: ${result});
        
        // लोकल स्टोरेज में सेव करें
        localStorage.setItem("oldResults", JSON.stringify(oldResults));
    } else {
        alert("Please enter both Result and Location Name!");
    }
}

// Chart पेज पर पुराने रिजल्ट दिखाने का फंक्शन
if (document.getElementById("oldResults")) {
    let oldResultsList = document.getElementById("oldResults");
    oldResults.forEach((res, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = Record ${index + 1}: ${res};
        oldResultsList.appendChild(listItem);
    });
}
// पुराना रिजल्ट स्टोर करने के लिए लोकल स्टोरेज
let oldResults = JSON.parse(localStorage.getItem("oldResults")) || [];

// लाइव रिजल्ट अपडेट करने का फंक्शन
function updateResult() {
    let result = document.getElementById("resultInput").value;
    let location = document.getElementById("locationInput").value;

    if (result && location) {
        document.getElementById("liveResult").innerText = result;
        document.getElementById("locationName").innerText = location;

        // पुराने रिजल्ट को स्टोर करें
        let newRecord = ${location}: ${result};
        oldResults.unshift(newRecord);

        // लोकल स्टोरेज में सेव करें
        localStorage.setItem("oldResults", JSON.stringify(oldResults));
    } else {
        alert("Please enter both Result and Location Name!");
    }
}

// Chart पेज पर पुराने रिजल्ट डिब्बों में लोड करने का फंक्शन
if (document.getElementById("oldResults")) {
    let oldResultsContainer = document.getElementById("oldResults");

    oldResults.forEach((res, index) => {
        let divItem = document.createElement("div");
        divItem.classList.add("chart-box");
        divItem.textContent = Record ${index + 1}: ${res};
        oldResultsContainer.appendChild(divItem);
    });
}// Dummy Data for Chart
let oldRecords = [
    { date: "1", disawer: "Xx", tajGold: "17", superDelhi: "36", shriNagar: "00", shriGanesh: "46", punjabGold: "00", palakBazar: "28", newYork: "78", newTajGold: "78", newKanpur: "97" },
    { date: "2", disawer: "43", tajGold: "19", superDelhi: "88", shriNagar: "32", shriGanesh: "35", punjabGold: "83", palakBazar: "13", newYork: "93", newTajGold: "93", newKanpur: "47" },
    { date: "3", disawer: "50", tajGold: "54", superDelhi: "98", shriNagar: "99", shriGanesh: "45", punjabGold: "85", palakBazar: "77", newYork: "60", newTajGold: "98", newKanpur: "48" },
    { date: "4", disawer: "88", tajGold: "57", superDelhi: "92", shriNagar: "33", shriGanesh: "45", punjabGold: "16", palakBazar: "33", newYork: "27", newTajGold: "77", newKanpur: "95" },
    { date: "5", disawer: "43", tajGold: "-", superDelhi: "-", shriNagar: "-", shriGanesh: "-", punjabGold: "-", palakBazar: "-", newYork: "-", newTajGold: "-", newKanpur: "-" }
];

// Function to Load Chart Data
function loadChart() {
    let chartTable = document.getElementById("chartData");
    chartTable.innerHTML = ""; // Clear previous data

    oldRecords.forEach(record => {
        let row = <tr>
            <td>${record.date}</td>
            <td>${record.disawer}</td>
            <td>${record.tajGold}</td>
            <td>${record.superDelhi}</td>
            <td>${record.shriNagar}</td>
            <td>${record.shriGanesh}</td>
            <td>${record.punjabGold}</td>
            <td>${record.palakBazar}</td>
            <td>${record.newYork}</td>
            <td>${record.newTajGold}</td>
            <td>${record.newKanpur}</td>
        </tr>;
        chartTable.innerHTML += row;
    });
}

// Load Chart on Page Load
window.onload = loadChart;