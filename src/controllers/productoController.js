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
    const producto = await Producto.findById(req.params.id)
    res.status(200).json(producto)
  } catch (error) {
    console.log(error)
    res.status(404).json({ mensaje: 'No se pudo encontrar el Producto'})
  }
};

export { listarProductos, crearProductos, obtenerProducto };
