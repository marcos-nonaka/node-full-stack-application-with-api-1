const express = require("express");
const Services = require("../services/services");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Seja bem Vindo ao nosso Sistema de Usuários.");
});

router.get("/usuarios/cadastrar", (req, res) => {
  res.render("usuarios/cadastrar");
});

router.get("/usuarios/Atualizar/:id_usuario/:nome/:email/:senha", (req, res) => {
  let usuarios = {
    id_usuario: req.params.id_usuario,
    nome: req.params.nome,
    email: req.params.email,
    senha: req.params.senha
  };
  res.render("usuarios/update", { usuarios });
});

//ROTA PARA SERVIÇO DE CREATE
router.post("/usuarios/Create", Services.UsuarioCreate);

//ROTA PARA O SERVIÇO LISTAR
router.get("/usuarios/listar", Services.UsuarioListar);

//ROTA PARA O SERVIÇO ALTERAR
router.post("/usuarios/Update", Services.UsuarioUpdate);

//ROTA PARA O SERVIÇO DE DELETE
router.post("/usuarios/Delete", Services.UsuarioDelete);

module.exports = router;