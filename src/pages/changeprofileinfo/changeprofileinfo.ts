import Block from 'core/Block';
import { validateForm, ValidateType } from 'helpers/validateForm';

import ellipse from "assets/ellipse.png";
import close from "assets/close.svg";
import back from "assets/back.svg";


export class ChangeProfileInfo extends Block {
	static componentName : 'ChangeProfileInfo';
	constructor() {
		super()

        this.setProps({
          error: '',
          loginValue: '',
          passwordValue: '',
          onInput: (e: FocusEvent) => {
            const inputEl = e.target as HTMLInputElement
            
            if(inputEl.name === 'login') {
              const errorMessage = validateForm([
                {type: ValidateType.Login, value: inputEl.value }
              ])
              this.refs.LoginInputRef.refs.errorRef.setProps({text: errorMessage})
            } else if (inputEl.name === 'password'){
              const errorMessage = validateForm([
                {type: ValidateType.Password, value: inputEl.value }
              ])
            this.refs.PasswordInputRef.refs.errorRef.setProps({text: errorMessage})
            } else if (inputEl.name === 'email'){
				const errorMessage = validateForm([
				  {type: ValidateType.Email, value: inputEl.value }
				])
			  this.refs.EmailInputRef.refs.errorRef.setProps({text: errorMessage})
			  } else if (inputEl.name === 'name'){
				const errorMessage = validateForm([
				  {type: ValidateType.Name, value: inputEl.value }
				])
			  this.refs.NameInputRef.refs.errorRef.setProps({text: errorMessage})
			  } else if (inputEl.name === 'lastname'){
				const errorMessage = validateForm([
				  {type: ValidateType.Name, value: inputEl.value }
				])
			  this.refs.LastNameInputRef.refs.errorRef.setProps({text: errorMessage})
			  } else if (inputEl.name === 'tel'){
				const errorMessage = validateForm([
				  {type: ValidateType.Tel, value: inputEl.value }
				])
			  this.refs.TelInputRef.refs.errorRef.setProps({text: errorMessage})
			  }
            
          },
          onSubmit: () => {
            const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
			const emailEl = this.element?.querySelector('input[name="email"]') as HTMLInputElement;
			const nameEl = this.element?.querySelector('input[name="name"]') as HTMLInputElement;
			const lastNameEl = this.element?.querySelector('input[name="lastname"]') as HTMLInputElement;
			const telEl = this.element?.querySelector('input[name="tel"]') as HTMLInputElement;
            const errorMessage = validateForm([
              {type: ValidateType.Login, value: loginEl.value },
			  {type: ValidateType.Email, value: emailEl.value },
			  {type: ValidateType.Name, value: nameEl.value },
			  {type: ValidateType.Name, value: lastNameEl.value },
			  {type: ValidateType.Tel, value: telEl.value },
            ])
            const loginData = {
              login: loginEl.value,
			  email: emailEl.value,
			  name: nameEl.value,
			  lastName: lastNameEl.value,
			  tel: telEl.value,
              };
            if(errorMessage){
              this.setProps({
                error: errorMessage,
                loginValue: loginEl.value,
				emailValue: emailEl.value,
				name: nameEl.value,
				lastName: lastNameEl.value,
				tel: telEl.value,
              })
            } else {
              this.setProps({
                error: '',
                loginValue: loginEl.value,
				emailValue: emailEl.value,
				name: nameEl.value,
				lastName: lastNameEl.value,
				tel: telEl.value,
              })
              console.log('ready to API',loginData)
            }
    }
  })
  		
  const themes = this.element?.querySelector('div[class="themes"]') as HTMLElement;
  themes.addEventListener('change', (event) => {
	if (event.target.nodeName === 'INPUT') {
		console.log('55')
		document.documentElement.classList.remove('dark', 'light');
		document.documentElement.classList.add(event.target.value);
	}
  })
}

	

	render() {
		

		// language=hbs
		return `
		{{#Layout name="ChangeProfileInfo" }}
			<div class="profile__body">
				<div class="profile__image">
					<img src="${ellipse}" alt="avatar">
					</div>
					<a href="/pages/profile" class="profile__back">
						<img src="${back}" alt="X">
					</a>
					<a href="/pages/chat" class="profile__close">
						<img src="${close}" alt="X">
					</a>
					<h3 class="profile__name">Изменить информацию</h3>
					<form action="#" class="profile__items">
					{{{ControlledInput
						label="Электронная почта:"
						onInput=onInput
						onFocus=onFocus
						classname="input__input"
						name="email"
						type="text"
						placeholder="yandex@.ru"
						ref="EmailInputRef"
						}}}
			
					  {{{ControlledInput
						label="Логин"
						onInput=onInput
						onFocus=onFocus
						classname="input__input"
						name="login"
						type="text"
						placeholder="Vasya007"
						ref="LoginInputRef"
						}}}
			
					  {{{ControlledInput
						label="Имя"
						onInput=onInput
						onFocus=onFocus
						classname="input__input"
						name="name"
						type="text"
						placeholder="Вася"
						ref="NameInputRef"
						}}}
					  
					  {{{ControlledInput
						label="Фамилия"
						onInput=onInput
						onFocus=onFocus
						classname="input__input"
						name="lastname"
						type="text"
						placeholder="Иванов"
						ref="LastNameInputRef"
						}}}
			
					  {{{ControlledInput
						label="Телефон"
						onInput=onInput
						onFocus=onFocus
						classname="input__input"
						name="tel"
						type="text"
						placeholder="+79111234567"
						ref="TelInputRef"
						}}}
					  
					  {{{Button
						classname="login__button"
						text="Изменить"
						onClick=onSubmit
					  }}}
					</form>
					<div class="themes">
					  <label><input type ="radio" name="theme" value="light" checked>Light</label>
					  <label><input type ="radio" name="theme" value="dark">Black</label>
					</div>
			</div>
	  	{{/Layout}}
		`;
	  }

}