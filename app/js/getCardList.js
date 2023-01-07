
// const url = 'cards.json';
const url = "base.json";

// export default class Card {
// 	// static aaa = "AAA";
// 	// static logInfo (obj) {
// 	// 	console.log(obj);
// 	// }
// 	constructor({brand, model, price} = {}) {
// 		this.brand = brand;
// 	}

//  async changPrice() {
// 	await	fetch(url)
// 	.then(response =>  response.json())
// 	.then(data => {
// 			console.log(data);
			
// 	  })
// 	  .catch(function () {
// 			// this.dataError = true;
// 			console.log("aaa");
// 	  })
// 	}

// } 
// console.log("aaaaa");
// export default async function getCardsList(params) {
	
// 	const cardList = await fetch(url).then(res=> res.json()).then(data=>data)
// 	// console.log(cardList);
// 	return cardList;
// }
// console.log(getCardsList());
export default async function getCard(params) {
	const cardList = fetch(url).then(res=> res.json()).then(data=>data);
	
return cardList;
}
// console.log(getCard(url));
