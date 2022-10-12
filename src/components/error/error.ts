import Block from 'core/Block';

import './input.scss';

interface ErrorProps {
  text?: string;
}

export class Error extends Block<ErrorProps> {
  static componentName : 'Error';
  protected render(): string {
    // language=hbs
    return `
        <div class="error">{{#if text}}{{text}}{{/if}}</div>
    `
  }
}
