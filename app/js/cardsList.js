import getCardsList from './getCardList.js';

window.onload = function(){
	const ul = document.querySelector('.cards__list')

	const page = document.querySelector("[data-page]").dataset.page;
	// ===================delite

	async function cardList (page) {

	const cardsList = await	getCardsList();

	const womanList = cardsList.filter(item => item.class === page)
		
		return womanList.forEach(({id, img, name, price}) => {
		
			ul.insertAdjacentHTML('beforeend', `
			<li class="cards__item id="${id}">
					<a class="cards__link" href="">
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
	// cardList(page)
	
}
