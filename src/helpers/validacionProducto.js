import { check } from "express-validator";

const validacionesProducto = (req, res) => {
    [
        check("nombreProducto")
          .notEmpty()
          .withMessage("El Nombre del producto de un dato Obligatorio")
          .isLength({min: 2, max: 50})
          .withMessage("El nombre del producto debe de tener entre 2 y 50 caracteres"),
        check("precio")
          .notEmpty()
          .withMessage("El Precio es un dato Obligatorio")
          .isNumeric()
          .withMessage("El Precio debe ser un número")
          .custom((value) => {
            if(value >= 50 && value <= 10000) {
              return true;
            } else {
              throw new Error("El Precio debe ser entre $50 y $10000")
            }
          })
    
      ]
}

export { validacionesProducto }