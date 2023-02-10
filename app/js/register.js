import renderRegistration from './renderRegister.js';

const btnRegister = document.querySelectorAll(".registration__button");
const eye = document.querySelectorAll(".icon-eye");

const form = document.querySelector(".form-registration");
// console.log(form);
// form.addEventListener("submit", sendForm);
if(form) {
	form.addEventListener("submit",  registr);
}
// form.addEventListener("submit",  registr);


// btnRegister.forEach(item => item.addEventListener('click', renderRegistration));
eye.forEach(item=> item.addEventListener("click", showPassword));



function showPassword(e) {
	// console.log(e.currentTarget.parentElement.firstElementChild.type);
	// console.log(e.currentTarget.lastElementChild.classList);
	// console.log(e.target);

	if(e.currentTarget.parentElement.firstElementChild.type === "password") {
		e.currentTarget.parentElement.firstElementChild.type = 'text';
		e.currentTarget.firstElementChild.classList.toggle('is-hiden');
		e.currentTarget.lastElementChild.classList.toggle('is-hiden');
	} else {
		e.currentTarget.parentElement.firstElementChild.type = 'password';
		e.currentTarget.firstElementChild.classList.toggle('is-hiden');
		e.currentTarget.lastElementChild.classList.toggle('is-hiden');
	}

	// const eyeBlocked = document.querySelector(".eye-blocked");
	// const eyeShow = document.querySelector(".eye-open");
	
	// if(inputPassword.type === "password") {
	// 	inputPassword.type = 'text';
	// 	eyeBlocked.classList.toggle("is-hiden");
	// 	eyeShow.classList.toggle("is-hiden");
	// }else {
	// 	inputPassword.type = 'password';
	// 	eyeBlocked.classList.toggle("is-hiden");
	// 	eyeShow.classList.toggle("is-hiden");
	// }
}
// const autorization = {
// 	users:[]
// };
// 	const user= {
// 		email: "nbsrthnrs@ergbe3",
// 		firstName: "dtrhjn",
// 		password: "2211122",
// 		secondName: "rsthnrs"
// 	}

// const userLocal = JSON.parse(localStorage.getItem("autorization" ))
// console.log(userLocal=== null);

