
function assignedScore(score) {
    if (score < 0 || score > 100) {
        return "Please enter a score between 0 and 100.";
    } else if (score >= 90) {
        return "You earned an A.";
    } else if (score >= 80) {
        return "You earned a B.";
    } else if (score >= 70) {
        return "You earned a C.";
    } else if (score >= 60) {
        return "You earned a D.";
    } else {
        return "You earned an F.";
    }
}

// Find the HTML form with the ID "gradeForm" and listen for a submit event.
document.getElementById("gradeForm").addEventListener("submit", function(event) {
   
     // Prevent the form from refreshing the webpage when submitted.
    event.preventDefault();

     // Get the user's score from the input field and convert it into a number.
    let score = Number(document.getElementById("score").value);

    // Call the assignedScore function to calculate the letter grade.
    let result = assignedScore(score);

    document.getElementById("result").textContent = result;
});
