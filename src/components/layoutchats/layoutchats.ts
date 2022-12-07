import Block from 'core/Block';
import './layoutchats.scss';

export default class LayoutChats extends Block {
	static componentName = 'LayoutChats';

	protected render() {
		return `
        <div>
        <div class="chat_container" data-layout-chat=1></div>
      </div>
      `;
	}
}