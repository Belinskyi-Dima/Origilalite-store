"use strict";
import './location.js'

const burgerMenu = document.querySelector(".menu__btn");
const dropDawnMenu = document.querySelectorAll(".dropdawn__btn");
const mobileMenu = document.querySelector(".mobile-menu");

// const ul = document.querySelector('.cards__list');
const btnBascketLink = document.querySelector(".bascket-link");



// const btnBascketCount = document.querySelector(".bascket-count");
window.onload = (event) => {
	// const btnBascketCount = document.querySelector(".bascket-count");
	// console.log(btnBascketCount);
	
 };
 (function bascketCount() {
	
	try {
		const storeCount =  JSON.parse(localStorage.getItem("bascket"));
		// console.log(storeCount.products);
	if(storeCount.products.length !== undefined && storeCount.products.length > 0) {
		btnBascketLink.dataset.content = `${storeCount.products.length}`;
		// const btnBascketCount = window.getComputedStyle(document.querySelector(".bascket-count"), ':after').content;
		// console.log(btnBascketCount);
		setTimeout(() => {
			btnBascketLink.setAttribute('data-content', `${storeCount.products.length}`);
		 }, 1000)
	} 
	} catch (e) {
		// throw new Error(e.message)
		console.log(e.message);
	}
	
})()

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



$(function () {
	$('.hero__slider').slick({
		dots: true,
		arrows:false,
		fade:true,
		autoplay:true
	})
})
