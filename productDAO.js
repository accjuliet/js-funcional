let fs = require('fs');
class ProductDAO {
    constructor(fileName) {
        this.fileName = fileName;
        let contents = fs.readFileSync(fileName, 'utf8');
        this.productData = JSON.parse(contents);
    }

    productsWithExistenceMoreThan(quantity){
        return this.productData.filter(product => product.existencia > quantity);
    }

    productsWithExistenceLessThan(quantity){
        return this.productData.filter(product => product.existencia < quantity);
    }

    productsWithSameClassificationAndPriceGreaterThan(price, classification){
        return this.productData.filter(product => product.clasificacion === classification && product.precio > price);
    }

    productsWithPriceBetween(number1,number2){
        return this.productData.filter(product => product.precio > number1 && product.precio < number2);
    }

    productsSameClassification(classificacion){
        return this.productData.filter(product => product.clasificacion === classificacion);
    }
}
module.exports = ProductDAO;

