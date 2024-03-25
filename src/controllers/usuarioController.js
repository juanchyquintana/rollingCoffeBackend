import Usuario from "../database/model/Usuario.js";
import { check, validationResult } from "express-validator";

const registrarUsuario = async (req, res) => {
  const { email } = req.body;
  const existeUsuario = await Usuario.findOne({ email });

  if (existeUsuario) {
    const error = new Error("El Email está en uso");
    return res.status(400).json({ mensaje: error.message });
  }

  try {
    const usuario = await Usuario.create(req.body);
    await usuario.save();

    res.status(201).json({
      mensaje: "Usuario creado correctamente!",
      email: usuario.email,
      nombre: usuario.nombre,
    });
    
  } catch (error) {
    console.log(error);
    res.status(404).json({ mensaje: "No se pudo crear el Usuario" });
  }
};

const validarRegistrar = async (req, res, next) => {
  await check("nombre")
    .notEmpty()
    .withMessage("El Nombre es Obligatorio")
    .run(req);
  await check("email")
    .isEmail()
    .withMessage("El Email debe ser válido")
    .run(req);
  await check("password")
    .notEmpty()
    .withMessage("El Password es Obligatorio")
    .run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errores: errors.array() });
  }

  next();
};

export { registrarUsuario, validarRegistrar };
