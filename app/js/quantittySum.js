import getQueryVariable from'./location.js';
import getCard from './getCardList.js';
// import {basket} from './basket.js';

// const quantityBox = document.querySelector('.card__quantity');


const queryVarible = getQueryVariable();
const cardList = await getCard();

export default function quantitySum(e) {
	const quantityNum = document.querySelector('.card__quantity-number');
const quantityError = document.querySelector('.card__quantity-error');
	// const cardId = e.target.dataset.id
	// console.log(quantityNum);
	if(queryVarible.id ) {
		const goodsRest = cardList.inventory.find(el => queryVarible.id === el.id);
		console.log(goodsRest);
		if (!queryVarible.color || !queryVarible.size) {
			quantityError.style.display = "block";
		
		}
		if (queryVarible.color && queryVarible.size ) {
			let sum = quantityNum.textContent
		const operator = e.target.textContent;
			
			// console.log(typeof sum, sum);
		if (operator === "-" && Number(sum) >= "2") {
				// console.log(typeof sum );
				quantityNum.innerHTML = sum - 1
				return
			} else if(operator === "+" && Number(sum) <goodsRest.quantity)  {
				// console.log(typeof sum, Number(sum) < goodsRest.quantity);
				quantityNum.innerHTML = Number(sum) + 1;
			}
		}
	}  else {
	// 	const goodsRest = cardList.inventory.find(el =>cardId === el.id);
	// 	console.log(goodsRest);
	}}

	function basketQuantity(e) {
		// const bascketError = document.querySelector(".basket__quantity-error");
		const cardId = e.target.dataset.id
		const goodsRest = cardList.inventory.find(el => cardId === el.id);
		console.log(goodsRest);
		
		let count = 0;
	
		
		if (e.target.textContent === "+" ) {
			count = +e.currentTarget.previousElementSibling.value;
			if(count <  goodsRest.quantity){
				console.log(count);
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

		const basketListHtML = document.querySelectorAll(".shopping__item");
		const baskeNumber = document.querySelectorAll(".basket__quantity-number");
		
		const products = {
			products: []
		}
	
		let prod = {}
		const bascketStorage = JSON.parse(localStorage.getItem("basket") || "[]");
	
		bascketStorage.products.forEach(item => {
			// console.log(item);
			if(item.id === cardId) {
				prod = {...item, quantity: count.toString()}
				products.products.push(prod)
			} else {
				prod = {...item}
				products.products.push(prod)
			}
			
	
		} )
		// console.log(products);
		localStorage.setItem("basket", JSON.stringify(products) );
		setTimeout(()=> window.location.assign('http://localhost:3000/basket.html'), 800)
	}

	function deliteCard(e) {
		const cardId = e.currentTarget.dataset.id;
		const bascketStorage = JSON.parse(localStorage.getItem("basket") || "[]");
		const products = {
			products: []
		}
		bascketStorage.products.forEach(item => {
			if(item.id !== cardId) {
				products.products.push(item)
			}})
			localStorage.setItem("basket", JSON.stringify(products));
			window.location.assign('http://localhost:3000/basket.html');
	}
export {basketQuantity, quantitySum, deliteCard};


	
		// 	let quary = item.childNodes[1].lastElementChild.children[5].children[2].textContent;
		// 	console.log(quary);
		// 	if (operator === "+") {
		// 		item.childNodes[1].lastElementChild.children[5].children[2].textContent = Number(quary) + 1
		// 	} else {
		// 		item.childNodes[1].lastElementChild.children[5].children[2].textContent = Number(quary) - 1
		// 	}
		