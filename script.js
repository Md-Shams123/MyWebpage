// Function to show the selected section and hide others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.getElementsByClassName("section");
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = "block";

    // Show specific content based on section
    if (sectionId === "about") {
        document.getElementById("about-text").style.display = "block";
    } else if (sectionId === "contact") {
        document.getElementById("contact-info").style.display = "block";
    }

    // Update active link
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
        }
    });
}

// Function for the "Click Me" button to change text
function changeText() {
    document.getElementById("demo").innerHTML = "You clicked the button!";
}

// Function to validate the form and show an alert
function validateForm() {
    let name = document.getElementById("name").value;
    if (name === "") {
        alert("Please enter your name!");
    } else if (name.length < 3) {
        alert("Name must be at least 3 characters long!");
    } else {
        alert("Form submitted! Hello, " + name);
    }
}

// Function to reset the form
function resetForm() {
    document.getElementById("myForm").reset();
}

// Show the Home section by default on page load
window.onload = function() {
    showSection("home");
};