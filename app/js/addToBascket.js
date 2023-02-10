import getCard from './getCardList.js';
import watchAtLocation from './watchLocation.js'
import {basketCount} from './main.js'
const btnBascket = document.querySelector(".bascket-btn");


const cardList = await getCard();

btnBascket.addEventListener("click", addToBascket);

function addToBascket(e) {

	const cardId = e.currentTarget.dataset.id;
	const quantitySum = document.querySelector(".card__quantity-number").textContent;

	const modalRegistr = document.querySelector('.register-modal');
	const modalText = document.querySelector('.register-modal__text');
	const body = document.querySelector('body');

		const id = cardList.products.find(item => item.id === cardId);
		console.log(id);
		const products = {
						products: []
					}
				
					let prod = {
						id: cardId,
						delivery: false,
						sale: false,
						master: id.master,
						quantity: quantitySum,
						price: id.price,
						totalOrder: id.price * quantitySum
					}
					
			const bascketStorage = JSON.parse(localStorage.getItem("basket") || "[]");
			
				
			if(bascketStorage.products !== undefined && bascketStorage.products.length > 0) {
				const  productsArray = [];
				for (let i = 0; i < bascketStorage.products.length; i++) {
					if(bascketStorage.products[i].id == prod.id && bascketStorage.products[i].quantity === prod.quantity) {
						products.products = [...bascketStorage.products];
						modalRegistr.style.display= "flex";
						modalText.innerHTML= "this productis was added to basket";
						modalText.style.color = "red";
						body.classList.add('is-open')
					} else {
						if (bascketStorage.products[i].id == prod.id && bascketStorage.products[i].quantity !== prod.quantity) {
							const newBasket = bascketStorage.products.splice(i, 1)
							products.products = [...bascketStorage.products]
							products.products.push(prod);
						} else {
							products.products = [...bascketStorage.products]
							products.products.push(prod);
						}
						modalRegistr.style.display= "flex";
						modalText.innerHTML= "you add product to basket";
						modalText.style.color = "orange";
						body.classList.add('is-open')
						// basketCount()
					}
				}

				localStorage.setItem("basket", JSON.stringify(products));
				basketCount()
			} else  {
				products.products.push(prod);
				localStorage.setItem("basket", JSON.stringify(products));
				
				modalRegistr.style.display= "flex";
				modalText.innerHTML= " add product to basket";
				modalText.style.color = "green";
				body.classList.add('is-open')
				basketCount()
			}

	modalRegistr.addEventListener("click", (e) => {
		modalRegistr.style.display = "none";
		body.classList.remove('is-open')
	})
	
}