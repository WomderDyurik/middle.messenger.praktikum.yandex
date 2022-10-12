import { Registration } from './registration';
import {renderDOM,registerComponent} from "core";

import Button from 'components/button';
import Input2 from 'components/input2';
import ErrorComponent from 'components/error';
import ControlledInput from 'components/controlledinput';
import Layout from 'components/layout';



registerComponent(Button);
registerComponent(Layout);
registerComponent(Input2);
registerComponent(ErrorComponent);
registerComponent(ControlledInput);

document.addEventListener("DOMContentLoaded", 
() => {
    renderDOM(new Registration());
});