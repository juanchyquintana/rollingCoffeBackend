import Producto from '../database/model/Producto.js'

const listarProductos = async (req, res) => {
  console.log("holaaaa");

  res.send("enviar lista de productos..");
};

const crearProductos = async (req, res) => {
  try {
    const productoNuevo = await Producto.create(req.body)

    await productoNuevo.save()
    res.status(201).json({ mensaje: "Producto creado correctamente!"})
  } catch (error) {
    console.log(error)
    res.status(400).json({ mensaje: "Error al crear el Producto" })
  }
}

export { listarProductos, crearProductos };
