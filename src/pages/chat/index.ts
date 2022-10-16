import {Chat} from './chat';
import {renderDOM, registerComponent} from "core";

import Button from 'components/button';
import Input from 'components/input';
import ControlledInput from 'components/controlledinput';
import Layout from 'components/layout';
import ChatItem from 'components/chatitem';
import Input2 from 'components/input2';
import ErrorComponent from 'components/error';



registerComponent(Button);
registerComponent(Layout);
registerComponent(Input2);
registerComponent(ErrorComponent);
registerComponent(ControlledInput);
registerComponent(Input);
registerComponent(ChatItem);

document.addEventListener("DOMContentLoaded", 
() => {
    renderDOM(new Chat({
		items: [
		  {name: 'ivan', message: 'Hello world', date: '10:20', notification: "4"},
		  {name: 'Olga', message: 'Hello world', date: '10:20', notification: "4"},
		  {name: 'Alex', message: 'Hello world', date: '10:20', notification: "4"},
		  {name: 'Kolya', message: 'Hello world', date: '10:20', notification: "4"},
		  {name: 'Zerat', message: 'Hello world', date: '10:20', notification: "4"},
		  {name: 'ivan2', message: 'Hello world', date: '10:20', notification: "4"},
		]
	  }));
});