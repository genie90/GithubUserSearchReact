import * as ActionTypes from '../constants/ActionTypes';

export default function githubUsers(state = {
    isLoading: true,
    errMsg: null,
    users: []
  }, action) {
    switch (action.type) {
      case ActionTypes.ACTION_SEARCH_USER_LOADING:
        return {...state, isLoading: true, errMsg: null, users: []};
      case ActionTypes.ACTION_SEARCH_USER_SUCCESS:
        return {...state, isLoading: false, errMsg: null, users: action.payload};
      case ActionTypes.ACTION_SEARCH_USER_ERROR:
        return {...state, isLoading: false, errMsg: action.payload, users: []};
      default:
        return state;
    }
  }
