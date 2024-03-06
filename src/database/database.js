import mongoose from "mongoose";
import 'dotenv/config';

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL)

const datosConexion = mongoose.connection;
datosConexion.once('open',  () => {
    console.log('Base de Datos Conectada!')
})