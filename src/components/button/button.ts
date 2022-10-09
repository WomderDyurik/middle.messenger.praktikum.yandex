import Block from 'core/Block';

import './button.scss';

interface ButtonProps {
  text: string;
  classname: string;
  onClick: () => void;
}

export class Button extends Block {
  static componentName: 'Button';


  constructor({text, classname, onClick}: ButtonProps) {
    super({text, classname, events: {click: onClick}});
  }

  protected render(): string {
    // language=hbs
    return `
      <div class="button">
        <button class="{{classname}}" type="button">{{text}}
        <div data-layout=1></div>
        </button>
      </div>
    `;
  }
}
