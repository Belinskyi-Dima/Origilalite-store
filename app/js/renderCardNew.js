// import quantitySum from './quantittySum.js';
const btnPluss = document.querySelector('.btn-pluss');
const btnMinus = document.querySelector('.btn-minus');
const btnBascket = document.querySelector(".bascket-btn");

export default function renderCartNew ({id = "", img, name, price,  colors, size}, goodsRest= "1") {

	const cardContent = document.querySelector('.card__content');
	const image = document.querySelector('.card__img');
	const cardName = document.querySelector('.card__info-name');
	const cardPrice = document.querySelector('.card__info-peice');
	const cardHtmlID = document.querySelector('.card__info-article');

	const colorsCircle = document.querySelectorAll('.outside-circle');
	const colorsLink = document.querySelectorAll('.card__color-link');

	const sizesList = document.querySelectorAll('.card__size-link');

	const remainderNum = document.querySelector('.remainder-number');
	const quantityNum = document.querySelector('.card__quantity-number');





	// console.log(colors);
	// if(id.length < 1) {
		
	// }

	cardContent.dataset.id = `${id}`;
	image.src = img;
	cardName.textContent = name;
	cardPrice.textContent = `${price} $`;
	cardHtmlID.textContent = id;
	remainderNum.textContent = ` ${goodsRest.quantity} ` ;
	quantityNum.textContent = "1"

	colorsLink.forEach(el=> {
		// console.log(el.lastElementChild.textContent);
		el.classList.remove('current')
		if(el.lastElementChild.textContent === colors){
			el.classList.add("current")
		}
	});
	colorsCircle.forEach(el => {
	
		el.classList.remove('select');
		if(el.dataset.color === colors) {
			el.classList.add('select');
		}
	})

	sizesList.forEach(item=> {
		// console.log(item);
		item.classList.remove('current')
		if (item.dataset.size === size) {
			item.classList.add('current')
		}
	})
	btnMinus.dataset.id = id;
	btnPluss.dataset.id = id;
	btnBascket.dataset.id = id;
}
// btnMinus.addEventListener('click', quantitySum);
// btnPluss.addEventListener('click', quantitySum);