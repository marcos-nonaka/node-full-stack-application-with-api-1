////////////////MÓDULOS /////////////////////
const express = require("express");
const router = express.Router();

////////////CONTROLLER///////////////////
const usuarioController = require("../controller/usuarioController");

////////////////Requisições HTTP Principal /////////////////////
router.get("/",(req, res) => {
  return res.json({message: "Sistema de Lista de Usuários"});
})

////////////////Requisições HTTP Usuario /////////////////////
//POST - CADASTRAR
router.post("/usuarios/Cadastrar", usuarioController.UsuarioCreate); //GET - LISTAR
router.get("/usuarios/:id?", usuarioController.UsuarioListar);
//PUT - UPDATE
router.put("/usuarios/:id", usuarioController.UsuarioUpdate);
//DELETE
router.delete("/usuarios/:id", usuarioController.UsuarioDelete);

module.exports = router;