import {getCard} from './copyList.js';
import getQueryVariable from'./location.js';
// import colorsAign from './colorsAign.js';
import renderCard from './renderCard.js';
// import {} from './card-modal.js';
import quantitySum from './quantittySum.js';
import {urlSize, urlColor, urlChangeId} from './url.js';


const url = "base.json";
const cards = await getCard(url);
// window.onload = (event) => {}

const bascketBtn = document.querySelector('.bascket-btn');
const favoriteBtn = document.querySelector('.favorite__btn');

const btnPluss = document.querySelector('.btn-pluss');
const btnMinus = document.querySelector('.btn-minus');

const sizeList = document.querySelector('.card__size-list');

const queryVarible = getQueryVariable();


function findCard(cards, id , color, size) {

	const { products: list , inventory} = cards;
// console.log(inventory);

	const b = list.find(el => id === el.id);
	// console.log(b);
	console.log(id);
	// for (let i = 0; i < list.length; i++) {
	// 	// console.log(list[i].id);
	// 	if (list[i].id === id) {
	// 		console.log(list[i+1].id);
	// 		b =list[i+1].id;
	// 	}
	// 	// console.log(list[i]);
	// }
	const goodsRest = inventory.find(el => id === el.id);

	
	// console.log(goodsRest);
	if(!queryVarible.color && !queryVarible.size) {

		const colorArr = [];
		const sizeArr =[]
		const colArr = list
		// const filetColorList = list.filter(item => item.master === id);
		const filetColorList = list.filter(item => item.master === b.master);

		console.log(filetColorList);
		filetColorList.forEach(el => {
		if(colorArr.indexOf(el.colors) === -1) {
			colorArr.push(el.colors)
		}
		
	})

	// const variantList = list.filter(item => item.master === id);
	const variantList = list.filter(item => item.master === b.master);

		variantList.forEach(el => {
			if(sizeArr.indexOf(el.size) === -1) {
				sizeArr.push(el.size)
			}
		})
		renderCard(b, colorArr, sizeArr)
		
	} else if(queryVarible.color  && !size) {
		
		// const filterColorList = list.filter(item => item.master === id);
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
		// const masterList = list.filter(item => item.master === id);
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

		// const masterList = list.filter(item => item.master === id);
		const masterList = list.filter(item => item.master === b.master);
	
		// console.log(masterList);
		if (masterList.length > 1) {
			const colorList = masterList.filter(item => item.colors === color);
			// console.log(colorList);
			const card = colorList.find(item => item.size === size);
		
			const cardid = card.id;
			// console.log(cardid);
			if(cardid !== id) {
				urlSize(cardid);
			}
			
			renderCard(card, card.colors, card.size, goodsRest);
		} else {
			// const a =  list.find(item => item.id === id);
			// const a =  list.find(item => item.id === b.master);
			const masterList = list.filter(item => item.master === b.master);
			const c = masterList.filter(item=>item.colors === color)
			const v = c.find(item=> item.size === size)
			// console.log(v.colors);
			// renderCard(a, a.colors, a.size, goodsRest);
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

