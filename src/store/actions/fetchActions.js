export const FETCH_START = 'FETCH_START';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_INFO_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

import {
  API_URL
} from "../../constants";

export const fetchStart = () => ({
  type: FETCH_START
});

export const fetchError = error => ({
  type: FETCH_FAILURE,
  error
});

export const fetchCarInfoSuccess = data => ({
  type: FETCH_INFO_SUCCESS,
  data
});

const fetchData = (dispatch, apiRoute, requestData, responseCallback = () => {}) => {
  dispatch(fetchStart());
  return fetch(`${API_URL}/${apiRoute}/${requestData}`)
    .then(res => res.json())
    .then(data => responseCallback(data))
    .catch(err => {
      dispatch(fetchError(error));
      console.log(new Error(err));
    });
};

export function fetchCarInfoByNumber(number) {
  return dispatch => fetchData(dispatch, 'car-info', number, data => {
    return dispatch(fetchCarInfoSuccess({
      result: data.result,
      currentNumber: number,
    }))
  });
}
