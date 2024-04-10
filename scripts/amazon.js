import {cart, addToCart} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';  



let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
  <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
      ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
        ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
      $ ${formatCurrency(product.priceCents)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

//console.log(productsHTML); 

document.querySelector('.js-products-grid')
.innerHTML = productsHTML;
//use DOM put the productsHTML inside the grid which from HTML




function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;

  console.log(cart);
}


document.querySelectorAll('.js-add-to-cart')
.forEach((button) =>{
  button.addEventListener('click', () =>{

    //console.log('Added Product');
    //console.log(button.dataset.productName);

    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity();

    /*

    CHECK IF PRODUCT ALREADY IN CART THEN INCREASE QUANTITY
    let matchingItem;
    cart.forEach((item) =>{
      if(productId === item.productId){
        matchingItem = item;
      }
    });

    if (matchingItem){
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1
      });
    }
    cart.push({
      productName: productName,
      quantity: 1
    });

    


    CALCULATE QUANTITY

    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    document.querySelector('.js-cart-quantity')
      .innerHTML = cartQuantity;

    console.log(cart);

    */
  });

}) ;
