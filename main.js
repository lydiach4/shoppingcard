const totalprice = document.getElementById('total-price');
const cartitems = document.getElementById('cart-items');
const itemCard = document.getElementsByClassName('item-card');

for (let itemcard of itemCard ){
    const minusbutton = itemcard.querySelector(".minus-quantity-button");
    const productprice = itemcard.querySelector(".item-price");
    const addbutton = itemcard.querySelector(".shop-now");
    const itemname = itemcard.querySelector('.item-name');
    addbutton.onclick = () => {
        totalprice.innerText = parseInt(totalprice.innerText) + parseInt(productprice.innerText);
        cartitems.innerHTML += `<li class="text-black">${itemname.innerText} </li>`; 
    
       
    }
    minusbutton.onclick = () => {
        if (totalprice.innerText > 0) {
         
          totalprice.innerText = parseInt(totalprice.innerText) - parseInt(productprice.innerText);
         
        }
      };
}