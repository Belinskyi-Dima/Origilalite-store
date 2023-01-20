
// const li = document.createElement("li")

const totalSum = document.querySelector(".bascket-total__sum--")

export default function renderBasketCard(list=[]) {

	const shopingList = document.querySelector(".shopping__list");
	let total = 0;
	
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
				<input class="basket__quantity-number" type="number" value="${el.quantity}" />
				<button class="basket__quantity-btn pluss-btn "  data-id="${el.id}" type="button">+</button>
				
		</div>
		<span class="basket__quantity-error">you can't order this quantity</span>


			<div class="info-wrapper">	
				<span class="info-total">Total:</span>
				<span class="info-total info-total__sum">${el.price * el.quantity} $</span>
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
	// console.log(total);
	totalSum.textContent= `${total} $`;
	
}


// <span class="info-wrapper__quantity-number">${el.quantity}</span>
{/* <span class="card__quantity-error">
Please choose color and size</span> */}