class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`)
  }

  calculateTotal(salesTax) {
    return (this.price + (this.price * salesTax / 100)).toFixed(2);
  }
}


const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100);

const salesTax = 5; // 5%


product1.displayProduct();
const total1 = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total1}`)


product2.displayProduct();
const total2 = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total2}`);