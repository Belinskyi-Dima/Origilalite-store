import getQueryVariable from'./location.js';
import {getCard} from './copyList.js';


// const url = "base.json";
// const cards = await getCard(url);

const image = document.querySelector('.card__img');
const cardName = document.querySelector('.card__info-name');
const cardPrice = document.querySelector('.card__info-peice');
const colorList = document.querySelector('.card__color-list');
const cardHtmlID = document.querySelector('.card__info-article');



const sizeList = document.querySelector('.card__size-list');
const sizeQuery = getQueryVariable().size
// console.log(typeof sizeQuery);

export default function renderCard(data, colorArr, sizeArr ) {
	// console.log(data);
	// console.log(sizeArr);
	// console.log(colorArr);
	
	const { img, name, price,  colors, size} = data;

	image.src = img;
	cardName.textContent = name;
	cardPrice.textContent = `${price} $`;
	cardHtmlID.textContent= data.id
// console.log(typeof colorArr === "string");
// console.log(colorArr);
if(typeof colorArr === "string") {
	
	colorList.insertAdjacentHTML('beforeend', `
	<li class="card__color-item">
		<a class="card__color-link" >
			<div class="card__color-circle ${colorArr}"></div>
			<p class="card__color-name">${colorArr}</p>
		</a>
	</li>
	`);
	
} else {

	colorArr.forEach(el => {
		// console.log(el);
		colorList.insertAdjacentHTML('beforeend', `
									<li class="card__color-item">
										<a class="card__color-link" >
											<div class="card__color-circle ${el}"></div>
											<p class="card__color-name">${el}</p>
										</a>
									</li>
									`);
		
	});
}
// console.log( sizeQuery === "undefined");
// console.log( sizeQuery === undefined);

// if( sizeQuery === undefined) {
	if( sizeQuery === undefined || sizeQuery === "undefined") {
		sizeArr.forEach(el => {
										sizeList.insertAdjacentHTML("beforeend", `
																	<li class="card__size-item">
																		<a class="card__size-link" >${el}</a>
																	</li>
																	`)
									})
} else if(sizeArr){
	sizeList.insertAdjacentHTML("beforeend", `
	<li class="card__size-item">
		<a class="card__size-link">${sizeArr}</a>
	</li>
	`)
}
	
}
