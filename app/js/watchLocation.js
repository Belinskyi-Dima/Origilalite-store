// export default function colorsAign(data) {
// let queryHref = {};

// ======================= mona delete????????????????
// 	 location.search.substring(1).split("&").forEach(item => {
// 		let param = item.split("=");
// 		queryHref[param[0]]= param[1]
// 	});


// 	if(data) {
// 		queryHref = {...queryHref,...data}
// 	}
// 	let http = window.location.href;
	
// 	if (queryHref.color) {
		
// 	} else if(queryHref.id) {
	
// 	}

// 	window.location.assign(`${http}&color=${queryHref.color}`);
	
	
	
// 	return queryHref;
// }

export default function watchAtLocation(id) {
	
	let queryHref = {};
	const addError = document.querySelector('.add-error');


	location.search.substring(1).split("&").forEach(item => {
		let param = item.split("=");
		queryHref[param[0]]= param[1]
	});

	console.log(queryHref);
	if (queryHref.color && queryHref.size) {
	
		addError.classList.remove('is-hiden');
		return true;
	
	} else {
		addError.style.display = "block";
		return false;
	}
	
}
