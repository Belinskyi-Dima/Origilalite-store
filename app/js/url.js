const http = 'http://localhost:3000/card.html?';

function urlId(card) {
	let cardId = card.currentTarget.dataset.id;
	// console.log(cardId);
	// window.history.pushState({"id": http}, '', http)
	window.location.assign(`${http}id=${cardId}`);
}

function urlSize(data) {
		// console.log(data);
	let queryHref = {};
	const httpArr = [];
	
	httpArr.push(http)

	location.search.substring(1).split("&").forEach(item => {

		// if (item.length < 1) {
			// console.log("window.location.assign");
			// window.location.assign(`${http}id=${data}`);
		// } else {
			let param = item.split("=");
			// console.log(param);
			queryHref[param[0]]= param[1]

		// }


	});
	
	if(data > 0 && data < 20) {
		queryHref.size = data;
	} else if(data > 100) {
		queryHref.id = data;
	} else {
		queryHref.color = data;
	}
	
	for (const key in queryHref) {
		httpArr.push(`${key}=${queryHref[key]}`,"&")
	}

	const newHttp = httpArr.slice(0,-1).join("")

	// window.location.assign(`${newHttp}`);
	window.history.pushState({}, "",  `${newHttp}`);
}


	function urlChangeId({id}) {
	// 	let queryHref = {};
	// 	const httpArr = [];
	// 	location.search.substring(1).split("&").forEach(item => {
	// 		let param = item.split("=");
	// 		queryHref[param[0]]= param[1]
	// 	});
	// 	if(id) {
	// 		queryHref.id = id 
	// 	}
	// 	for (const key in queryHref) {
	// 		httpArr.push(`${key}=${queryHref[key]}`,"&")
	// 	}
	// 	const newHttp = httpArr.slice(0,-1).join("")
	// 	console.log(newHttp);
	// 	// window.location.assign(`${http}${newHttp}`);
	// 	console.log(queryHref);
	}

	function urlColor(data) {
		// 	console.log(data);
		// 	let queryHref = {};
		// 	location.search.substring(1).split("&").forEach(item => {
		// 			let param = item.split("=");
		// 			queryHref[param[0]]= param[1]
		// 		});
			
		// 		if(data) {
		// 			queryHref = {...queryHref, ...data}
		// 		}
		// 		window.location.assign(`${http}id=${queryHref.id}&color=${queryHref.color}`);
		// 		return queryHref;
			}
export {urlId, urlSize, urlColor, urlChangeId};