function sendForm(e) {
	// alert("fgd")
// console.log(e.currentTarget.dataset.form);
// const currentForm = e.currentTarget.dataset.form;
	e.preventDefault();
	const autorization = {
		users:[]
	};
	const user = {
		id: Math.floor(100 + Math.random()*(10000 - 100 + 100))
	};

	const input = document.querySelectorAll('.form__input');
	const registrError = document.querySelector('.register-error');
	const modalRegistr = document.querySelector('.register-modal');
	const modalText = document.querySelector('.register-modal__text');

	input.forEach(item => {
		// console.log(item.value.length > 2);
		if(item.value.length > 2 && item.value !== null) {
			user[item.dataset.name]= item.value;
		} else {
			modalRegistr.style.display= "flex";
			modalText.innerHTML= "please Fill all input";
			modalText.style.color = "red";
		}
	})

	if (user.password && user.firstName && user.secondName ) {
		// console.log(user.password.length);
		if(user.password.length <= 5) {
			modalRegistr.style.display= "flex";
			modalText.innerHTML= "password must be longer than 5 characters";
			modalText.style.color = "red";
		} else if(user.password1 === user.password ) {

			delete user.password1;
			registrError.style.display = "none";
			const userLocal = JSON.parse(localStorage.getItem("autorization" ));
	
			if( userLocal === null  && Object.keys(user).length >= 1) {
			
				autorization.users.push(user);
				localStorage.setItem("autorization", JSON.stringify(autorization));
			} else if(userLocal !== null && Object.keys(user).length >= 1) {
	
				const dublicat = userLocal.users.filter (item => item.email === user.email )
				console.log(dublicat.length > 0);
				if(dublicat.length > 0) {
					userLocal.users.forEach(item => autorization.users.push(item))
					localStorage.setItem("autorization", JSON.stringify(autorization));
					modalRegistr.style.display= "flex";
					modalText.innerHTML= "this user we have";
					modalText.style.color = "red";
				} else {
					autorization.users.push(user);
					userLocal.users.forEach(item => autorization.users.push(item))
					localStorage.setItem("autorization", JSON.stringify(autorization));
						modalRegistr.style.display= "flex";
					modalText.innerHTML= "registration was successful";
					modalText.style.color = "green";
				}
			}
			
		}  else {
				registrError.style.display = "block";
			}
	}
	

		// if(user.password1 === user.password && user.password.length > 5) {
		// 	alert("qqq")
		// 	delete user.password1;
		// 	registrError.style.display = "none";
		// 	const userLocal = JSON.parse(localStorage.getItem("autorization" ));
	
		// 	if( userLocal === null  && Object.keys(user).length >= 1) {
			
		// 		autorization.users.push(user);
		// 		localStorage.setItem("autorization", JSON.stringify(autorization));
		// 	} else if(userLocal !== null && Object.keys(user).length >= 1) {
	
		// 		const dublicat = userLocal.users.filter (item => item.email === user.email )
		// 		console.log(dublicat.length > 0);
		// 		if(dublicat.length > 0) {
		// 			userLocal.users.forEach(item => autorization.users.push(item))
		// 			localStorage.setItem("autorization", JSON.stringify(autorization));
		// 			modalRegistr.style.display= "flex";
		// 			modalText.innerHTML= "this user we have";
		// 			modalText.style.color = "red";
		// 		} else {
		// 			autorization.users.push(user);
		// 			userLocal.users.forEach(item => autorization.users.push(item))
		// 			localStorage.setItem("autorization", JSON.stringify(autorization));
		// 				modalRegistr.style.display= "flex";
		// 			modalText.innerHTML= "registration was successful";
		// 			modalText.style.color = "green";
		// 		}
		// 	}
	
		// } else {
		// 	registrError.style.display = "block";
		// }

	
	
	// const userLocal = localStorage.getItem("autorization", )
	// localStorage.setItem("autorization", JSON.stringify(autorization));


	modalRegistr.addEventListener("click", (e) => {
		modalRegistr.style.display = "none";
		if(modalText.textContent === "registration was successful") {
			// window.location.assign(`http://localhost:3000/index.html`);
		}
		
		

		
	})

}
			// modalRegistr.style.display= "flex";
			// modalText.innerHTML= "registration was successful";
			// modalText.style.color = "green";
 function inputValidatior(e) {

	const input = document.querySelectorAll('.form__input');
	const registrError = document.querySelector('.register-error');
	const modalRegistr = document.querySelector('.register-modal');
	const modalText = document.querySelector('.register-modal__text');

	let isValid = true;
				
	input.forEach(item => {
		if(item.value.length >= 2 && item.value !== null) {
			
			if(item.type === "password") {
				if(item.value.length < 5) {
					modalRegistr.style.display= "flex";
					modalText.innerHTML= "password must be longer than 5 characters";
					modalText.style.color = "red";
					isValid = false
				}
			}
			
		} else {
			modalRegistr.style.display= "flex";
			modalText.innerHTML= "please Fill all input";
			modalText.style.color = "red";
			isValid = false
		}
		
	})
	return isValid
}

function registr(e) {
	e.preventDefault();
	alert("fgd")
	const input = document.querySelectorAll('.form__input');
	const registrError = document.querySelector('.register-error');
	const modalRegistr = document.querySelector('.register-modal');
	const modalText = document.querySelector('.register-modal__text');

	const autorization = {
		users:[]
	};
	const user = {
		id: String(Math.floor(100 + Math.random()*(10000 - 100 + 100)))
	};

	
	const validator = inputValidatior(e);
	console.log(validator);
	if(validator) {
		input.forEach(item => user[item.dataset.name] = item.value)
	
	
	if(user.password1 === user.password ) {

		delete user.password1;
		registrError.style.display = "none";
		const userLocal = JSON.parse(localStorage.getItem("autorization" ));

		if( userLocal === null  && Object.keys(user).length >= 1) {
		
			autorization.users.push(user);
			localStorage.setItem("autorization", JSON.stringify(autorization));
		} else if(userLocal !== null && Object.keys(user).length >= 1) {

			const dublicat = userLocal.users.filter (item => item.email === user.email )
			// console.log(dublicat.length > 0);
			if(dublicat.length > 0) {
				userLocal.users.forEach(item => autorization.users.push(item))
				localStorage.setItem("autorization", JSON.stringify(autorization));
				modalRegistr.style.display= "flex";
				modalText.innerHTML= "this user we have";
				modalText.style.color = "red";
			} else {
				autorization.users.push(user);
				userLocal.users.forEach(item => autorization.users.push(item))
				localStorage.setItem("autorization", JSON.stringify(autorization));
					modalRegistr.style.display= "flex";
				modalText.innerHTML= "registration was successful";
				modalText.style.color = "green";
			}
		}
		
	}  else {
			registrError.style.display = "block";
		}
	}
		modalRegistr.addEventListener("click", (e) => {
			modalRegistr.style.display = "none";
			if(modalText.textContent === "registration was successful") {
				// window.location.assign(`http://localhost:3000/index.html`);
			}
			
			
	
			
		})

}

	export {inputValidatior};