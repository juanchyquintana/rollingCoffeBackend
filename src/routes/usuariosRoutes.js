import { Router } from "express";
import { registrarUsuario, validarRegistrar } from "../controllers/usuarioController.js";

const router = Router()

router.post('/registrarse', validarRegistrar, registrarUsuario);

export default router