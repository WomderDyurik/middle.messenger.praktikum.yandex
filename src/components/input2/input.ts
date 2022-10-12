import Block from 'core/Block';

import './input.scss';

interface Input2Props {
  onBlur?: () => void;
  onInput?: () => void;
  onFocus?: () => void;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  classname?: string;
  name?: string;
}

export class Input2 extends Block {
  static componentName : 'Input2';
  constructor({onBlur, onInput, onFocus, ...props}: Input2Props) {
    super({...props, events: {input: onInput, focus: onFocus, blur: onBlur}});
  }

  protected render(): string {
    // language=hbs
    return `
        <input name ="{{name}}" class="{{classname}}" type="{{type}}" placeholder="{{placeholder}}">
    `
  }
}
