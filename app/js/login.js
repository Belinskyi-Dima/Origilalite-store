import {inputValidatior} from "./register.js";

const form = document.querySelector(".form-login");


form.addEventListener("submit", logIn);

function logIn(e) {
	e.preventDefault();
	const input = document.querySelectorAll('.form__input');
	const modalRegistr = document.querySelector('.register-modal');
	const modalText = document.querySelector('.register-modal__text');
	
	const valid = inputValidatior(e);
	console.log(valid);
	if(valid) {
		const user = {}
		input.forEach(item=> user[item.dataset.name] = item.value);

		const localData = JSON.parse(localStorage.getItem("autorization" )) ;

			const isLogin = localData.users.find(item=> item.email === user.email && item.paswword === user.paswword);
				
			if(isLogin) {
				modalRegistr.style.display= "flex";
				modalText.innerHTML= `wallcame  ${isLogin.firstName}`;
				modalText.style.color = "green";
			} else {
				modalRegistr.style.display= "flex";
				modalText.innerHTML= " users whith this email not found";
				modalText.style.color = "red";
			}
		// )

   console.log(isLogin);
	console.log(localData.users);
	}


	modalRegistr.addEventListener("click", (e) => {
		modalRegistr.style.display = "none";
		if(modalText.textContent === "registration was successful") {
			// window.location.assign(`http://localhost:3000/index.html`);
		}
		
		

		
	})

}