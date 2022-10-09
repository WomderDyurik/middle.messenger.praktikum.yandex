import Block from 'core/Block';
import { validateForm, ValidateType } from 'helpers/validateForm';


import ellipse from "assets/ellipse.png";
import option from "assets/option.svg";
import add from "assets/add.svg";
import del from "assets/del.svg";
import arrow from "assets/arrow.svg";

type ChatProps = {
	items: Array<{
		active: string;
		name: string;
		message: string;
		date: string;
		notification: string;
	}>
}


export class Chat extends Block {
	static componentName : 'Chat';
	constructor({items} : ChatProps) {
		super({items}
			)
		this.setProps({
			
			error: '',
			messageValue: '',
			onInput: (e: FocusEvent) => {
				const inputEl = e.target as HTMLInputElement
				const errorMessage = validateForm([
					{type: ValidateType.Message, value: inputEl.value }
				])

				this.refs.MessageInputRef.refs.errorRef.setProps({text: errorMessage})
			},
			onSubmit: () => {
				const messageEl = this.element?.querySelector('input[name="message"]') as HTMLInputElement;
				const errorMessage = validateForm([
					{type: ValidateType.Message, value: messageEl.value }
				])

				if(errorMessage){
					this.setProps({
						error: errorMessage,
						messageValue: messageEl.value
					})
				} else {
					this.setProps({
						error: '',
						messageValue: messageEl.value
					})
					console.log('Message: ',messageEl.value)
				}
			}
		})
	
	}

	
	



	render() {
		// language=hbs
		return `
		{{#Layout name="Chat" }}
		<div class="chat__container">
	<div class="chat__aside">
		<a href="/pages/profile" class="chat__link">Профиль ></a>
		{{{Input placeholder="Поиск" classname="chat__search"}}}
		<div class="chat__items">
		{{#each items}}
		{{#with this}}
			{{{ChatItem
			active="{{active}}"
			name="{{name}}"
			message="{{message}}"
			date="{{date}}"
			notification="{{notification}}"
			onClick=onClick
			}}}
			{{/with}}
			{{/each}}
		</div>
	</div>
		<div class="chat__block">
			<div class="chat__block-header">
				<div class="chat__block-header-img">
					<img src="${ellipse}" alt="logo">
				</div>
				<div class="chat__block-header-name">Андрей</div>
				<div id="option" class="chat__block-header-option">
					<img src="${option}" alt="option">
					<div class="option__block">
					<div class="option__block-item option__block-item-add">
						<div class="option__block-item-img">
							<img src="${add}" alt="add">
						</div>
						<div class="option__block-item-text">Добавить пользователя</div>
					</div>
					<div class="option__block-item option__block-item-delete">
						<div class="option__block-item-img">
							<img src="${del}" alt="del">
						</div>
						<div class="option__block-item-text">Удалить пользователя</div>
					</div>
				</div>
				</div>
				
			</div>
			<div class="chat__block-container">
				<div class="chat__block-message">
					Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

					Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
					<span>11:58</span>
				</div>
				<div class="chat__block-message-user">
					Hello! 
					<span>12:00</span>
				</div>
				<div class="chat__block-footer">
				{{{ControlledInput
					onInput=onInput
					onFocus=onFocus
					classname="chat__block-input"
					name="message"
					type="text"
					placeholder="Введите сообщение"
					ref="MessageInputRef"
				  }}}
					<div class="chat__block-file">|</div>
					{{#Button onClick=onLogin classname="chat__block-send"}}
						<img src="${arrow}" alt="send">
					{{/Button}}
				</div>
				
			</div>
		</div>
</div>
		
	  
	  	{{/Layout}}
		`;
	  }
}