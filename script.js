document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        sport: document.getElementById('sport').value
    };

    fetch('https://script.google.com/macros/s/AKfycbwiLYGkLxRDUnrPfI2h2-o3nB4YZLOT1mYxa7HNChbP/dev', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("Data submitted successfully!");
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
