import Block from 'core/Block';

import ellipse from 'assets/ellipse.png';
import './chatitem.scss';

interface ChatItemProps {
	active: string;
	name: string;
	message: string;
	date: string;
	notification: string;
  }
  
  export class ChatItem extends Block {
	static componentName: 'ChatItem';
	constructor(props: ChatItemProps) {
	  const onClick = (e: FocusEvent) => {
		const inputEl = e.target as HTMLElement
		if(inputEl.className === 'chat__item' || inputEl.className === 'chat__item {{active}}'){
			inputEl.className = 'chat__item active'
		} else if(inputEl.className === 'chat__item active'){
			inputEl.className = 'chat__item'
		}
	  }
	  super({...props, events: { click: onClick }});
	}
  
	render() {
	  // language=hbs
	  return `
	  <div class="chat__item {{active}}">
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
