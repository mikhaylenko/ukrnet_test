import {
  FETCH_START,
  FETCH_FAILURE,
  FETCH_INFO_SUCCESS,
} from '../actions/fetchActions';

const initialState = {
  result: {},
  currentNumber: null,
};

export default function products(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case FETCH_INFO_SUCCESS:
      return {
        ...state,
        result: action.data.result || {},
        currentNumber: action.data.currentNumber,
      };

    case FETCH_START:
      return {
        ...state,
        error: null,
      };

    case FETCH_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
}
