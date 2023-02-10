const pageRegistr = document.querySelector('.form');
const current = document.querySelector('.current'); 

export default function renderRegistration(e) {
	// console.log(e.dataset.registration);
	const login = document.querySelector('.login-btn');
	const registr = document.querySelector('.registration-btn');

	// const a =  e.dataset.registration ? e.dataset.registration : e.target.dataset.registration
	// console.log(a);
	// const curent = e.target.className.split(' ').includes("current");
	// console.log(curent);
	// e.target.classList.toggle('current');
	// console.log(e.target.dataset.registration);

	if ( e.target.dataset.registration === "login" ) {
		registr.classList.remove('current');
		login.classList.add('current');
		pageRegistr.innerHTML=  `<p class="registration__text">Please enter your account details to log in</p>
			<form class=" form" >

				<label class="form__label">
					<input class="form__input input-email" type="email" placeholder=" " >
					<span class="form__input-name">E-mail</span>
				</label>

				<label class="form__label">
					<input class="form__input input-pass"  type="password" placeholder=" " >
					<span class="form__input-name">password</span>
				
					<svg class="icon-eye" width="14" height="14">
						<use class="eye eye-open" href="./images/eye1.svg#icon-eye"></use>
						<use class="eye eye-blocked  is-hiden" href="./images/eye1.svg#icon-eye-blocked"></use>
					</svg>
				</label>

				<label class=" chackbox__label" for="checkbox">
					<span class="checkbox"></span>
					<input class="form__checkbox" name="topic" value="html" type="checkbox" id="checkbox"  >
					<span class="form__checkbox-name">Keep me signed in</span>
					<span class="checkbox__icon"></span>
					<!-- required -->
				</label>
				<button class="form__btn btn-login">Log in</button>
				</form>`;
	} else {
		login.classList.remove('current');
		registr.classList.add('current');
		pageRegistr.innerHTML= `<form class="registration__form form" data-form="register">
		<label  class="form__label">
					First Name
					<input class="form__input" type="text"  placeholder="Your first name" data-name="firstName" >
				
				</label>
				<label class="form__label">
					SECOND NAME
					<input class="form__input" type="text"  placeholder="Your second name" data-name="secondName" >
				
				</label>
				<label class="form__label">
					<input class="form__input input-email" type="email" placeholder=" " data-name="email" >
					<span class="form__input-name">E-mail</span>
				</label>
				<label class="form__label">
					<input class="form__input input-pass"  type="password" placeholder=" " data-name="password1" >
					<span class="form__input-name">password</span>
					<svg class="icon-eye" width="14" height="14">
						<use class="eye eye-open" href="./images/eye1.svg#icon-eye"></use>
						<use class="eye eye-blocked  is-hiden" href="./images/eye1.svg#icon-eye-blocked"></use>
					</svg>
				</label>
				<label class="form__label">
					<input class="form__input input-pass" type="password" placeholder="Confirm password" data-name="password" >
				
					<svg class="icon-eye" width="14" height="14">
						<use class="eye eye-open" href="./images/eye1.svg#icon-eye"></use>
						<use class="eye eye-blocked  is-hiden" href="./images/eye1.svg#icon-eye-blocked"></use>
					</svg>
					<p class="register-error">uncorect password</p>
				</label>
				
				<button type="submit" class="form__btn btn-register" >REGISTER</button>
				</form> `
	}
}
// renderRegistration(current)