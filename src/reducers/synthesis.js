import {
  SYNTHESIS_PAGE_LOADED,
  SYNTHESIS_REQUESTED,
  SYNTHESIS_PAGE_UNLOADED,
  UPDATE_FIELD_SYNTHESIS
} from '../utils/constants/actionTypes';
export default (state={},action ) => {
  switch(action.type){
    case SYNTHESIS_PAGE_LOADED:
      return {
        ...state,
        synthesisNum:'',
      }
    case SYNTHESIS_REQUESTED:
      return {
        ...state,
        synthesisBody: action.payload.data,
      }
    case SYNTHESIS_PAGE_UNLOADED:
      return {
        ...state,
      }
    case UPDATE_FIELD_SYNTHESIS:
      return {
          ...state,
          [action.key]: action.value,
      };
  
    default:
      return state;
  }
}