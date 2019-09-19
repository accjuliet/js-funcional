const ProductDAO = require('./productDAO.js');

let productDAO = new ProductDAO('file.json');
//console.log(productDAO.productData);

    /*
        1) Número de productos con existencia mayor a 20.
        2) Número de productos con existencia menos a 15.
        3) Lista de productos con la misma clasificación y precio mayor 15.50
        4) Lista de productos con precio mayor a 20.30 y menor a 45.00
        5) Número de productos agrupados por su clasificación
    */
console.log('1) Número de productos con existencia mayor a 20.');
console.log(productDAO.productsWithExistenceMoreThan(20));

console.log('2) Número de productos con existencia menos a 15.');
console.log(productDAO.productsWithExistenceLessThan(15));

console.log('3) Lista de productos con la misma clasificación y precio mayor 15.50');
console.log(productDAO.productsWithSameClassificationAndPriceGreaterThan(15.5,'limpieza'));

console.log('4) Lista de productos con precio mayor a 20.30 y menor a 45.00');
console.log(productDAO.productsWithPriceBetween(20.3,45));

console.log('5) Número de productos agrupados por su clasificación');
console.log(productDAO.productsSameClassification('fruta'));