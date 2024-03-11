import Producto from '../database/model/Producto.js'

const listarProductos = async (req, res) => {
  console.log("holaaaa");

  res.send("enviar lista de productos..");
};

export { listarProductos };
