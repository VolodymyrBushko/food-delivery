const {body} = require('express-validator');

module.exports = [

  body('name')
    .trim()
    .notEmpty()
    .isString()
    .isLength({min: 4, max: 20})
    .withMessage('invalid name'),

  body('price')
    .trim()
    .notEmpty()
    .isNumeric()
    .withMessage('invalid price'),

  body('category')
    .trim()
    .notEmpty()
    .isString()
    .withMessage('invalid category'),

  body('description')
    .trim()
    .notEmpty()
    .isString()
    .isLength({min: 6, max: 36})
    .withMessage('invalid description'),

  body('imageUrl')
    .trim()
    .notEmpty()
    .isString()
    .withMessage('invalid image url'),

  body('weight')
    .trim()
    .notEmpty()
    .isNumeric()
    .withMessage('invalid weight')

];
