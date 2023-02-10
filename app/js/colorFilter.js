import getCard from './getCardList.js';
import {urlSize} from './url.js';
import renderCardNew from "./renderCardNew.js";
import getQueryVariable from'./location.js';

const cards = await getCard();

const colorsLink = document.querySelectorAll('.card__color-link');
	// const colorsCIrcle = document.querySelectorAll('.card__color-circle');
	const colorsCIrcle = document.querySelectorAll('.outside-circle');

	const size = document.querySelectorAll('.card__size-link');
	const errorColor = document.querySelector('.error-size');
	const cardObj = {};

export default function colorFilter(id) {


	const card = cards.products.find(item=> item.id === id);
	const cardColors = cards.products.filter(item=>{
		return item.master === card.master
		
	});

	const colorsArr = [];
	const filterColor = cardColors.filter(item => {
		if(!colorsArr.includes(item.colors) && item.colors !== undefined) {
			colorsArr.push(item.colors);
		}
		
	})

	colorsCIrcle.forEach(item => {
		const result = colorsArr.includes(item.dataset.color)
		if (!result) {
			item.classList.add("none");
		}
	})
	colorsLink.forEach(item=>item.addEventListener("click", (e)=> selectColor(e, card, id)))
}


	function selectColor(e, card) {
		const errorColor = document.querySelector('.error-color');
		const curentColor = e.currentTarget;
		cardObj.color = e.currentTarget.lastElementChild.textContent;
	
		const filterId = cards.products.filter(item => {
			return item.master === card.master

		})
		const filterCol = filterId.find(item=> item.colors === cardObj.color)
		// console.log(filterCol);
			if (filterCol) {
				const goodsRest = cards.inventory.find(el => filterCol.id === el.id);
				// console.log(goodsRest);
				urlSize(filterCol.id)
				urlSize(e.currentTarget.lastElementChild.textContent);
				renderCardNew(filterCol|| "", goodsRest);
				errorColor.style.display = 'none'
				filtSizeArr(filterCol)
				// console.log(filterCol);
			} else {
				errorColor.style.display = 'block'
			}
	}

	//------------ size filter -------------------
	
	// =============================
	function filtSizeArr( card) {
		const cardsMaster = cards.products.filter(item=> item.master === card.master);

	const sizeArr = [];
		const cardColors = cardsMaster.filter(item=>{
			if (item.colors === card.colors) {
				sizeArr.push(item.size)
			}
		});
	
		urlSize(sizeArr[0])
		sazeFil(sizeArr, card)
	}
// ==================================

	function sazeFil (arr) {
	
		 size.forEach(item=> {
				if(!arr.includes(item.dataset.size)) {
					item.classList.add("none");
				} else {
					item.classList.remove("none");
				}
				
		})
		
		
	}
	size.forEach(item=> item.addEventListener('click',(e)=> selectSize(e)))

	function selectSize( e, ) {
		
		const queryVarible = getQueryVariable();
		const card = cards.products.find(item=> item.id === queryVarible.id);

		if (e.currentTarget.classList[1] !== "none") {
			const sizeCurrent = e.currentTarget.dataset.size;
		size.forEach(item => {
			item.classList.remove('current')

		})
		const cardSize = cards.products.filter(item=> item.master === card.master && item.colors === card.colors && item.size === sizeCurrent);
		const goodsRest = cards.inventory.find(el => cardSize[0].id === el.id);
	
		urlSize(sizeCurrent)
		urlSize(cardSize[0].id)
		renderCardNew(cardSize[0] || "", goodsRest);
		errorColor.style.display="none"
		} else {
			errorColor.style.display="block"
		}
		

	}
	export { sazeFil, selectColor}