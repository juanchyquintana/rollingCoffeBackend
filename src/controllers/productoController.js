import { validationResult } from "express-validator";
import Producto from "../database/model/Producto.js";

const listarProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(404).json({ mensaje: "No se pudieron Listar los Productos" });
  }
};

const crearProductos = async (req, res) => {
  try {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() })
    }

    const productoNuevo = await Producto.create(req.body);
    await productoNuevo.save();
    res.status(201).json({ mensaje: "Producto creado correctamente!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "Error al crear el Producto" });
  }
};

const obtenerProducto = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    res.status(200).json(producto);
  } catch (error) {
    console.log(error);
    res.status(404).json({ mensaje: "No se pudo encontrar el Producto" });
  }
};

const editarProducto = async (req, res) => {
  try {
    const buscarProducto = await Producto.findById(req.params.id);
    if (!buscarProducto) {
      return res.status(404).json({ mensaje: "Producto No Encontrado" });
    }

    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "Producto Editado Correctamente!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al Editar el Producto" });
  }
};

const borrarProducto = async (req, res) => {
  try {
    const buscarProducto = await Producto.findById(req.params.id);
    if (!buscarProducto) {
      return res.status(404).json({ mensaje: "Producto No Encontrado" });
    }

    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "Producto Eliminado Correctamente!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al Eliminar el Producto" });
  }
};

export { listarProductos, crearProductos, obtenerProducto, editarProducto, borrarProducto};
