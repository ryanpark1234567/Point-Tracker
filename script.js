// Initialize points for both players
let yourPoints = 0;
let classmatePoints = 0;

// Function to add points
function addPoints(person) {
    if (person === 'your') {
        yourPoints++;
        document.getElementById("yourPoints").textContent = yourPoints;
    } else if (person === 'classmate') {
        classmatePoints++;
        document.getElementById("classmatePoints").textContent = classmatePoints;
    }
}
