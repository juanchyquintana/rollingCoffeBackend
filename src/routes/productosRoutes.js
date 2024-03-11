import { Router } from "express";
import { listarProductos, crearProductos } from "../controllers/productoController.js";

const router = Router();

router.get("/productos", listarProductos);
router.post('/productos', crearProductos)

export default router;
