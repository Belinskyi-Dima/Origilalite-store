import renderRegistration from './renderRegister.js';

const btnRegister = document.querySelectorAll(".registration__button");
const eye = document.querySelectorAll(".icon-eye");



const form = document.querySelector(".form");

btnRegister.forEach(item => item.addEventListener('click', renderRegistration));
eye.forEach(item=> item.addEventListener("click", showPassword));

form.addEventListener("submit", sendForm);

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
	e.preventDefault();
	const autorization = {
		users:[]
	};
	const user = {};

	const input = document.querySelectorAll('.form__input');
	const registrError = document.querySelector('.register-error');
	const modalRegistr = document.querySelector('.register-modal')
	const modalText = document.querySelector('.register-modal__text')
	input.forEach(item => {
		if(item.value.length > 2 && item.value !== null) {
			user[item.dataset.name]= item.value;
		} else {
			modalRegistr.style.display= "flex";
			modalText.innerHTML= "please Fill all input";
			modalText.style.color = "red";
		}
	})
	if (user.password) {
		if(user.password.length <= 5) {
			modalRegistr.style.display= "flex";
			modalText.innerHTML= "password must be longer than 5 characters";
			modalText.style.color = "red";
		}
	}
	if(user.password1 === user.password ) {

		delete user.password1
		registrError.style.display = "none";
		const userLocal = JSON.parse(localStorage.getItem("autorization" ));
		// console.log(userLocal);
		// console.log(userLocal === null);
		// console.log(userLocal.users.length === 0);
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

	} else {
		registrError.style.display = "block";
	}
	// const userLocal = localStorage.getItem("autorization", )
	// localStorage.setItem("autorization", JSON.stringify(autorization));

	modalRegistr.addEventListener("click", (e) => {

		
		modalRegistr.style.display = "none";
		// window.location.assign(`http://localhost:3000/index.html`);

		
	})

}
			// modalRegistr.style.display= "flex";
			// modalText.innerHTML= "registration was successful";
			// modalText.style.color = "green";