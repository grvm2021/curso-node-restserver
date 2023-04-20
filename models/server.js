const cors = require('cors');
const express = require('express');
class Server {
        constructor() {
            this.app = express();
            this.port = process.env.PORT || 30000;
            this.usuariosPath = '/api/usuarios';
            // middlewares
            this.middlewares();
            // rutas de mi aplicación
            this.routes();
        }
        middlewares() {
            // cors
            this.app.use(cors());
            // lectura y parseo del Body
            this.app.use( express.json() );
            // Directorio público
            this.app.use( express.static('public'));
        }
        routes() {
            this.app.use(this.usuariosPath, require('../routes/usuarios'));
        }
        listen() {
            this.app.listen( this.port, () => {
                console.log('Servidor corriendo en puerto', this.port)
            });
        }
}
module.exports = Server;
