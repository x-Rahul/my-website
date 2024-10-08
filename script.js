// Handle form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the user's name and favorite sport
    var userName = document.getElementById('name').value;
    var userSport = document.getElementById('sport').value;

    // Display the result in the result section
    document.getElementById('result-name').innerText = userName;
    document.getElementById('result-sport').innerText = userSport;
    
    // Show the result section
    document.getElementById('result').style.display = 'block';
    
    // Clear the form
    document.getElementById('userForm').reset();
});
