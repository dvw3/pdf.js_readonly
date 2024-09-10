// cors.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.tudominio.com/datos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors' // Esto habilita CORS
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        // Aquí puedes manejar los datos recibidos
    })
    .catch(error => console.error('Hubo un problema con la solicitud fetch:', error));
});
