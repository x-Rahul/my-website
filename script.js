document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        sport: document.getElementById('sport').value
    };

    fetch('https://script.google.com/macros/s/YOUR-SCRIPT-ID/exec', {
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
