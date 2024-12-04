// Obtener los datos del servidor
fetch('/info')
    .then(response => response.json())
    .then(data => {
        document.getElementById('port').textContent = data.port;
        document.getElementById('local-ip').textContent = data.localIP;
    });

// Función para recargar la página
document.getElementById('refresh-button').onclick = function() {
    location.reload();
};