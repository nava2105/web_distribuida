const express = require('express');
const os = require('os');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

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

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para obtener información del servidor
app.get('/info', (req, res) => {
    const localIP = getLocalIP();
    res.json({
        port: PORT,
        localIP: localIP
    });
});

// Solo inicia el servidor si se ejecuta directamente
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
}

module.exports = app; // Exporta la app para las pruebas
