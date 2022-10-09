import Block from 'core/Block';

interface LayoutProps {}

export class Layout extends Block<LayoutProps> {
  static componentName : 'Layout';
  protected render(): string {
    // language=hbs
    return `
      <div>
        <div class="chat__container-login" data-layout=1></div>
        </div>
    `
  }
}
