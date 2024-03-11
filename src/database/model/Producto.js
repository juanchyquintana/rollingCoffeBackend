import mongoose from "mongoose"

const productoSchema = new mongoose.Schema({
    nombreProducto: {
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 50
    },
    precio: {
        type: Number,
        required: true,
        min: 50,
        max: 10000
    },
    imagen: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true
    },
    descripcionBreve: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    descripcionAmplia: {
        type: String,
        required: true,
        min: 50,
        max: 300
    }
})

const Producto = mongoose.model('producto', productoSchema)

export default Producto;