// import {findCard} from './card.js'
import  getCard from'./getCardList.js'
import { urlId, urlSize } from './url.js';
// import newCard from './cardNew.js'
// import  './filters.js'
;
// const ul = document.querySelector('.cards__list');
const div = document.querySelector('.cards__list-wrapper');

const current = document.querySelector('.current').getAttribute('data-page');


const cards = await getCard();

const cardsList = cards.products.filter(item => item.class === current && item.type === "master")
// console.log(cardsList);
let b = [];
const a = cardsList.filter(item=> {
const c=	cards.products.find(it=> it.master === item.id )

b.push(c)
} )

function cardList (page) {
console.log(page);
// const ul = document.createElement('ul');
// ul.classList.add('cards__list')
// // console.log(b);
// console.log(ul);


div.innerHTML =`<ul class="cards__list"></ul>`;
const ul = document.querySelector('.cards__list');

		return page.forEach(({id, img, name, price}) => {
			// href="./card.html"
			ul.insertAdjacentHTML('beforeend', `
			<li class="cards__item" data-id="${id}" data-category="${current}" >
					<a class="cards__link">
						<div class="cards__img-wrapper">
							<picture>
								<img class="cards__img" src="${img}" srcset="${img} 340w" alt="img">
							</picture>
						</div>
						<h3 class="cards__name">${name}</h3>
						<span class="cards__price">${price}$</span>
					</a>
				</li>`)
		});
		
	}
	cardList(b);

const li = document.querySelectorAll(".cards__item");
// const page = document.getElementById('current-page');
// console.log(page);
li.forEach(el => {
	// console.log(el);
	
	
	el.addEventListener('click', urlId);
	// el.addEventListener('click', (e)=>{
		
		// console.log(e.currentTarget);
		// newCard(e.currentTarget.dataset.id)
	// 	urlId(e.currentTarget.dataset.id)
		
	// })

});

export {cardList};