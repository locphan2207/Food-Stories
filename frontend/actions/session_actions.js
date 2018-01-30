import * as SessionAPIUtil from '../api/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = (user) => (dispatch) => {
  SessionAPIUtil.postUser(user)
    .then(response => dispatch(receiveCurrentUser(response.currentUser)))
    .fail(response => dispatch(receiveErrors(response.responseJSON.errors)));
};

export const login = (user) => (dispatch) => {
  SessionAPIUtil.postSession(user)
    .then(response => dispatch(receiveCurrentUser(response.currentUser)))
    .fail(response => dispatch(receiveErrors(response.responseJSON.errors)));
};

export const logout = () => (dispatch) => {
  SessionAPIUtil.deleteSession()
    .then(() => receiveCurrentUser(null))
    .fail(response => dispatch(receiveErrors(response.responseJSON.errors)));
};
