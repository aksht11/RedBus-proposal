// Dummy data for restaurants and rest points// ... (previous code)

function showRestPoints() {
    document.getElementById("options-section").style.display = "none";
    document.getElementById("rest-points").style.display = "block";
    alert("Showing rest points near your route.");
    // Your logic to show rest points

    // Example: Displaying images dynamically (replace with your actual logic)
    displayImages(restPointsData, 'rest-points');
}

function showRestaurants() {
    document.getElementById("options-section").style.display = "none";
    document.getElementById("restaurants").style.display = "block";
    alert("Showing restaurants near your route.");
    // Your logic to show restaurants

    // Example: Displaying images dynamically (replace with your actual logic)
    displayImages(restaurantsData, 'restaurants');
}

// ... (remaining code)

const restaurantsData = [
    { name: "Restaurant A", image: "restaurant_a.jpg" },
    { name: "Restaurant B", image: "restaurant_b.jpg" },
    { name: "Restaurant C", image: "restaurant_c.jpg" },
];

const restPointsData = [
    { name: "Rest Point X", image: "rest_point_x.jpg" },
    { name: "Rest Point Y", image: "rest_point_y.jpg" },
    { name: "Rest Point Z", image: "rest_point_z.jpg" },
];

// Function to show boarding and dropping points
function showBoardingDropping() {
    document.getElementById("booking-section").style.display = "none";
    document.getElementById("points-section").style.display = "block";
}

// Function to show additional options
function showOptions() {
    document.getElementById("points-section").style.display = "none";
    document.getElementById("options-section").style.display = "block";
}


let selectedCities = {};

function showCitySelection() {
    document.getElementById("city-selection-section").style.display = "block";
    document.getElementById("booking-section").style.display = "none";
    // Reset other sections if needed
    // ...
}

function showBusOptions() {
    // Get selected cities and travel date
    selectedCities.fromCity = document.getElementById("fromCity").value;
    selectedCities.toCity = document.getElementById("toCity").value;
    selectedCities.travelDate = document.getElementById("travelDate").value;

    document.getElementById("city-selection-section").style.display = "none";
    document.getElementById("booking-section").style.display = "block";
    // Reset other sections if needed
    // ...
}

// Global variable to store selected cities and travel date
let selectedCities = {};

function showCitySelection() {
    document.getElementById("city-selection-section").style.display = "block";
    document.getElementById("booking-section").style.display = "none";
    // Reset other sections if needed
    // ...
}

function showBusOptions() {
    // Get selected cities and travel date
    selectedCities.fromCity = document.getElementById("fromCity").value;
    selectedCities.toCity = document.getElementById("toCity").value;
    selectedCities.travelDate = document.getElementById("travelDate").value;

    document.getElementById("city-selection-section").style.display = "none";
    document.getElementById("booking-section").style.display = "block";
    // Reset other sections if needed
    // ...
}

// Rest of the functions remain the same


// Function to show rest points
function showRestPoints() {
    alert("Showing rest points near your route.");
    // Your logic to show rest points

    // Example: Displaying images dynamically (replace with your actual logic)
    displayImages(restPointsData, 'rest-points');
}

// Function to show restaurants
function showRestaurants() {
    alert("Showing restaurants near your route.");
    // Your logic to show restaurants

    // Example: Displaying images dynamically (replace with your actual logic)
    displayImages(restaurantsData, 'restaurants');
}

// Function to prebook meals
function prebookMeals() {
    alert("You have prebooked your meals.");
}

// Function to display images dynamically
function displayImages(data, sectionId) {
    const section = document.getElementById(sectionId);

    // Clear existing content
    section.innerHTML = '';

    // Create image containers dynamically
    data.forEach(item => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;

        const description = document.createElement('p');
        description.textContent = `${item.name} Description`;

        imageContainer.appendChild(image);
        imageContainer.appendChild(description);

        section.appendChild(imageContainer);
    });
}

// Your other JavaScript code goes here...

// Ensure that the script is loaded at the end of the HTML body
