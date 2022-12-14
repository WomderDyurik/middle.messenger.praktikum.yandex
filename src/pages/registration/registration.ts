import Block from 'core/Block';
import { validateForm, ValidateType } from 'helpers/validateForm';


export class Registration extends Block {
	static componentName : 'Registration';
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
            const passwordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement;
            const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
			const emailEl = this.element?.querySelector('input[name="email"]') as HTMLInputElement;
			const nameEl = this.element?.querySelector('input[name="name"]') as HTMLInputElement;
			const lastNameEl = this.element?.querySelector('input[name="lastname"]') as HTMLInputElement;
			const telEl = this.element?.querySelector('input[name="tel"]') as HTMLInputElement;
            const errorMessage = validateForm([
              {type: ValidateType.Password, value: passwordEl.value },
              {type: ValidateType.Login, value: loginEl.value },
			  {type: ValidateType.Email, value: emailEl.value },
			  {type: ValidateType.Name, value: nameEl.value },
			  {type: ValidateType.Name, value: lastNameEl.value },
			  {type: ValidateType.Tel, value: telEl.value },
            ])
            const loginData = {
              login: loginEl.value,
              password: passwordEl.value,
			  email: emailEl.value,
			  name: nameEl.value,
			  lastName: lastNameEl.value,
			  tel: telEl.value,
              };
            if(errorMessage){
              this.setProps({
                error: errorMessage,
                passwordValue: passwordEl.value,
                loginValue: loginEl.value,
				emailValue: emailEl.value,
				name: nameEl.value,
				lastName: lastNameEl.value,
				tel: telEl.value,
              })
            } else {
              this.setProps({
                error: '',
                passwordValue: passwordEl.value,
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
}

  render() {
    // language=hbs

    return `
    {{#Layout name="Registration" }}
	<div class="chat__container-login">
	<main class="main">
		<h2 class="login__title">??????????????????????</h2>
		<form action="#" class="login__form">
		  {{{ControlledInput
			onInput=onInput
			onFocus=onFocus
			classname="input__input"
			name="email"
			type="text"
			placeholder="?????????????????????? ??????????"
			ref="EmailInputRef"
			}}}

		  {{{ControlledInput
			onInput=onInput
			onFocus=onFocus
			classname="input__input"
			name="login"
			type="text"
			placeholder="??????????"
			ref="LoginInputRef"
			}}}

		  {{{ControlledInput
			onInput=onInput
			onFocus=onFocus
			classname="input__input"
			name="name"
			type="text"
			placeholder="??????"
			ref="NameInputRef"
			}}}
		  
		  {{{ControlledInput
			onInput=onInput
			onFocus=onFocus
			classname="input__input"
			name="lastname"
			type="text"
			placeholder="??????????????"
			ref="LastNameInputRef"
			}}}

		  {{{ControlledInput
			onInput=onInput
			onFocus=onFocus
			classname="input__input"
			name="tel"
			type="text"
			placeholder="??????????????"
			ref="TelInputRef"
			}}}

		  {{{ControlledInput
			onInput=onInput
			onFocus=onFocus
			classname="input__input"
			name="password"
			type="password"
			placeholder="????????????"
			ref="PasswordInputRef"
			}}}

		  
			{{{ControlledInput
				onInput=onInput
				onFocus=onFocus
				classname="input__input"
				name="password"
				type="password"
				placeholder="???????????? (?????? ??????)"
				ref="PasswordInputRef"
				}}}
		  
		  {{{Button
			classname="login__button"
			text="????????????????????????????????????"
			onClick=onSubmit
		  }}}
			</form>
			<a href="/pages/login" class="login__link">??????????</a>
	</main>
</div>
    {{/Layout}}
    `;
  }
}
