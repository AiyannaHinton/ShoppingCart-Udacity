/* Create an array named products which you will use to add all of your product object literals that you create in the next step. 
  Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const products = [
  {
    name: "Cherry",
    price: 2.99,
    quantity: 0,
    productId: 1,
    image: "/images/cherry.jpg",
  },
  {
    name: "Orange",
    price: 1.99,
    quantity: 0,
    productId: 2,
    image: "/images/orange.jpg",
  },
  {
    name: "Strawberry",
    price: 3.50,
    quantity: 0,
    productId: 3,
    image: "/images/strawberry.jpg",
  },
];

// Declare an empty array named cart to hold the items in the cart
let cart = [];
let totalPaid = 0;

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  let product = products.find((item => item.productId === productId));
  if (!cart.includes(product)) {
    cart.push(product);
    increaseQuantity(productId);
  } else {
    increaseQuantity(productId);
  }
  }
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  // Find the product by productId and increase its quantity
  const product = cart.find((item) => item.productId === productId);
  product.quantity += 1;
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  // Find the product by productId
  const product = cart.find((item) => item.productId === productId);

  if (product.quantity > 1) {
    // Decrease quantity if greater than 1
    product.quantity -= 1;
  } else {
    product.quantity = 0;
    // Remove from cart if quantity is 1 or less
    removeProductFromCart(productId);
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  // Find the product by productId and remove it from the cart
  const productIndex = cart.findIndex((item) => item.productId === productId);
  if (productIndex !== -1) {
    cart[productIndex].quantity = 0;
    cart.splice(productIndex, 1);
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  let newcart = [];
  cart = newcart;
  }
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to the customer
*/
function pay(amount) {
  totalPaid += amount;
  const itemTotal = cartTotal();
  return totalPaid - itemTotal;
}

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
};