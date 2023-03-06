
const url = "base.json";


export default async function getCard(params) {
	const cardList = fetch(url).then(res=> res.json()).then(data=>data);
	
return cardList;
}

