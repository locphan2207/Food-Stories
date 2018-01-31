import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser === {} ? null : currentUser
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = (user) => (dispatch) => {
  SessionAPIUtil.postUser(user)
    .then(response => dispatch(receiveCurrentUser(response.currentUser)))
    .fail(response => dispatch(receiveSessionErrors(response.responseJSON.errors)));
};

export const login = (user) => (dispatch) => {
  SessionAPIUtil.postSession(user)
    .then(response => dispatch(receiveCurrentUser(response.currentUser)))
    .fail(response => dispatch(receiveSessionErrors(response.responseJSON.errors)));
};

export const logout = () => (dispatch) => {
  SessionAPIUtil.deleteSession()
    .then((response) => dispatch(receiveCurrentUser(response.currentUser)))
    .fail(response => dispatch(receiveSessionErrors(response.responseJSON.errors)));
};
