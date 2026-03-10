const handleProductCart = () => {
  const productEl = document.getElementById("product");
  const quantityEl = document.getElementById("quantity");
  const product = productEl.value;
  const quantity = parseInt(quantityEl.value);
  displayCart(product, quantity);
  addProductToCart(product, quantity);
  productEl.value = "";
  quantityEl.value = "";
};

const getCart = () => {
  let cart = {};

  const cartJSON = localStorage.getItem("cart");
  if (cartJSON) {
    cart = JSON.parse(cartJSON);
  }
  return cart;
};

const addProductToCart = (product, quantity) => {
  const cart = getCart();
  if (cart[product]) {
    cart[product] += quantity;
  } else {
    cart[product] = quantity;
  }
  const cartJSON = JSON.stringify(cart);
  localStorage.setItem("cart", cartJSON);
};

const displayCart = (product, quantity) => {
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;
  const cartContainer = document.getElementById("cartContainer");
  cartContainer.appendChild(li);
};

const displayStoredProduct = () => {
  const cart = getCart();
  for (const product in cart) {
    const quantity = cart[product];
    displayCart(product, quantity);
  }
};

displayStoredProduct();

// My own logic not full code just try
// addBtn.addEventListener("click", () => {
//   const productValue = product.value;
//   const quantityValue = quantity.value;
//   displayCart(productValue, quantityValue);
//   setLS(productValue, quantityValue);
// });

// const displayCart = (product, quantity) => {
//   const li = document.createElement("li");
//   li.innerText = `${product}: ${quantity}`;
//   cartContainer.appendChild(li);
// };

// const setLS = (product, quantity) => {
//   localStorage.setItem(product, quantity);
// };
