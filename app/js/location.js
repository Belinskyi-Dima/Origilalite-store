// console.log(window.location);
// import detailCard from './detailCard.js'
export default function getQueryVariable(varible) {
	let queryDirect = {};

	location.search.substring(1).split("&").forEach(item => {
		let param = item.split("=");
		queryDirect[param[0]] = param[1];
	});

	// const vars = query.split("&");
	// console.log(query);
	// console.log(vars);
	
	// for(let i = 0; i < vars.length; i++) {
	// 	let pair = vars[i].split("=");
	// 	if (pair[0] === varible) {
	// 		return pair[1];
	// 	}
	// }
	// return false;
	// detailCard(queryDirect.id, queryDirect.color)
	return queryDirect;
}
// console.log(getQueryVariable());