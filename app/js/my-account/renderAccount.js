// console.log(location.search.substring(1));
import { basketCount } from '../main.js';
import getCard from "../getCardList.js";

const cardList = await getCard();


function renderAccount(params) {
	const accountWrapper = document.querySelector('.my-account__wrapper');

	if(params === "profile") {
		accountWrapper.innerHTML = `
		<h3 class="my-account__title current">My prifile</h3>

				<form class="profile-form">
					<label class="form__label">
						<input class="form__input profile-input" type="email" placeholder="Email" data-name="email">
						<span class="form__input-name  profile-input__name">EMAIL ADRESS</span>
					</label>
					<label class="form__label">
						<input class="form__input profile-input" type="text" placeholder="Your first name">
						<span  class="form__input-name  profile-input__name">FIRST NAME</span>
					</label>
					<label class="form__label">
						<input class="form__input profile-input" type="text" placeholder="Your second name">
						<span  class="form__input-name  profile-input__name">SECOND NAME</span>
					</label>
					<label class="form__label">
						<input class="form__input profile-input" type="tel" placeholder="+ 38">
						<span  class="form__input-name  profile-input__name">MOBILE PHONE</span>
					</label>
					<label class="radio-label">
						<input class="profile__radio male" type="radio" name="contact" value="male">
						<span class="form__input-name  profile-input__name ">Male</span>
					</label>
					<label class="radio-label">
						<input class="profile__radio" type="radio"  name="contact" value="female">
						<span class="form__input-name  profile-input__name">Female</span>
					</label>
					
					<label class="form__label">
						<input class="form__input profile-input" type="date">
						<span  class="form__input-name  profile-input__name">BIRTHDAY</span>
					</label>
					<button class="form__btn" type="submit">save</button>
				</form>`
	} else if(params === "wishlist") {

		const wishlistStorage = JSON.parse(localStorage.getItem("wishlist"));
		const back = document.querySelector(".my-account__back");
		
		if(wishlistStorage !== null && wishlistStorage.length >= 1) {
			const wishList = [];
			for (let i = 0; i < wishlistStorage.length; i++) {
				const wishListFind  = cardList.products.find(item=> item.id === wishlistStorage[i]) ;
				wishList.push(wishListFind)
			}
			if(back) {
			back.insertAdjacentHTML(`afterend`, `<h2 class="wishlist-title">wishlist</h2>`);
			}
			accountWrapper.innerHTML = `<ul class="wishlist__list"></ul>`;
			const ul = document.querySelector('.wishlist__list');
			// console.log(ul);

			wishList.forEach(el => {

					ul.insertAdjacentHTML('beforeend', `
					<li class="wishlist__item" data-id=${el.id}>
										
						<div class="wishlist__item-wrapper">
						<div class="wishlist__item-img">
							<img class="wishlist-img" src="${el.img}" alt="img">
						</div>
			
						<div class="wishlist__item-info">
							<h3 class="item__name">BLACK JAKET</h3>
							<span class="item__id">${el.id}</span>
							<div class="info-wrapper">	
								<span class="info-name">Price: </span>
								<span class="info-name">${el.price} $</span>
							</div>
							<div class="info-wrapper">	
								<span class="info-name">color: </span>
								<span class="info-name">${el.colors}</span>
							</div>
							<div class="info-wrapper">	
								<span class="info-name">size: </span>
								<span class="info-name">${el.size}</span>
							</div>
						</div>
						</div>
						<div class="btn__wrapper">
						<button class="wishlist__btn-delite" data-id="${el.id}" type="button">
							<svg class="wishlist__btn-icon" width="14" height="14">
								<use class="wishlist__btn-cross" href="./images/symbol.svg#icon-cross"></use>
							</svg>
						</button>
						<button class="btn__add-basket" data-id="${el.id}">add to bascket</button>
			
					
						</div>
			
			</li>`);

			const btnDelite = document.querySelectorAll('.wishlist__btn-delite');
			btnDelite.forEach(item=> item.addEventListener('click', delitFromWishlist));

			const btnBasket = document.querySelectorAll('.btn__add-basket');
			btnBasket.forEach(item => item.addEventListener('click', addBasket));

});
		} else if(params === "wishlist" || wishlistStorage.length < 1 || wishlistStorage === undefined) {
			accountWrapper.innerHTML = `<div class="wishlist-wrapper">
			<p class="wishlist-empty">Your wishlist is empty</p>
			</div>`
		}
	// 	
	} else if(params === "purchase") {
		accountWrapper.innerHTML = `<div class="wishlist-wrapper">
			<p class="wishlist-empty">You dont have purchase yet</p>
			</div>`
	} else if(params === "address-book") {
		accountWrapper.innerHTML = `<div class="wishlist-wrapper">
			<p class="wishlist-empty">Your address book empty </p>
			</div>`
	}
	// const section =	document.querySelector(".account-menu");
	// section.innerHTML = `<a class="my-account__back" href="./account-menu.html">Back</a>
	// <p>${params}</p>`;
}

renderAccount(location.search.substring(1));

// const queryVarible = getQueryVariable();
// console.log(location.search.substring(1).split('='));


// const btnDelite = document.querySelectorAll('.wishlist__btn-delite');
// const btnBasket = document.querySelectorAll('.btn__add-basket');
// const deliteModal =  document.querySelector('.delite-modal');
const body = document.querySelector('body');
// btnDelite.forEach(item => console.log(item))

