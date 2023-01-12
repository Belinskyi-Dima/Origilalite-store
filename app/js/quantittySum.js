const quantityBox = document.querySelector('.card__quantity');
const quantityNum = document.querySelector('.card__quantity-number');

export default function quantitySum(e) {
	
	let sum = quantityNum.textContent
	const operator = e.target.textContent;
		
		console.log(typeof sum, sum);
	if (operator === "-" && Number(sum) >= "2") {
			console.log(typeof sum );
			quantityNum.innerHTML = sum - 1
			return
		} else if(operator === "+" && Number(sum) < "10")  {
			console.log(typeof sum, Number(sum) < "10");
			quantityNum.innerHTML = Number(sum) + 1;
		}
	}
		

