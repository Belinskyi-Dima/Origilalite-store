import {renderAccount} from './renderAccount.js';

const btn = document.querySelectorAll(".account-menu__item");
const btnDesctop = document.querySelectorAll(".desctop-menu__item");
const http = 'http://localhost:3000/account-menu.html?';
// console.log(btnDesctop);
btn.forEach(item=> item.addEventListener('click', myAccaount));

(function () { 
	// console.log(document.body.clientWidth);
	// window.addEventListener('resize', function() {
		if (document.body.clientWidth > 1199) {
			// console.log('Current width : %s', document.body.clientWidth);
			btnDesctop.forEach(item=> item.addEventListener('click', descAccount))
	const current = document.querySelector('.desctop-menu__link.current');
	window.history.pushState({}, "",  `${http}page=${current.parentNode.attributes[1].nodeValue}`);
	const locationPage = location.search.substring(1).split('=');
	renderAccount(locationPage[1]);
		}
	 
	// });
 })();

// if (btnDesctop) {
// 	btnDesctop.forEach(item=> item.addEventListener('click', descAccount))
// 	const current = document.querySelector('.desctop-menu__link.current');
// 	window.history.pushState({}, "",  `${http}${current.parentNode.attributes[1].nodeValue}`);
// 	renderAccount(location.search.substring(1));
// 	// console.log(current.parentNode.attributes[1].nodeValue);
// }
// const http = 'http://localhost:3000/my-account.html?';

function myAccaount(e) {
	console.log(e.currentTarget.dataset.btn);
	const http = 'http://localhost:3000/my-account.html?';
	window.location.assign(`${http}${e.currentTarget.dataset.btn}`)
	
}

function descAccount (e) {
	// alert("aaa")
	const current = document.querySelectorAll('.desctop-menu__link');
	
	current.forEach(item=> {
		item.classList.remove('current')

		if (item.parentNode.attributes[1].nodeValue === e.currentTarget.dataset.btn) {
			item.classList.add('current');
			
		}
		
	})
	// console.log(e.currentTarget.dataset.btn);
	window.history.pushState({}, "",  `${http}page=${e.currentTarget.dataset.btn}`);
	const locationPage = location.search.substring(1).split('=');
	renderAccount(locationPage[1]);
}