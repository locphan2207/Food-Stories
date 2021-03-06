import {connect} from 'react-redux';
import {signup, login, receiveSessionErrors} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapSTP = (state, ownProps) => {
  return {
    errors: state.errors.session, //need to put this key before formType, idk why
    isLoggedIn: state.session.currentUser ? true : false,
    formType: ownProps.match.path === '/signup' ? 'signup' : 'login'
  };
};

const mapDTP = (dispatch, ownProps) => {
  return {
    submit: ownProps.match.path === '/signup' ?
      (user) => dispatch(signup(user)) :
      (user) => dispatch(login(user)),
    guestLogin: (user) => dispatch(login(user)),
    clearError: () => dispatch(receiveSessionErrors([])) //empty arr
  };
};

export default connect(mapSTP, mapDTP)(SessionForm);
