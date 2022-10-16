import Block from 'core/Block';
import { validateForm, ValidateType } from 'helpers/validateForm';


export class LoginPage extends Block {
  static componentName : 'LoginPage';
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
            }
            
          },
          onSubmit: () => {
            const passwordEl = this.element?.querySelector('input[name="password"]') as HTMLInputElement;
            const loginEl = this.element?.querySelector('input[name="login"]') as HTMLInputElement;
            const errorMessage = validateForm([
              {type: ValidateType.Password, value: passwordEl.value },
              {type: ValidateType.Login, value: loginEl.value }
            ])
            const loginData = {
              login: loginEl.value,
              password: passwordEl.value,
              };
            if(errorMessage){
              this.setProps({
                error: errorMessage,
                passwordValue: passwordEl.value,
                loginValue: loginEl.value,
              })
            } else {
              this.setProps({
                error: '',
                passwordValue: passwordEl.value
              })
              console.log('ready to API',loginData)
            }

      
    }
  })
}

  render() {

    // language=hbs
    return `
    {{#Layout name="Login" }}
    
	    <main class="main">
		  <h2 class="login__title">Вход</h2>
      <form class="login-form form">

      {{{ControlledInput
        onInput=onInput
        onFocus=onFocus
        classname="input__input"
        name="login"
        type="text"
        placeholder="Логин"
        ref="LoginInputRef"
        }}}

        {{{ControlledInput
					onInput=onInput
					onFocus=onFocus
					classname="input__input"
					name="password"
					type="password"
					placeholder="Пароль"
					ref="PasswordInputRef"
				  }}}

        {{{Button
          classname="login__button"
          text="Авторизоваться"
          onClick=onSubmit
        }}}
      </form>
		  <a href="/pages/registration" class="login__link">Нет аккаунта?</a>
	  </main>
  
  {{/Layout}}
    `;
  }
}
