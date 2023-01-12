import {getCard} from './copyList.js';
import getQueryVariable from'./location.js';
import colorsAign from './colorsAign.js';
import renderCard from './renderCard.js';
import {} from './card-modal.js';
import quantitySum from './quantittySum.js'
import {urlSize, urlColor, urlChangeId} from './url.js'


const url = "base.json";
const cards = await getCard(url);

const bascketBtn = document.querySelector('.bascket-btn');
const favoriteBtn = document.querySelector('.favorite__btn');

const btnPluss = document.querySelector('.btn-pluss');
const btnMinus = document.querySelector('.btn-minus');

const sizeList = document.querySelector('.card__size-list');

const queryVarible = getQueryVariable();


function findCard(list, id , color, size) {

	const b = list.find(el => id === el.id);
	console.log(b.id);
	if(!queryVarible.color && !queryVarible.size) {

		const colorArr = [];
		const sizeArr =[]

		const filetColorList = list.filter(item => item.master === id);
		
		filetColorList.forEach(el => {
		if(colorArr.indexOf(el.colors) === -1) {
			colorArr.push(el.colors)
		}
		
	})

	const variantList = list.filter(item => item.master === id);
		variantList.forEach(el => {
			if(sizeArr.indexOf(el.size) === -1) {
				sizeArr.push(el.size)
			}
		})
		renderCard(b, colorArr, sizeArr)
		
	} else if(queryVarible.color  && !size) {
		
		const filterColorList = list.filter(item => item.master === id);
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
		const masterList = list.filter(item => item.master === id);
		const sizeList = masterList.filter(item => item.size === size);
		sizeList.forEach(el => {
			arrColors.push(el.colors)
		})
		renderCard(b, arrColors, size)
	}
	if(color && size ) {
		favoriteBtn.classList.remove("disabled");
		bascketBtn.classList.remove("disabled");

		const masterList = list.filter(item => item.master === id);

		if (masterList.length > 1) {
			const colorList = masterList.filter(item => item.colors === color);
			console.log(colorList);
			const card = colorList.find(item => item.size === size);
			const cardid = card.id;
			urlSize(cardid);
			renderCard(card, card.colors, card.size);
		} else {
			const a =  list.find(item => item.id === id);
			renderCard(a, a.colors, a.size);
		}
		
	}


	

}
findCard(cards.products, queryVarible.id, queryVarible.color, queryVarible.size)

// }
const colorItem = document.querySelectorAll('.card__color-link');
const sizeItem = document.querySelectorAll('.card__size-link');



colorItem.forEach(el=> {
	el.addEventListener('click', (e) =>{
		const colorObj = {}
		colorObj.color = e.currentTarget.lastElementChild.textContent;
		
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

