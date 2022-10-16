import Block from 'core/Block';
import { validateForm, ValidateType } from 'helpers/validateForm';

import ellipse from "assets/ellipse.png";
import close from "assets/close.svg";
import back from "assets/back.svg";


export class ChangeProfilePass extends Block {
	static componentName : 'ChangeProfilePass';
	constructor() {
		super()

		this.setProps({
			error: '',
			passwordValue: '',
			onInput: (e: FocusEvent) => {
				const inputEl = e.target as HTMLInputElement


				if (inputEl.name === 'passwordold'){
					const errorMessage = validateForm([
					  {type: ValidateType.Password, value: inputEl.value }
					])
				  this.refs.PasswordInputRef.refs.errorRef.setProps({text: errorMessage})
				  } else if (inputEl.name === 'password2'){
					  const errorMessage = validateForm([
						{type: ValidateType.Password, value: inputEl.value }
					  ])
					this.refs.PasswordInputRef2.refs.errorRef.setProps({text: errorMessage})
				  } else if (inputEl.name === 'password3'){
					const errorMessage = validateForm([
					  {type: ValidateType.Password, value: inputEl.value }
					])
				  this.refs.PasswordInputRef3.refs.errorRef.setProps({text: errorMessage})
			}
		},
			onSubmit: () => {
				const passwordEl = this.element?.querySelector('input[name="passwordold"]') as HTMLInputElement;
				const passwordEl2 = this.element?.querySelector('input[name="password2"]') as HTMLInputElement;
				const passwordEl3 = this.element?.querySelector('input[name="password3"]') as HTMLInputElement;
				const errorMessage = validateForm([
					{type: ValidateType.Password, value: passwordEl.value },
					{type: ValidateType.Password, value: passwordEl2.value },
					{type: ValidateType.Password, value: passwordEl3.value }
				])
				const passwordData = {
					oldPassword: passwordEl.value,
					newPassword: passwordEl2.value
				}
				if(errorMessage){
					this.setProps({
						error: errorMessage,
						passwordValue: passwordEl.value
					})
				} else {
					this.setProps({
						error: '',
						passwordValue: passwordEl.value
					})
					if(passwordEl2.value !== passwordEl3.value){
						alert('Новые пароли не совпадают!')
					} else {
						console.log('Ready to Api',passwordData)
					}
					
				}

				
			}
		})
	}


render() {
	// language=hbs
	return `
	{{#Layout name="ChangeProfilePass" }}
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
				<h3 class="profile__name">Изменить пароль</h3>
				<form action="#" class="profile__items">
				
				  {{{ControlledInput
					label="Старый пароль"
					onInput=onInput
					onFocus=onFocus
					classname="input__input"
					name="passwordold"
					type="password"
					placeholder="*********"
					ref="PasswordInputRef"
				  }}}
				  {{{ControlledInput
					label="Новый пароль"
					onInput=onInput
					onFocus=onFocus
					classname="input__input"
					name="password2"
					type="password"
					placeholder="********"
					ref="PasswordInputRef2"
				  }}}
				  {{{ControlledInput
					label="Повторите новый пароль"
					onInput=onInput
					onFocus=onFocus
					classname="input__input"
					name="password3"
					type="password"
					placeholder="********"
					ref="PasswordInputRef3"
				  }}}
		
				  {{{Button
					classname="login__button"
					text="Изменить"
					onClick=onSubmit
				  }}}
				</form>
		</div>
	  {{/Layout}}
	`;
  }

}