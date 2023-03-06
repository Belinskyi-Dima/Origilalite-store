let globalX = 0;
let globalY = 0;

document.addEventListener('mousemove', (e)=> {
	globalX = e.pageX;
	globalY = e.pageY;
	// console.log(globalY, globalX);
})
const imgLink = document.querySelector('.card__img-link');
let overlay = document.querySelector('.zoom-img-overlay');
// console.log(document.body.offsetWidth);

imgLink.addEventListener('mousemove', ()=> {
	console.log( document.body.clientWidth > 1000);
	const cardImg = document.querySelector('.card__img');
	if (document.body.clientWidth > 1000) {
		overlay.classList.remove('disabled');

		let zoom = 5;
	let img = imgLink.childNodes[3].getAttribute('src');
	let imgBlock = imgLink;
	// console.log(imgBlock.offsetHeight);
	let imgWidth = imgBlock.offsetWidth;
	let imgHeight =  imgBlock.offsetHeight;
	// let overlay = document.querySelector('.zoom-img-overlay');
	let cursor = document.querySelector('.zoom-img-cursor');

	cursor.style.width = overlay.offsetWidth / zoom + 'px'; 
	cursor.style.height = overlay.offsetHeight / zoom + 'px'; 

	let cursorWidth = cursor.offsetWidth;
	let cursorHeight = cursor.offsetHeight;

	const  rect = imgLink.getBoundingClientRect();

const offset = { 
                top: rect.top + window.scrollY, 
                left: rect.left , 
            };

	let posX = globalX - offset.left - cursorWidth / 2;
	let posY = globalY - offset.top - cursorHeight / 2;
				if (posX < 0) {
					posX = 0;
				}
				if (posX > (imgWidth- cursorWidth)) {
					posX = imgWidth- cursorWidth;
				}
				if (posY < 0 ) {
					posY = 0;
				}
				if (posY > imgHeight - cursorHeight ) {
					posY = imgHeight - cursorHeight;
				}

	cursor.style.left = posX + "px";
	cursor.style.top = posY + "px";
	cursor.style.display = "block";

				posX *= zoom;
				posY *= zoom;
	overlay.style.backgroundImage = `url(${img})`;
	// overlay.style.backgroundImage = `url(../../images/card/woman11.jpg)`;
	overlay.style.backgroundSize = (imgWidth * zoom) + 'px';
	overlay.style.backgroundPosition = `-${posX}px -${posY}px`;
	overlay.style.display = "block";
	// document.body.classList.add('is-open')

		cardImg.classList.add('disabled');


	} else {
		cardImg.classList.remove('disabled');
		overlay.classList.add('disable')
	}
	
})

imgLink.addEventListener('mouseleave', () => {
	let cursor = document.querySelector('.zoom-img-cursor');
	cursor.style.display = "none";
	overlay.style.display = "none";
});