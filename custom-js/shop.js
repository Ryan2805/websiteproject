// shop.js



//var addtocart = document.getElementById('addtocart');
// add a listener for add to cart if such a button id is pressed
//addtocart.addEventListener("click", addToCart);


//function addToCart() {
  //  var total=localStorage.getItem('checkout');
   // total++;
   // localStorage.setItem('checkout',total);
  //  document.querySelector('#checkout').innerHTML=total;
//}

const addToCartButtons = document.querySelectorAll('.addtocart');


function addToCartHandler() {
  


  const checkoutCountElement = document.getElementById('checkoutCount');
  let count = parseInt(checkoutCountElement.innerText);
  count++;
  checkoutCountElement.innerText = count;
}


addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCartHandler);
});
