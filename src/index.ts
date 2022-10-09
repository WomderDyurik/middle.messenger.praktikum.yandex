require("babel-core/register");

import {registerComponent }  from './core';
import './app.scss';

import Button from './components/button';
import Input from './components/input';
import Input2 from './components/input2';
import ErrorComponent from './components/error';
import ControlledInput from './components/controlledinput';
import Layout from './components/layout';
import ChatItem from './components/chatitem';
import ProfileItem from './components/profileitem';

registerComponent(Button);
registerComponent(Input);
registerComponent(Layout);
registerComponent(ChatItem);
registerComponent(ProfileItem);
registerComponent(Input2);
registerComponent(ErrorComponent);
registerComponent(ControlledInput);

