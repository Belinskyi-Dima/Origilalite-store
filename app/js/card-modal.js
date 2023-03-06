const modalImg = document.querySelector('.modal__img');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');

export default function openModal(img) {

	modal.classList.add("modal-open");
	body.classList.add("is-open")
	modalImg.src = img.target.src;
	
}
modal.addEventListener("click", (e) =>{
	if(e.target.className.split(' ')[0]  === "modal") {
		modal.classList.remove("modal-open");
		body.classList.remove('is-open');
	}
	
})