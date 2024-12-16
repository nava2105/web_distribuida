const request = require('supertest');
const app = require('./app'); // Importa la app sin iniciar el servidor
let server;

describe('Pruebas de la aplicación', () => {
    // Antes de todas las pruebas, inicia el servidor
    beforeAll((done) => {
        server = app.listen(3000, () => {
            console.log('Servidor de pruebas iniciado en http://localhost:3000');
            done();
        });
    });

    // Cierra el servidor después de todas las pruebas
    afterAll((done) => {
        server.close(done);
    });

    test('GET / debe devolver el archivo index.html', async () => {
        const res = await request(server).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.header['content-type']).toMatch(/text\/html/);
    });

    test('GET /info debe devolver la IP local y el puerto', async () => {
        const res = await request(server).get('/info');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('port');
        expect(res.body).toHaveProperty('localIP');
        expect(res.body.localIP).toMatch(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/);
    });
});
