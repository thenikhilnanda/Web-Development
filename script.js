// Code to update cart count when a product is added to cart
let cartCount = 0;
const cartButton = document.querySelector('.cart');
cartButton.addEventListener('click', () => {
  cartCount++;
  cartButton.innerHTML = `<i class="fa fa-shopping-cart"></i> Cart (${cartCount})`;
});