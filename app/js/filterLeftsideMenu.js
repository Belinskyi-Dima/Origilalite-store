import getCard from './getCardList.js';
import {cardList} from './copyList.js';

const cards = await getCard();


const page = document.querySelector('[data-page').dataset.page;

const filterCard = cards.products.filter(el => el.class === page);
// console.log(filterCard)


const rangeInput = document.querySelectorAll('.range-input input');
const priceInput = document.querySelectorAll('.price-input input');

const progress = document.querySelector('.slider .progress');

const filterObj = {};

// let minValue = 0;
// let maxValue = 0;
// const selectColr = document.querySelector('.colors-circle.select-color').dataset.color;
// console.log(selectColr);
const debounce = (fn, ms) => {
	// console.log(fn);
	let timeout;
	return function () {
		const fnCall = () => {fn.apply(this, arguments )}
		clearTimeout(timeout);
		timeout = setTimeout(fnCall, ms)
		console.log("debau");
		// console.log(fnCall);
	}
}
const minMax = {
	min: "0",
	max: "800",
	color: ""
}
const selectColr = document.querySelector('.colors-circle.select-color').dataset.color;
console.log(selectColr);
minMax.color = selectColr;

function onChange(e) {

	let filterArray = []
	
		
			minMax.min = e.target.value;

	filterLeftSide()
}
function onChangeMax(e) {
	minMax.max = e.target.value;
	filterLeftSide()
	// a()
}




onChange = debounce(onChange, 2000);
onChangeMax = debounce(onChangeMax, 2000);
const rangeDebaunce = debounce(filterLeftSide, 2000);


document.querySelector('.input-min').addEventListener("keyup", onChange);
document.querySelector('.range-min').addEventListener("input", rangeDebaunce);
document.querySelector('.range-max').addEventListener("input", rangeDebaunce);


document.querySelector('.input-max').addEventListener("keyup", onChangeMax);


let priceGap = 100;
priceInput.forEach(item => {
	item.addEventListener('input', (e) => {
// console.log(e);
		let minVal = parseInt(priceInput[0].value);
		let maxVal = parseInt(priceInput[1].value);
	


		if ((maxVal - minVal >= priceGap) && maxVal <= 1000) {
		
			if(e.target.className === "input-min"){
				rangeInput[0].value = minVal;
				
				progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
			} else {
				rangeInput[1].value = maxVal;
				progress.style.right = 100 -(maxVal / rangeInput[1].max) * 100 + '%';

			}
			
		}
	})
	
})








rangeInput.forEach(item => {
	item.addEventListener('input', (e) => {
		let minVal = parseInt(rangeInput[0].value);
		let maxVal = parseInt(rangeInput[1].value);
		// console.log(minVal);
		// console.log(maxVal);	
		
		minMax.min = parseInt(rangeInput[0].value);
		minMax.max = parseInt(rangeInput[1].value);
		console.log(minMax);
		if (maxVal - minVal < priceGap) {
			if(e.target.className === "range-min"){
				rangeInput[0].value = maxVal - priceGap;

			} else {
				rangeInput[1].value = minVal + priceGap;
				
			}
			
		} else {
			priceInput[0].value = minVal;
			priceInput[1].value = maxVal;
			
			progress.style.right = 100 -(maxVal / rangeInput[1].max) * 100 + '%';
			progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
		}
		
	})
	// console.log(progress);
})



const colorItem = document.querySelectorAll('.colors-box__item');

colorItem.forEach(item=> item.addEventListener('click', (e)=> {
	const color = e.currentTarget.children[0].dataset.color;
	colorItem.forEach(item=> {
		item.firstElementChild.classList.remove('select-color');
	});
	item.firstElementChild.classList.add("select-color");
	console.log(color);
	filterObj.color = color;
	minMax.color = color;
	// filterColors(color)
	filterLeftSide()
	
}))

function filterColors(color) {

	const colorList = [];
	const colorNewList = [];

	const filter = filterCard.filter(item=> item.colors === minMax.color)
	// console.log(filter);

	for(let i = 0; i < filter.length; i++) {
		if(!colorList.includes(filter[i].master)) {
			colorList.push(filter[i].master);
			colorNewList.push(filter[i]);
		}
	}
	return colorNewList;
	// cardList(colorNewList)
}
function filterLeftSide() {
	console.log("rrrrr");
	const color = filterColors(minMax.color);
	console.log(minMax);
	const filterArray = 	color.filter(item => Number( item.price ) > Number( minMax.min) && Number( item.price ) <  Number( minMax.max))

		console.log(filterArray);
		cardList(filterArray)
	
}



