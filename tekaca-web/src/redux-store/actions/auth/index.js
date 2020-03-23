import userProvider from '@data-access/user-provider';
import { ToastContainer, toast } from 'react-toastify';
import constants from '@strings';

export function logout() {
	return {
		type: 'LOGOUT'
	}
}

function saveCurrentUser(user) {
	return {
		type: 'SAVE_CURRENT_USER',
		user
	}
}
function onLogin (email, password){
	return ((dispatch, getState)=>{
		return new Promise((resolve, reject)=>{
			userProvider.login(email, password).then(res=>{
				switch(res.code){
					case 200: 
						toast.success(constants.text.user.login_success, {
							position: toast.POSITION.TOP_RIGHT
						});
						dispatch(saveCurrentUser(res.user))
						resolve(res);
						window.location.href="/";
						break;
					default : 
						toast.error(constants.text.user.login_fail, {
							position: toast.POSITION.TOP_RIGHT
						});
						break;
				}
			
			}).catch(e=>{
				reject(e);
			})
		});
	})
}
export default {
	onLogin,
}