export default function colorsAign(data) {
let queryHref = {};


	 location.search.substring(1).split("&").forEach(item => {
		let param = item.split("=");
		queryHref[param[0]]= param[1]
	});


	if(data) {
		queryHref = {...queryHref,...data}
	}
	let http = window.location.href;
	
	if (queryHref.color) {
		
	} else if(queryHref.id) {
	
	}

	window.location.assign(`${http}&color=${queryHref.color}`);
	
	
	
	return queryHref;
}

