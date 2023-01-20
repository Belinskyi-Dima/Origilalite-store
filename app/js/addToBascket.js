import getCard from './getCardList.js';

const btnBascket = document.querySelector(".bascket-btn");
const addError = document.querySelector('.add-error');


const cardList = await getCard();

btnBascket.addEventListener("click", addToBascket);

function addToBascket(e) {
	const cardId = document.querySelector(".card__content").dataset.id;
	const quantitySum = document.querySelector(".card__quantity-number").textContent;
	console.log(cardId);
	console.log(quantitySum);

	let queryHref = {};
	
	location.search.substring(1).split("&").forEach(item => {
		let param = item.split("=");
		queryHref[param[0]]= param[1]
	});
	console.log(queryHref);
	const id = cardList.products.find(item => item.id === queryHref.id);
	// console.log(id);
		if (!queryHref.color || !queryHref.size) {
			addError.style.display = "block";
		
		}
		if (queryHref.color && queryHref.size) {
			addError.classList.remove('is-hiden');
			
			const products = {
				products: []
			}
		
			const prod = {
				id: queryHref.id,
				delivery: false,
				sale: false,
				quantity: "",
				master: id.master,
				quantity: quantitySum
			}
			// console.log(queryHref);
			// console.log(prod);
		
			const bascketStorage = JSON.parse(localStorage.getItem("basket") || "[]");
		
			if(bascketStorage.products !== undefined && bascketStorage.products.length > 0) {
				const  productsArray = [];
				
				for (let i = 0; i < bascketStorage.products.length; i++) {
					if(bascketStorage.products[i].id !== prod.id) {
						productsArray.push(bascketStorage.products[i])
					} else {
						continue;
					}
				}
				productsArray.push(prod);
				products.products.push(...productsArray);
				localStorage.setItem("basket", JSON.stringify(products));
		
			} else  {
				products.products.push(prod);
				localStorage.setItem("basket", JSON.stringify(products));
			}

		}

	
}