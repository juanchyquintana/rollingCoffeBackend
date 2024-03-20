import { Router } from "express";
import {
  listarProductos,
  crearProductos,
  obtenerProducto,
  editarProducto,
  borrarProducto,
} from "../controllers/productoController.js";
import { validacionesProducto } from "../helpers/validacionProducto.js";

const router = Router();

router.get("/productos", listarProductos);
router.post(
  "/productos",
  validacionesProducto,
  crearProductos
);

router.get("/productos/:id", obtenerProducto);
router.put("/productos/:id", editarProducto);
router.delete("/productos/:id", borrarProducto);

export default router;
