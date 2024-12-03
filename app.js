const express = require('express');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 80;

// Obtener la dirección IP local
const getLocalIP = () => {
    const interfaces = os.networkInterfaces();
    let localIP;

    for (const interfaceName in interfaces) {
        for (const iface of interfaces[interfaceName]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                localIP = iface.address;
            }
        }
    }
    return localIP || 'No se pudo determinar la dirección IP';
};

// Ruta principal
app.get('/', (req, res) => {
    const localIP = getLocalIP();
    res.send(`
        <h1>Hola Mateo Desde AWS</h1>
        <p>Servidor corriendo en el puerto: ${PORT}</p>
        <p>Dirección IP local: ${localIP}</p>
    `);
});

// Hacer que el servidor escuche en todas las direcciones IP
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});