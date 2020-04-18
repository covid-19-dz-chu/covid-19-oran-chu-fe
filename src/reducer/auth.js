import {
  LOGIN_PAGE_LOADED ,
  LOGIN_REQUESTED , 
  LOGIN_SUCCEDED , 
  LOGIN_FAILED ,
  SIGNUP_PAGE_LOAD , 
  SIGNUP_PAGE_UNLOADED , 
} from '../constants/actionTypes';

export default function(state={},action){
  switch(action.type){
    case LOGIN_PAGE_LOADED :
      return {
        
      }
    default: 
      return {

      }
  }
}