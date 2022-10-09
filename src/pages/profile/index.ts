import { Profile} from './profile';
import {renderDOM,registerComponent} from "core";

import Button from 'components/button';
import Layout from 'components/layout';
import ProfileItem from 'components/profileitem';

registerComponent(Button);
registerComponent(Layout);
registerComponent(ProfileItem);
;



document.addEventListener("DOMContentLoaded", 
() => {
    renderDOM(new Profile({
		items: [
		  {"key":"Почта","value":"pochta@yandex.ru"},
		  {"key":"Логин","value":"ivanivanov"},
		  {"key":"Имя","value":"Иван"},
		  {"key":"Фамилия","value":"Иванов"},
		  {"key":"Имя в чате","value":"Иван"},
		  {"key":"Телефон","value":"+7 (909) 967 30 30"},
		]
	  }));
});