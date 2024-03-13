import { Router } from "express";
import {
  listarProductos,
  crearProductos,
  obtenerProducto,
} from "../controllers/productoController.js";

const router = Router();

router.get("/productos", listarProductos);
router.post("/productos", crearProductos);

router.get("/producto/:id", obtenerProducto);

export default router;
