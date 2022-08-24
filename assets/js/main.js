// Show / hide cart

function showCart() {
  document.querySelector('#cart-modal').style.display = 'block'
  document.querySelector('#cart-overlay').style.opacity = '1'
  document.querySelector('#cart-contents').classList.add('active')
}
document.querySelector('#icon-cart').onclick = showCart 


function hideCart() {
  document.querySelector('#cart-modal').style.display = 'none'
  document.querySelector('#cart-overlay').style.opacity = '0'
  document.querySelector('#cart-contents').classList.remove('active')
}
document.querySelector('#icon-close').onclick = hideCart 
