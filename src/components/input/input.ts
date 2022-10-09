import Block from 'core/Block';

import './input.scss';

interface InputProps {
  onChange?: () => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value?: string;
  error?: string;
  classname?: string;
  name?: string;
  label?: string;
}

export class Input extends Block {
  static componentName : 'Input';
  constructor({onChange = () => {}, ...props}: InputProps) {
    super({...props, events: {input: onChange}});
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="input">
        <input class="{{classname}}" type="{{type}}" placeholder="{{placeholder}}" value="{{value}}">
        <div class="input__error">{{#if error}}{{error}}{{/if}}</div>
      </div>
    `
  }
}
