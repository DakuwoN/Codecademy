import products from "./products";

const productName: string = 'shirt';


const product = products.filter(product => product.name === productName)[0];

if (product.preOrder === true) {
  console.log('We will send you a message when shipped!')
}
console.log(product)

let shipping: number = 0;
let taxPercent: number;
let taxTotal: number;
let total: number;

let shippingAddress: string = '545 Atwood St, Pittsburgh, PA';

if (product.price >= 25){
  shipping = 0;
  console.log('We provide FREE SHIPPING on this order.')
} else if (product.price < 25) {
  shipping = 5;
}

if (shippingAddress.match('New York'))
{  taxPercent = 0.1;
} else {
  taxPercent = .05
}

taxTotal = product.price * taxPercent
total = product.price + taxTotal + shipping

console.log(product.name, shippingAddress, product.price, taxTotal, shipping, total)
