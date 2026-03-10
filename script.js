const product = document.getElementById("product");
const quantity = document.getElementById("quantity");
const addBtn = document.getElementById("add-btn");
const cartContainer = document.getElementById("cartContainer");

addBtn.addEventListener("click", () => {
  const productValue = product.value;
  const quantityValue = quantity.value;
  console.log(productValue, quantityValue);
  displayCart(productValue, quantityValue);
  setLS(productValue, quantityValue)
});

const displayCart = (product, quantity) => {
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;
  cartContainer.appendChild(li);
  getLS(li)
};

const setLS = (product, quantity)=>{
    localStorage.setItem(product, quantity)
}

const getLS = (getProduct)=>{
    console.log(getProduct)
    localStorage.getItem(getProduct)
}