const { check, validationResult } = require('express-validator');

exports.checkYear = [
  check('year')
    .not().isEmpty().withMessage('missing year querystring attribute')
    .isInt().withMessage('year querystring attribute must be of type int'),  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {      
      console.log(JSON.stringify({class: "validar", method: "getValidarBoleta", errorCode: "400", error: "missing or incorrect year querystring attribute"}));
      return res.status(400).json("missing or incorrect year querystring attribute");
    }
    next();
  },
];
