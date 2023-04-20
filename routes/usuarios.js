
const { Router } = require('express');
const { usuariosGet, 
        usuariosPost, 
        usuariosPut, 
        usuariosDelete,
        usuariosNF, 
        usuariosPatch } =  require('../controllers/usuarios');

const router = Router();
router.get('/', usuariosGet );
  // para actualizar BD
router.put('/:id', usuariosPut );
  // para crear recursos
router.post('/', usuariosPost );
router.delete('/:id',usuariosDelete );
router.patch('/', usuariosPatch );
// no me funciona para rutas no halladas
router.all('*/', usuariosNF );
module.exports = router;
