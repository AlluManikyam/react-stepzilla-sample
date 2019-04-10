import {initialState} from './initialState';

// Actions
export const saveUser=(register_user)=>{
 	return {
 		type:'SAVE_USER',
		payload: register_user
 	}
}


export  const register_reducer=(state = initialState, action) => {
switch (action.type) {
 case "SAVE_USER":
   return {...state, register_user: action.payload}
 default:
   return state
}
}
