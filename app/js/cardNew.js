// import renderCard from "./renderCard.js";
import getCard from './getCardList.js';
import getQueryVariable from'./location.js';
import {urlSize} from './url.js';
import colorFilter, { sazeFil, selectColor} from './colorFilter.js'
import renderCartNew from './renderCardNew.js';
import quantitySum from './quantittySum.js';


const sizeList = document.querySelector('.card__size-list');


const cards = await getCard();
const queryVarible = getQueryVariable();


export default function newCard(id, color, size) {

	const colorsCIrcle = document.querySelectorAll('.outside-circle');


	const card = cards.products.find(item=> item.id === id);
	const goodsRest = cards.inventory.find(el => id === el.id);

	// console.log(goodsRest);
	// console.log(size);
	// console.log(card);
	
	
 if(!color && !size){
		colorFilter(id);
		const cardSize = cards.products.filter(item=>{
			return item.master === card.master
			
		});
		const arrSize = []
		const filtColor = cardSize.filter(item => {
			if (item.colors === card.colors) {
				arrSize.push(item.size)
			
			}
		})

		urlSize(card.colors)
		urlSize(card.size)
		sazeFil(arrSize, card)
		

		
		console.log("!color && !size");
	} else {
		
		colorFilter(id);
		const cardSize = cards.products.filter(item=>{
			return item.master === card.master
			
		});
	
		const arrSize = []
		const filtColor = cardSize.filter(item => {
			if (item.colors === card.colors) {
				arrSize.push(item.size)
			}
		})
		// console.log(arrSize);
		// console.log(card);
		sazeFil(arrSize)
		urlSize(size)
	}
	renderCartNew(card, goodsRest)


}
const btnPluss = document.querySelector('.btn-pluss');
const btnMinus = document.querySelector('.btn-minus');
	btnMinus.addEventListener('click', quantitySum);
	btnPluss.addEventListener('click', quantitySum);

newCard(queryVarible.id, queryVarible.color, queryVarible.size)




