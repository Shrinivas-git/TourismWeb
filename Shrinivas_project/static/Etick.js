function openTab(event, tabName) {
    let tabs = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";

    let links = document.getElementsByClassName("nav-link");
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");
}

/// Set default tab (Buses) to be visible on page load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("buses").style.display = "block";
});

// Karnataka Districts
const karnatakaDistricts = [
    "Bangalore Urban", "Bangalore Rural", "Belgaum", "Ballari", "Bidar", "Chamarajanagar",
    "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere",
    "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal",
    "Mandya", "Mysore", "Raichur", "Ramanagara", "Shivamogga", "Tumkur", "Udupi", "Uttara Kannada",
    "Vijayapura", "Yadgir"
];

// Show suggestions
function showSuggestions(input, suggestionBoxId) {
    let value = input.value.toLowerCase();
    let suggestionBox = document.getElementById(suggestionBoxId);
    suggestionBox.innerHTML = "";

    if (value === "") {
        suggestionBox.style.display = "none";
        return;
    }

    let filtered = karnatakaDistricts.filter(district => district.toLowerCase().includes(value));

    filtered.forEach(district => {
        let div = document.createElement("div");
        div.innerHTML = district;
        div.onclick = function() {
            input.value = district;
            suggestionBox.style.display = "none";
        };
        suggestionBox.appendChild(div);
    });

    suggestionBox.style.display = filtered.length ? "block" : "none";
}

// Search Buses
function searchBuses() {
    let from = document.getElementById("bus-from").value;
    let to = document.getElementById("bus-to").value;
    let date = document.getElementById("bus-date").value;
    let results = document.getElementById("bus-results");

    if (from === "" || to === "" || date === "") {
        results.innerHTML = "<p style='color:red;'>Please fill all fields!</p>";
        return;
    }

    results.innerHTML = `<h3>Buses are coming soon on this route. Stay tuned!</h3>`;
}

// Search Trains
function searchTrains() {
    let from = document.getElementById("train-from").value;
    let to = document.getElementById("train-to").value;
    let date = document.getElementById("train-date").value;
    let results = document.getElementById("train-results");

    if (from === "" || to === "" || date === "") {
        results.innerHTML = "<p style='color:red;'>Please fill all fields!</p>";
        return;
    }

    results.innerHTML = `<h3>Trains for this route will be available soon!</h3>`;
}

// Search Flights
function searchFlights() {
    let from = document.getElementById("flight-from").value;
    let to = document.getElementById("flight-to").value;
    let date = document.getElementById("flight-date").value;
    let results = document.getElementById("flight-results");

    if (from === "" || to === "" || date === "") {
        results.innerHTML = "<p style='color:red;'>Please fill all fields!</p>";
        return;
    }

    results.innerHTML = `<h3>Flights for this route will be available soon. Stay updated!</h3>`;
}

// Book Historical Places
function bookHistorical() {
    let results = document.getElementById("historical-results");
    results.innerHTML = `<h3>Historical place ticket booked successfully!</h3>`;
}

// Book Museums
function bookMuseums() {
    let results = document.getElementById("museum-results");
    results.innerHTML = `<h3>Museum ticket booked successfully! Enjoy your visit.</h3>`;
}

// Book Tourist Places
function bookTouristPlaces() {
    let results = document.getElementById("tourist-results");
    results.innerHTML = `<h3>Tourist place ticket booked! Have a great trip.</h3>`;
}

// Book Sports Events
function bookSportsEvents() {
    let results = document.getElementById("sports-results");
    results.innerHTML = `<h3>Sports event ticket booked successfully! Enjoy the match.</h3>`;
}

// Book Cultural & Music Events
function bookEvents() {
    let results = document.getElementById("events-results");
    results.innerHTML = `<h3>Your event ticket has been booked successfully. Have fun!</h3>`;
}
