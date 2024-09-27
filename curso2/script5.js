function createProduct(name){
    const product = {}

    product.name = name;
    product.details =  function(){
        console.log(`O nome do produto é ${this.name}`)
    }
    return product

}

const produto1 = new createProduct("Telcado");
console.log(produto1.name);
produto1.details();


const produto2 = new createProduct("Mouse");
console.log(produto2.name);
produto2.details();
