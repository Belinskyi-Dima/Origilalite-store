// import {getCard} from './copyList.js';
import getCard from './getCardList.js';
import getQueryVariable from'./location.js';
// import colorsAign from './colorsAign.js';
import renderCard from './renderCard.js';
// import {} from './card-modal.js';
import quantitySum from './quantittySum.js';
import {urlSize, urlColor, urlChangeId} from './url.js';

//===================== derlete
const url = "base.json";
const cards = await getCard(url);
// window.onload = (event) => {}

const bascketBtn = document.querySelector('.bascket-btn');
const favoriteBtn = document.querySelector('.favorite__btn');

const btnPluss = document.querySelector('.btn-pluss');
const btnMinus = document.querySelector('.btn-minus');

const sizeList = document.querySelector('.card__size-list');

const queryVarible = getQueryVariable();
console.log("urla ",queryVarible);

function findCard(cards, id , color, size) {

	const { products: list , inventory} = cards;

	const b = list.find(el => id === el.id);
	const goodsRest = inventory.find(el => id === el.id);

	if(!queryVarible.color && !queryVarible.size) {

		const colorArr = [];
		const sizeArr =[]
		const colArr = list
	
		const filetColorList = list.filter(item => item.master === b.master);

		console.log(filetColorList);
		filetColorList.forEach(el => {
		if(colorArr.indexOf(el.colors) === -1) {
			colorArr.push(el.colors)
		}
		
	})

	
	const variantList = list.filter(item => item.master === b.master);

		variantList.forEach(el => {
			if(sizeArr.indexOf(el.size) === -1) {
				sizeArr.push(el.size)
			}
		})
		renderCard(b, colorArr, sizeArr)
		
	} else if(queryVarible.color  && !size) {
			console.log("aaa");
	
		const filterColorList = list.filter(item => item.master === b.master);

		const filterColorItems = filterColorList.filter(item => item.colors ===  color);
		const itemData = filterColorItems[0];
		const sizeArr = [];

		filterColorItems.forEach(el=>{
			if(sizeArr.indexOf(el.size) === -1) {
				sizeArr.push(el.size)
			}
		})


		renderCard(b, queryVarible.color, sizeArr)
	
	} else if(!queryVarible.color  && size) {
		const arrColors = []
	
		const masterList = list.filter(item => item.master === b.master);


		const sizeList = masterList.filter(item => item.size === size);
		sizeList.forEach(el => {
			arrColors.push(el.colors)
		})
		renderCard(b, arrColors, size, goodsRest)
	}
	if(color && size ) {
		favoriteBtn.classList.remove("disabled");
		bascketBtn.classList.remove("disabled");

	
		const masterList = list.filter(item => item.master === b.master);
	
	
		if (masterList.length > 1) {
			const colorList = masterList.filter(item => item.colors === color);
		
			const card = colorList.find(item => item.size === size);
		
			const cardid = card.id;
			
			if(cardid !== id) {
				urlSize(cardid);
			}
			
			renderCard(card, card.colors, card.size, goodsRest);
		} else {

			const masterList = list.filter(item => item.master === b.master);
			const c = masterList.filter(item=>item.colors === color)
			const v = c.find(item=> item.size === size)
		
			renderCard(v, v.colors, v.size, goodsRest);

		}
		
	}

}
findCard(cards, queryVarible.id, queryVarible.color, queryVarible.size)

// }
const colorItem = document.querySelectorAll('.card__color-link');
const sizeItem = document.querySelectorAll('.card__size-link');



colorItem.forEach(el=> {
	el.addEventListener('click', (e) =>{
		console.log(el);
		const colorObj = {}
		colorObj.color = e.currentTarget.lastElementChild.textContent;
		console.log("color cloick");
		console.log(e.currentTarget.lastElementChild.textContent);
		urlSize(e.currentTarget.lastElementChild.textContent)
	})
})

sizeItem.forEach(el=> {
	el.addEventListener('click', (e) =>{

		const sizeObj = {}
		sizeObj.size = e.currentTarget.textContent;
		// colorsAign(sizeObj)
		urlSize(e.currentTarget.textContent)
	})
})


btnMinus.addEventListener('click', quantitySum);
btnPluss.addEventListener('click', quantitySum);

