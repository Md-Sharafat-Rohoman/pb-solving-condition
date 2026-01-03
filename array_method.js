const products = [
  { name: "Mobile", color: "Black", brand: "Samsung", price: 25000 },
  { name: "Laptop", color: "Silver", brand: "HP", price: 65000 },
  { name: "Headphone", color: "White", brand: "Sony", price: 3000 },
  { name: "Smart Watch", color: "Black", brand: "Apple", price: 45000 },
  { name: "Keyboard", color: "Black", brand: "Logitech", price: 2500 },
  { name: "Mouse", color: "Gray", brand: "Dell", price: 1500 },
  { name: "Monitor", color: "Black", brand: "LG", price: 18000 },
  { name: "Tablet", color: "Gold", brand: "Xiaomi", price: 22000 },
  { name: "Speaker", color: "Blue", brand: "JBL", price: 7000 },
  { name: "Camera", color: "Black", brand: "Canon", price: 55000 }
];
// console.log(products)

// map
const price = products.map(product => product.price);
console.log(price);

// filter
const filter = products.filter(product => product.color !== 'Black');
console.log(filter)

// forEach
products.forEach(product => console.log(product.price));

// find
const finds = products.find(product => product.name === 'Camera');
console.log(finds);