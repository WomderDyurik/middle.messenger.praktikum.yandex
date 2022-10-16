import Block from 'core/Block';

import ellipse from 'assets/ellipse.png';
import './chatitem.scss';

interface ChatItemProps {
	name: string;
	message: string;
	date: string;
	notification: string;
  }
  
  export class ChatItem extends Block {
	static componentName: 'ChatItem';
	constructor(props: ChatItemProps) {
	  super({...props});
	}
  
	render() {
	  // language=hbs
	  return `
	  <div class="chat__item">
		<img src="${ellipse}" alt="" class="chat__item-img">
		<div class="chat__item-profile">
			<div class="chat__item-name">{{name}}</div>
			<div class="chat__item-message">{{message}}</div>
		</div>
		<div class="chat__item-date">{{date}}</div>
		<div class="chat__item-notification">{{notification}}</div>
  	</div>
  `;
	}
  }
