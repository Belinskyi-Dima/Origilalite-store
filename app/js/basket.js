import renderBasketCard from './renderBasketCard.js';
import  {quantitySum, basketQuantity, deliteCard} from './quantittySum.js';
import {getCard} from './copyList.js';


const cards = await getCard();
basket()
  function basket() {
const basketList=	JSON.parse(localStorage.getItem("basket"));

// console.log(basketList.products);
const basketArr = [];
let basketObj = {};

const cardList =  basketList.products.filter(item=> {

	 cards.products.filter(el=>{
		if(el.id === item.id) {
			// console.log(el);
			basketObj = {...el};
			basketObj.quantity = item.quantity
			basketArr.push(basketObj)
			
		}
	})
})
renderBasketCard(basketArr)

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