import { Router } from "express";
import {
  listarProductos,
  crearProductos,
  obtenerProducto,
  editarProducto
} from "../controllers/productoController.js";

const router = Router();

router.get("/productos", listarProductos);
router.post("/productos", crearProductos);

router.get("/producto/:id", obtenerProducto);
router.put('/producto/:id', editarProducto)

export default router;
