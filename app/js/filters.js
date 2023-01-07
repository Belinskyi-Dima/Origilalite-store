import getCard from './getCardList.js';
import getQueryVariable from'./location.js';
const cards = await getCard();

function filterIdList (id, color,size) {
	const queryUrl = getQueryVariable();
	console.log(queryUrl.id);
	console.log(queryUrl.color);
	console.log(queryUrl.size);

	const filterColorList = cards.products.filter(item => item.master === id);
	// console.log(filterColorList);
	return filterColorList
	// console.log(color);
	// console.log(size);
} 

export {filterIdList};