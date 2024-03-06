import { Router } from "express";
import { listarProductos } from "../controllers/productoController.js";

const router = Router();

router.get("/productos", listarProductos);

export default router;
