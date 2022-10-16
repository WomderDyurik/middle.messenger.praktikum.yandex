import Block from 'core/Block';

import ellipse from "assets/ellipse.png";
import close from "assets/close.svg";

type ProfileItemProps = {
	items: Array<{
		key: string;
		value: string;
	}>
}

export class Profile extends Block {
	static componentName : 'Profile';
	constructor({items} : ProfileItemProps) {
		super({items})
	}


	render() {
		// language=hbs
		return `
		{{#Layout name="Profile" }}
		
			<div class="profile__body">
				<div class="profile__image">
					<img src="${ellipse}" alt="avatar"><input class="profile__input-change" type="file"/></img>
					</div>
					<a href="/pages/chat" class="profile__close">
						<img src="${close}" alt="X">
					</a>
					<h3 class="profile__name">John</h3>
					<div class="profile__items">
					{{#each items}}
						{{{ProfileItem 
						key="{{key}}"
						value="{{value}}"
					}}}
					{{/each}}
					</div>
					<a href="/pages/changeprofileinfo" class="profile__link">Изменить данные</a>
					<a href="/pages/changeprofilepass" class="profile__link">Изменить пароль</a>
					<a href="/pages/login" class="profile__link-exit">Выйти</a>
			</div>
		
	  	{{/Layout}}
		`;
	  }

}