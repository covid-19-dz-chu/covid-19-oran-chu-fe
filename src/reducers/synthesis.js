import {
  SYNTHESIS_PAGE_LOADED,
  SYNTHESIS_REQUESTED,
  SYNTHESIS_PAGE_UNLOADED,
  UPDATE_FIELD_SYNTHESIS,
  SYNTHESISDOC_PAGE_LOADED,
  ASYNC_START,
} from '../utils/constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SYNTHESIS_PAGE_LOADED:
      return {
        ...state,
        loading: false,
        synthesisNum: '',
      };
    case SYNTHESIS_REQUESTED:
      return {
        ...state,
        synthesisList: action.payload.data,
        formErrors: action.payload.error,
      };
    case ASYNC_START:
      if (
        action.subtype === SYNTHESIS_PAGE_LOADED ||
        action.subtype === SYNTHESISDOC_PAGE_LOADED ||
        action.subtype === SYNTHESIS_REQUESTED
      ) {
        return {
          ...state,
          loading: true,
        };
      }
      return {
        ...state,
      };
    case SYNTHESIS_PAGE_UNLOADED:
      return {
        ...state,
      };
    case SYNTHESISDOC_PAGE_LOADED:
      return {
        ...state,
        loading: false,
        synthesisDoc: action.payload.data || null,
      };
    case UPDATE_FIELD_SYNTHESIS:
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};
