import * as ActionTypes from '../constants/ActionTypes';
import { githubBaseUrl } from '../constants/baseUrl';

export const searchGithubUsers = (keyword) => (dispatch) => {

    dispatch(searching());
    return fetch(githubBaseUrl + 'search/users?q=' + keyword)
              .then(
                response => {
                  if (response.ok) {
                    return response;
                  } else {
                    var error = new Error('Error ' + response.status)
                    error.response = response;
                    throw error;
                  }
                },
                error => {
                  var errorMsg = new Error(error.message);
                  throw errorMsg;
                })
              .then(response => response.json())
              .then(users => dispatch(searchSuceed(users)))
              .catch(error => dispatch(searchFailed(error.message)));
}

export const searching = () => ({
    type: ActionTypes.ACTION_SEARCH_USER_LOADING
  });

export const searchFailed = (errMsg) => ({
    type: ActionTypes.ACTION_SEARCH_USER_ERROR,
    payload: errMsg
});

export const searchSuceed = (users) => ({
  type: ActionTypes.ACTION_SEARCH_USER_SUCCESS,
  payload: users
});
