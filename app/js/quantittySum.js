import getQueryVariable from'./location.js';
import getCard from './getCardList.js';
import renderBasketCard from './renderBasketCard.js';
import { basketCount } from './main.js';
// import {basket} from './basket.js';

// const quantityBox = document.querySelector('.card__quantity');


const queryVarible = getQueryVariable();
const cardList = await getCard();

const errorInventor = document.querySelector('.card__quantity-error')
const quantityNum = document.querySelector('.card__quantity-number');
export default function quantitySum(e) {

	const cardId = e.target.dataset.id
	const goodsRest = cardList.inventory.find(el => cardId === el.id);
	console.log(cardId);
		// if (queryVarible.color && queryVarible.size ) {
			let sum = quantityNum.textContent
		const operator = e.target.textContent;
			
			if (operator === "-" && Number(sum) >= "2") {
				quantityNum.innerHTML = sum - 1
					// return
			} else if(operator === "+" && Number(sum) < goodsRest.quantity)  {
					quantityNum.innerHTML = Number(sum) + 1;
			}
			if (sum >= goodsRest.quantity) {
				errorInventor.classList.add('is-hiden');
			} else {
				errorInventor.classList.remove('is-hiden');
			}
			console.log(sum,  quantityNum.textContent);
		// }
	}
// ====================== basket Quantity===================
	function basketQuantity(e) {
		// console.log(this.dataset.id);
	
		const cardId = e.target.dataset.id
		const goodsRest = cardList.inventory.find(el => cardId === el.id);
		// console.log(goodsRest);
		
		let count = 0;
		
		if (e.target.textContent === "+" ) {
			count = +e.currentTarget.previousElementSibling.value;
			if(count <  goodsRest.quantity){
				// console.log(count);
				count += 1;
				e.currentTarget.previousElementSibling.value = count;
			
			}
			//  else {
			// 	bascketError.style.display = "block";
			// }
		
		} else {
			count = +e.currentTarget.nextElementSibling.value
			if(count >  1) {
				count -= 1;
				e.currentTarget.nextElementSibling.value = count;
			}

		}
		const products = {
			products: []
		}
	
		let prod = {}
		const bascketStorage = JSON.parse(localStorage.getItem("basket") || "[]");
	
		bascketStorage.products.forEach(item => {
			// console.log(item);
			if(item.id === cardId) {
				prod = {...item, quantity: count.toString(), totalOrder: count.toString() * item.price}
				products.products.push(prod)
			} else {
				prod = {...item}
				products.products.push(prod)
			}
		} )
	
		localStorage.setItem("basket", JSON.stringify(products) );
		// setTimeout(()=> window.location.assign('http://localhost:3000/basket.html'), 800)
		const bascketSt = JSON.parse(localStorage.getItem("basket") || "[]");
		const card = cardList.products.find(el => cardId === el.id);
		const baskCard = bascketSt.products.find(item => item.id === card.id )

	
		const totalSumlist = document.querySelectorAll(`.info-total__sum`);

		const totalSumCard = [];
		totalSumlist.forEach( item => {
		if(item.dataset.id === cardId) {
			totalSumCard.push(item)
		}
		})
		totalSumCard[0].textContent = baskCard.quantity * card.price;
		const totalSum = document.querySelector(".bascket-total__sum--");
		const totalOrder = document.querySelector("[data-order]");
		
		let countTotal = 0;

	
		bascketSt.products.forEach(item=> {
			console.log(item);
			countTotal += item.totalOrder
			
		})
		console.log(countTotal);
		totalSum.textContent= `${countTotal} $`;
		totalOrder.dataset.order = `${countTotal}`;

	}
// ============delete==================
	function deliteCard(e) {
		
		const cardItem = document.querySelectorAll('.shopping__item');
		console.log(cardItem);
		const cardId = e.currentTarget.dataset.id;
		console.log(cardId);
		cardItem.forEach(item=> {
			if(item.dataset.id === cardId) {
				item.style.display = "none"
			}
		})
		const bascketStorage = JSON.parse(localStorage.getItem("basket") || "[]");
		const products = {
			products: []
		}
		bascketStorage.products.forEach(item => {
			if(item.id !== cardId) {
				products.products.push(item)
			}})
			if (products.length < 1) {
				renderBasketCard()
			}
			console.log(products);

			localStorage.setItem("basket", JSON.stringify(products));
			let count = 0
			products.products.forEach(item => {
				count += Number(item.totalOrder);
			})
			console.log(count);
			const totalSum = document.querySelector(`.bascket-total__sum--`);
		// 	console.log(totalSumlist);
		totalSum.textContent = count;
		// 	const totalSumCard = [];
		// totalSumlist.forEach( item => {
		// 	console.log(item);
		// if(item.dataset.id === cardId) {
		// 	totalSumCard.push(item)
		// }
		// })
		// console.log(totalSumCard[0].textContent);
		// totalSumCard[0].textContent = baskCard.quantity * card.price;
		// const totalSum = document.querySelector(".bascket-total__sum--");
		// const totalOrder = document.querySelector("[data-order]");
		// let countTotal = 0;
		// totalSumlist.forEach(item => countTotal += Number(item.textContent))
		// totalSum.textContent= `${countTotal} $`;
		// totalOrder.dataset.order = `${countTotal}`;
			
			// window.location.assign('http://localhost:3000/basket.html');
			basketCount()
	}
export {basketQuantity, quantitySum, deliteCard};


	
		// 	let quary = item.childNodes[1].lastElementChild.children[5].children[2].textContent;
		// 	console.log(quary);
		// 	if (operator === "+") {
		// 		item.childNodes[1].lastElementChild.children[5].children[2].textContent = Number(quary) + 1
		// 	} else {
		// 		item.childNodes[1].lastElementChild.children[5].children[2].textContent = Number(quary) - 1
		// 	}
		