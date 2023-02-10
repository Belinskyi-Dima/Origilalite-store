import renderBasketCard from './renderBasketCard.js';
import  {quantitySum, basketQuantity, deliteCard} from './quantittySum.js';
// import {getCard} from './copyList.js';
import getCard from './getCardList.js';


const cards = await getCard();
basket()

  function basket() {
const basketList=	JSON.parse(localStorage.getItem("basket"));
// console.log(basketList);
const basketArr = [];
let basketObj = {};

const cardList =  basketList.products.filter(item=> {
	
	 cards.products.filter(el=>{
		if(el.id === item.id) {
		
			basketObj = {...el};
			basketObj.quantity = item.quantity
			basketArr.push(basketObj)
			
		}
	})
})
renderBasketCard(basketArr)
const btnCheckout = document.querySelector('.bascked__checkout-btn');
btnCheckout.addEventListener('click', (e)=>{

	window.location.assign(`http://localhost:3000/payment.html?order=${e.currentTarget.dataset.order}`)
})
// window.onload = (event) => {
	setTimeout(() => {
		const btnPluss = document.querySelectorAll('.pluss-btn');
		const btnMinus = document.querySelectorAll('.minus-btn');
		
		const btnDel = document.querySelectorAll('.bascket__btn-delite');

		btnPluss.forEach(item=> item.addEventListener('click', basketQuantity));
		btnMinus.forEach(item=> item.addEventListener('click', basketQuantity));
		btnDel.forEach(item=> item.addEventListener('click', deliteCard));


	 }, 500)



// }
}
export {basket};