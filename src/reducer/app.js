import { 
  APP_LOADING,
  APP_LOADING_SUCCESS,
  APP_LOADING_ERROR, 
} from "../constants/actionTypes";

export default function(state={} , action) {
  switch(action.type){
    case APP_LOADING : 
      return {
        appName : "Covid 19 application",
        appLoaded : false,
      }
    case APP_LOADING_SUCCESS:
      return {
        ...state,        
        appLoaded : true,
      }
    case APP_LOADING_ERROR : 
      return {
        ...state,
        appName: "",
        appLoaded : false,
      }
    default:
      return state;
  }
}