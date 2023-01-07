// import {findCard} from './card.js'
import  getCard from'./getCardList.js'
import { urlId } from './url.js';
// import  './filters.js'
;
const ul = document.querySelector('.cards__list');
const current = document.querySelector('.current').getAttribute('data-page');


const cards = await getCard();

function cardList (page) {

	const cardsList = page.filter(item => item.class === current && item.type === "master")

		return cardsList.forEach(({id, img, name, price}) => {
			// href="./card.html"
			ul.insertAdjacentHTML('beforeend', `
			<li class="cards__item" id="${id}" >
					<a class="cards__link"  >
						<div class="cards__img-wrapper">
							<picture>
								<img class="cards__img" src="${img}" alt="img">
							</picture>
						</div>
						<h3 class="cards__name">${name}</h3>
						<span class="cards__price">${price}$</span>
					</a>
				</li>`)
		});

	}
	cardList(cards.products);

const li = document.querySelectorAll(".cards__item");

li.forEach(el => {
	el.addEventListener('click', urlId)
});

export {getCard};