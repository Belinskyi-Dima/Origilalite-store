
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
