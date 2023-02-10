import watchLAtLocation from './watchLocation.js'

const favoriteBtn = document.querySelector('.favorite__btn ');
favoriteBtn.addEventListener('click', addToWishlist)


// const cardList = await getCard();
const modalRegistr = document.querySelector('.register-modal');
const body = document.querySelector('body');
function addToWishlist(e) {
	const cardId = document.querySelector(".card__content").dataset.id;
	
	const modalText = document.querySelector('.register-modal__text');

	// console.log(e.currentTarget);
	// const locationUrl = watchLAtLocation();
	// if (locationUrl) {
		const wishList  = [];

		const localWish = JSON.parse(localStorage.getItem("wishlist"));
		console.log(localWish);
		if (localWish !== null) {
			console.log(localWish.includes(cardId));
			if (localWish.includes(cardId)) {
				
				localWish.forEach(el => wishList.push(el));
				modalRegistr.style.display= "flex";
				modalText.innerHTML= "this product was added to wishlist";
				modalText.style.color = "red";
				body.classList.add('is-open')
			} else {
				localWish.forEach(el => wishList.push(el));
				wishList.push(cardId)
				modalRegistr.style.display= "flex";
				modalText.innerHTML= "you add product to wishlist";
				modalText.style.color = "green";
				body.classList.add('is-open')
			}
		
			
		} else{
			wishList.push(cardId)
			modalRegistr.style.display= "flex";
			modalText.innerHTML= "you add product to wishlist";
			modalText.style.color = "green";
			body.classList.add('is-open')
		}
		localStorage.setItem("wishlist", JSON.stringify(wishList));

	// }

	
}
modalRegistr.addEventListener("click", (e) => {
	modalRegistr.style.display = "none";
	body.classList.remove('is-open')
})