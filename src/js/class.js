class Product {
    constructor(code) {
        this.code = code;
    }
}

console.log(new Product("test"));
console.log(new Product(0));
console.log(new Product(true));
console.log(new Product(null));
console.log(new Product(undefined));