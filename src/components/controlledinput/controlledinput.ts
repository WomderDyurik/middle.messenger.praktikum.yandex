import Block from 'core/Block';
import { validateForm, ValidateType } from 'helpers/validateForm';

import './controlledinput.scss';

interface ControlledInputProps {
  onInput?: () => void;
  onFocus?: () => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  error?: string;
  classname?: string;
  name?: string;
  label?: string;
}

export class ControlledInput extends Block {
  static componentName: 'ControlledInput';
  constructor(props: ControlledInputProps) {
    super({...props,
      onBlur: (e: FocusEvent) => {
        const inputEl = e.target as HTMLInputElement
        console.log(inputEl.value)

        
        if(inputEl.name === 'login') {
          const error = validateForm([
            {type: ValidateType.Login, value: inputEl.value }
          ])
          this.refs.errorRef.setProps({text: error})
        } else if (inputEl.name === 'password'){
          const error = validateForm([
            {type: ValidateType.Password, value: inputEl.value }
          ])
        this.refs.errorRef.setProps({text: error})
        } else if (inputEl.name === 'email'){
          const error = validateForm([
            {type: ValidateType.Email, value: inputEl.value }
          ])
        this.refs.errorRef.setProps({text: error})
        } else if (inputEl.name === 'name' || inputEl.name === 'lastname'){
          const error = validateForm([
            {type: ValidateType.Name, value: inputEl.value }
          ])
        this.refs.errorRef.setProps({text: error})
        } else if (inputEl.name === 'tel'){
          const error = validateForm([
            {type: ValidateType.Tel, value: inputEl.value }
          ])
        this.refs.errorRef.setProps({text: error})
        } else if (inputEl.name === 'message'){
          const error = validateForm([
            {type: ValidateType.Message, value: inputEl.value }
          ])
        this.refs.errorRef.setProps({text: error})
        }
        //this.refs.errorRef.setProps({text: error})

      }
  });
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="input">
      <div class="input__lable">{{label}}</div>
      {{{Input2
        ref="input"
        name="{{name}}"
        type="{{type}}"
        classname="{{classname}}"
        placeholder="{{placeholder}}"
        onInput=onInput
				onFocus=onFocus
				onBlur=onBlur
      }}}
      {{{Error 
        ref="errorRef"
        text=error
      }}}
      </div>
    `
  }
}
