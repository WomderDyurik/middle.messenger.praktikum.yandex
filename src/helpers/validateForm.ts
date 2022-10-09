export enum ValidateType {
	Login = 'login',
	Password = 'password',
	Email = 'email',
	Message = 'message',
	Tel = 'tel',
	Name = 'name',
}

type ValidateRule = {
	type: ValidateType;
	value: string;
}


export function validateForm(rules: ValidateRule[]) {
	let errorMessage = ''

	for(let i = 0; i < rules.length; i++){
		const {type, value} = rules[i]
		const regs = /^[a-zA-Z0-9_][a-zA-Z0-9_]{3,20}[a-zA-Z]$/;
		if (type === ValidateType.Login){
			if (value.length === 0) {
				errorMessage = 'Логин не может быть пустым'
				break;
			} else if (value.length < 4) {
				errorMessage = 'Логин должен содержать больше, чем 3 символа'
				break;
			} else if (value.length > 21) {
				errorMessage = 'Логин должен содержать меньше, чем 20 символа'
				break;
			} else if (!regs.test(value)) {
				errorMessage = 'Напишите что попроще'
				break;
			}
		} else if (type === ValidateType.Password){
			const regs = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,40}$/;
			if (value.length === 0) {
				errorMessage = 'Пароль не может быть пустым'
				break;
			} else if (value.length < 9) {
				errorMessage = 'Пароль должен содержать больше, чем 8 символа'
				break;
			} else if (value.length > 41) {
				errorMessage = 'Пароль должен содержать меньше 40 символов'
				break;
			} else if (!regs.test(value)) {
				errorMessage = 'Пароль должен содержать одну заглавную букву и цифру'
				break;
			}
		} else if (type === ValidateType.Message) {
			if (value.length === 0) {
				errorMessage = 'Сообщение не может быть пустым'
				break;
			}
		} else if (type === ValidateType.Tel) {
			const regs = /^[0-9()\-+ ]{10,15}$/;
			if (!regs.test(value)) {
				errorMessage = 'Не верно введен телефон'
				break;
			}
		} else if (type === ValidateType.Email) {
			const regs = /^[a-z0-9](?:[a-z0-9\-\._]*[a-z0-9])@[a-z0-9](?:[a-z0-9\-]*[a-z0-9])\.[a-z0-9]+$/;
			if (!regs.test(value)) {
				errorMessage = 'Не верно введена почта'
				break;
			}
		} else if (type === ValidateType.Name) {
			const regs =/^[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я-]+$/;
			if (!regs.test(value)) {
				errorMessage = 'Не допустимое имя'
				break;
			}
		}
		
	}

	return errorMessage
}