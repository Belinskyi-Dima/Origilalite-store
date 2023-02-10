
// const li = document.createElement("li")

const totalSum = document.querySelector(".bascket-total__sum--");
const totalSumlist = document.querySelectorAll(`.info-total__sum`);
// const totalOrder = document.querySelector("[data-order]");
// console.log(totalOrder);

export default function renderBasketCard(list=[]) {

	const shopingList = document.querySelector(".shopping__list");
	let total = 0;
		// console.log(list);
		if (list.length < 1) {
			const total = document.querySelector('.bascket-total')
			shopingList.innerHTML = `<div class="empty-bag__wrapper">
				<p class="empty-bag">you bag is empty</p>
			</div>`
			total.classList.add('invisible')
		}
	list.forEach(el => {
		total += Number( el.price * el.quantity);
		shopingList.insertAdjacentHTML("beforeend", `
		<li class="shopping__item" data-id=${el.id}>
							
		<div class="shopping__item-wrapper">
			<div class="shopping__item-img">
				<img class="item-img" src="${el.img}" alt="img">
			</div>
			<div class="shopping__item-info">
				<h3 class="item-info__name">BLACK JAKET</h3>
				<span class="item-info__id">${el.id}</span>
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

			<div class="info-wrapper">
				<span class="info-name">quantity:</span>
				<button class="basket__quantity-btn minus-btn" data-id="${el.id}" type="button">-</button>
				<input class="basket__quantity-number" type="number" data-id="${el.id}" value="${el.quantity}" />
				<button class="basket__quantity-btn pluss-btn "  data-id="${el.id}" type="button">+</button>
				
		</div>
		<span class="basket__quantity-error">you can't order this quantity</span>


			<div class="info-wrapper">	
				<span class="info-total">Total:</span>
				<span class="info-total info-total__sum" data-id="${el.id}">${el.price * el.quantity} </span><span>$</span>
			</div>
			</div>
		</div>
	
	<button class="bascket__btn-delite" data-id="${el.id}" type="button">
		<svg class="bascket__btn-icon" width="14" height="14">
			<use  class="bascket__btn-cross" href="./images/symbol.svg#icon-cross"></use>
		</svg>
	</button>
	</li>`)
	});

	totalSumlist.forEach(el => {
		console.log(el);
		total += Number(el.textContent);
		

	});
	totalSum.textContent= total
	// console.log(total);
	// totalSum.textContent= `${total} $`;
	// totalOrder.dataset.order = `${total}`;
	
}


// <span class="info-wrapper__quantity-number">${el.quantity}</span>
{/* <span class="card__quantity-error">
Please choose color and size</span> */}