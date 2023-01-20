const pageRegistr = document.querySelector('.ddd');

export default function renderRegistration(e) {
	const login = document.querySelector('.login-btn');
	const registr = document.querySelector('.registration-btn');

	// const curent = e.target.className.split(' ').includes("current");
	// console.log(curent);
	// e.target.classList.toggle('current');
	// console.log(e.target.dataset.registration);

	if (e.target.dataset.registration === "login") {
		registr.classList.remove('current');
		login.classList.add('current');
		pageRegistr.innerHTML=  `
		<p class="registration__text">Please enter your account details to log in</p>
			<form class="registration__form form" >

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
				<button class="form__btn">Log in</button>
		`;
	} else {
		login.classList.remove('current');
		registr.classList.add('current');
		pageRegistr.innerHTML= `<label class="form__label">
		<input class="form__input input-pass"  type="password" placeholder=" " >
		<span class="form__input-name">password</span>
	
		<svg class="icon-eye" width="14" height="14">
			<use class="eye eye-open" href="./images/eye1.svg#icon-eye"></use>
			<use class="eye eye-blocked  is-hiden" href="./images/eye1.svg#icon-eye-blocked"></use>
		</svg>
	</label>`
	}
}