const totalprice = document.getElementById('total-price');
const cartitems = document.getElementById('cart-items');
const itemCard = document.getElementsByClassName('item-card');
 
for (let itemcard of itemCard ){
    const minusbutton = itemcard.querySelector(".minus-quantity-button");
    const productprice = itemcard.querySelector(".item-price");
    const addbutton = itemcard.querySelector(".shop-now");
    const itemname = itemcard.querySelector('.item-name');
    const itemsquantity = itemcard.querySelector('.items-quantity')
    
    addbutton.onclick = () => {
      itemsquantity.innerText ++ ;
        totalprice.innerText = parseInt(totalprice.innerText) + parseInt(productprice.innerText);
        cartitems.innerHTML += `<li">${itemname.innerText} </li>`; 
        itemsnumber ++ ; 
    
       
    }
    minusbutton.onclick = () => {

     
        if (parseInt(itemsquantity.innerText) > 0) {
          itemsquantity.innerText -- ;
          totalprice.innerText = parseInt(totalprice.innerText) - parseInt(productprice.innerText);
         
        }
      };
}