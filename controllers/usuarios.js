const { response, request } = require('express');
const usuariosGet = (req = request, res = response) => {
    const { q, nombre = 'No name', apikey } = req.query;
    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
    });
}
const usuariosPost = (req, res = response) => {
    // el Body llega en el request
    // generalmente este se limpia de script o
    // otras cosas que suelen lleguar con el 
    const { nombre, edad } = req.body;
    res.json({
        msg: 'post API - Usuario Post',
        nombre,
        edad
    });
}
const usuariosPut = (req, res = response) => {
    const {id} = req.params;
    res.json({
        msg: 'put API - Usuario Put',
        id
    });
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - Usuario Patch'
    });
}
const usuariosDelete = (req, res = response) => {
    const {id} = req.params
    res.json({
        msg: 'delete API - Usuario Delete',
        id
    });
}
const usuariosNF = (req, res = response) => {
    res.json({
        msg: '**<404> Page not found'
    });
}



module.exports = {
    usuariosGet, usuariosPost, usuariosPut, 
    usuariosPatch, usuariosDelete, usuariosNF
}