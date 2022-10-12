import Block from 'core/Block';


import './profileitem.scss';

interface ProfileItemProps {
	key: string;
	value: string;
  }
  
  export class ProfileItem extends Block {
	static componentName : 'ProfileItem';
	constructor(props: ProfileItemProps) {
	  
  
	  super({...props});
	}
  
	render() {
		return `
		<div class="profile__info">
				<div class="profile__info-key">{{key}}</div>
				<div class="profile__info-value">{{value}}</div>
			</div>
		`
	}
}