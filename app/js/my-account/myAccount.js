

const btn = document.querySelectorAll(".account-menu__item");

btn.forEach(item=> item.addEventListener('click', myAccaount));

const http = 'http://localhost:3000/my-account.html?';

function myAccaount(e) {
	// console.log(e.currentTarget.dataset.btn);
	window.location.assign(`${http}${e.currentTarget.dataset.btn}`)
	
}