// if(btnDelite ) {

	// btnDelite.forEach(item=> item.addEventListener('click', delitFromWishlist))
	
	// const btnDel =  document.querySelector('.modal-delite__btn');
	// const btnCancel =  document.querySelector('.modal-cancel__btn');

	function delitFromWishlist(e) {
		const deliteModal =  document.querySelector('.delite-modal');
		const btnDel =  document.querySelector('.modal-delite__btn');
		const btnCancel =  document.querySelector('.modal-cancel__btn');
		console.log(deliteModal);
		deliteModal.classList.add("is-open");
		body.classList.add('is-open');
		const cardId = e.currentTarget.dataset.id;

		btnDel.addEventListener('click',(e) => del(e, cardId));
		btnCancel.addEventListener('click', del);

	}

	function del(e , cardId) {
		const deliteModal =  document.querySelector('.delite-modal');
		console.log(e.currentTarget.dataset);
			if (e.currentTarget.dataset.atribute) {
				const wishListDom = document.querySelectorAll('.wishlist__item');
				// const cardId = e.currentTarget.dataset.id;
				// console.log(e.currentTarget.dataset.id);
				const wishLocal = JSON.parse(localStorage.getItem("wishlist"));
				const newWishlist = wishLocal.filter(item=> item !== cardId)
				console.log(newWishlist);
				localStorage.setItem("wishlist", JSON.stringify(newWishlist));
				wishListDom.forEach(item => {
					if(item.dataset.id == cardId) {
						item.style.display ="none";
					}
				})
				const wishLoca = JSON.parse(localStorage.getItem("wishlist"));
				if (wishLoca.length < 1) {
					const wistTitle = document.querySelector('.wishlist-title');
					if (wistTitle) {
						wistTitle.style.display ="none";
					}
					
					renderAccount("wishlist")
				}
				deliteModal.classList.remove("is-open");
				body.classList.remove('is-open');
			} else {
				deliteModal.classList.remove("is-open");
				body.classList.remove('is-open');
			}
	}

// }

// btnBasket.forEach(item => item.addEventListener('click', addBasket));
// const modalRegistr = document.querySelector('.register-modal');
// const modalText = document.querySelector('.register-modal__text');
// const body = document.querySelector('body');

// ================add Basket================
function addBasket(e) {
	const modalRegistr = document.querySelector('.register-modal');
	const modalText = document.querySelector('.register-modal__text');
	const wishListDom = document.querySelectorAll('.wishlist__item')
	const id = e.currentTarget.dataset.id;
	const card = cardList.products.find(item => item.id === id)
	const products = {
		products: []
	}

	const prod = {
		id: card.id,
		delivery: false,
		sale: false,
		master: card.master,
		quantity: "1",
		price: card.price,
		totalOrder: card.price
	}

	console.log(id);
	const basketlist = JSON.parse(localStorage.getItem("basket"))
	console.log(basketlist);
		if (basketlist) {
		const find = basketlist.products.find(item=>item.id === id)
		console.log(find);
		if (find) {
					modalRegistr.style.display= "flex";
					modalText.innerHTML= "this product has in basket";
					modalText.style.color = "red";
					body.classList.add('is-open')
		} else {
			const wishLocal = JSON.parse(localStorage.getItem("wishlist"));
			const newWishList = wishLocal.filter(item=> item !== id);
			console.log(newWishList);
			localStorage.setItem("wishlist", JSON.stringify(newWishList))
			products.products = [...basketlist.products, prod];
			localStorage.setItem("basket", JSON.stringify(products))
			wishListDom.forEach(item => {
				if(item.dataset.id == id) {
					item.style.display ="none";
				}
			})
			console.log(products);
			modalRegistr.style.display= "flex";
			modalText.innerHTML= "add to basket";
			modalText.style.color = "green";
			body.classList.add('is-open');
			basketCount();
	
		}
		const wishLoca = JSON.parse(localStorage.getItem("wishlist"));

		if (wishLoca.length < 1) {
			const wistTitle = document.querySelector('.wishlist-title');
			if (wistTitle) {
				wistTitle.style.display ="none";
			}
			
			renderAccount("wishlist")
		}
	
	} else {
		
		products.products.push(prod);
		localStorage.setItem("basket", JSON.stringify(products));
		const wishLocal = JSON.parse(localStorage.getItem("wishlist"));
		const newWishList = wishLocal.filter(item=> item !== id);
		// console.log(newWishList);
		localStorage.setItem("wishlist", JSON.stringify(newWishList))
		wishListDom.forEach(item => {
			if(item.dataset.id == id) {
				item.style.display ="none";
			}
		})
		modalRegistr.style.display= "flex";
		modalText.innerHTML= "add to basket";
		modalText.style.color = "green";
		body.classList.add('is-open');
		basketCount()

		const wishLoca = JSON.parse(localStorage.getItem("wishlist"));
		if (wishLoca.length < 1) {
			const wistTitle = document.querySelector('.wishlist-title');
			wistTitle.style.display ="none";
			renderAccount("wishlist")
		}
	}
		
	modalRegistr.addEventListener("click", (e) => {
		modalRegistr.style.display = "none";
		body.classList.remove('is-open')
	})
}

export {renderAccount};