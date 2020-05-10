import {
  SYNTHESIS_PAGE_LOADED,
  SYNTHESIS_REQUESTED,
  SYNTHESIS_PAGE_UNLOADED,
} from '../utils/constants/actionTypes';
export default (state={},action ) => {
  switch(action.type){
    case SYNTHESIS_PAGE_LOADED:
      return {
        ...state,
        synthesisNum:''
      }
    case SYNTHESIS_REQUESTED:
      return {
        ...state,
      }
    case SYNTHESIS_PAGE_UNLOADED:
      return {
        ...state,
      }
    default:
      return state;
  }
}