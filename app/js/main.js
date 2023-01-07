"use strict";
import './location.js'
// import  "./copyList.js";
// import { Deferred } from "jquery";

// import Card from './woman.js';
// const card = new Card({
// 	brand: 'Audi',
// 	model: 'q3',
// 	price: '3500'
// });
// console.log(card.changPrice());
// const menuLink = document.querySelectorAll(".menu__link");
// const pages = document.querySelector(".woman-page");


const burgerMenu = document.querySelector(".menu__btn");
const dropDawnMenu = document.querySelectorAll(".dropdawn__btn");
const mobileMenu = document.querySelector(".mobile-menu");

// const ul = document.querySelector('.cards__list');

const search = document.querySelector(".search");
const filter = document.querySelector(".filter");

const inputCross = document.querySelector(".filter__input-cross");
const input = document.querySelector(".filter__input");

// menuLink.forEach(item => {
// 	console.log("aaa");
// 	item.addEventListener("click", getDataAtribut)

// })
// function getDataAtribut (item){
// 	console.log(item.currentTarget.dataset.page);
// 	return item.currentTarget.dataset.page
// 	// const dataName = item.currentTarget.dataset.page;
// 	// console.log(dataName);
// 	// pages.setAttribute("data", `${dataName}`)
// 	}

search.addEventListener("click", ()=> {
	filter.classList.toggle("filter-open");
})
inputCross.addEventListener("click", () => {
	input.value = "";
})


burgerMenu.addEventListener("click", ()=> {
	burgerMenu.classList.toggle("is-open");
	mobileMenu.classList.toggle("is-open");
	document.body.classList.toggle("menu-open");
});

dropDawnMenu.forEach(item =>{
	item.addEventListener("click", () => {
	
	item.nextElementSibling.classList.toggle("footer__list--open").nextElementSibling;
		})
} )



$(function () {
	$('.hero__slider').slick({
		dots: true,
		arrows:false,
		fade:true,
		autoplay:true
	})
})
// export default getDataAtribut;