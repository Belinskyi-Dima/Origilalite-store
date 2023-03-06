"use strict";
import './location.js';
// import jsonInventory from './jsonInventory.js';
	

const burgerMenu = document.querySelector(".menu__btn");
const dropDawnMenu = document.querySelectorAll(".dropdawn__btn");
const mobileMenu = document.querySelector(".mobile-menu");

// const ul = document.querySelector('.cards__list');
const btnBascketLink = document.querySelector(".bascket-link");
// const bascetLink = document.querySelector('.bascket-link');


// const btnBascketCount = document.querySelector(".bascket-count");
// window.onload = (event) => {};
basketCount()
 function basketCount() {
	try {
		const storeCount =  JSON.parse(localStorage.getItem("basket"));
		// console.log(storeCount.products.length);
	if(storeCount.products.length !== undefined && storeCount.products.length > 0) {
		btnBascketLink.dataset.content = `${storeCount.products.length}`;
		

		btnBascketLink.classList.add('basket-count');
		// const btnBascketCount = window.getComputedStyle(document.querySelector(".bascket-count"), ':after').content;
		// console.log(btnBascketCount);
		setTimeout(() => {
			btnBascketLink.setAttribute('data-content', `${storeCount.products.length}`);
		 }, 800)
	} else {
		btnBascketLink.classList.remove('basket-count');
	}
	} catch (e) {
		// throw new Error(e.message)
		console.log(e.message);
	}
	
}

const search = document.querySelector(".search");
const filter = document.querySelector(".filter");

const inputCross = document.querySelector(".filter__input-cross");
const input = document.querySelector(".filter__input");



search.addEventListener("click", ()=> {
	filter.classList.toggle("filter-open");
})
inputCross.addEventListener("click", () => {
	input.value = "";
})


// btnBascketLink.addEventListener("click", bascketCount)

burgerMenu.addEventListener("click", ()=> {
	burgerMenu.classList.toggle("is-open");
	mobileMenu.classList.toggle("is-open");
	document.body.classList.toggle("menu-open");
});

dropDawnMenu.forEach(item =>{
	item.addEventListener("click", () => {
	
	item.nextElementSibling.classList.toggle("footer__list--open").nextElementSibling;
		})
})
// basketCount()
// function basketCount() {
// 	const basketList = JSON.parse(localStorage.getItem("basket")).products;
// 	const bascetLink = document.querySelector('.bascket-link');
// 	console.log(basketList);
// 	console.log(basketList.length);
// 	if (basketList.length >= 1) {
// 			if (bascetLink) {
// 				bascetLink.classList.add('basket-count');
// 				bascetLink.dataset = basketList.lengt;
// 			}
// 	} else {
// 		if (bascetLink) {
// 			bascetLink.classList.remove('basket-count');
// 	}
// 	}
// }
// =========filter leftdide menu=============


$(function () {
	$('.hero__slider').slick({
		dots: true,
		arrows:false,
		fade:true,
		autoplay:true
	})
})
export {basketCount}