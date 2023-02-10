import getQueryVariable from './location.js'
const totalSum = document.querySelector('.total-sum');
console.log(getQueryVariable());
const location = getQueryVariable();
totalSum.textContent = `$ ${location.order}`; 