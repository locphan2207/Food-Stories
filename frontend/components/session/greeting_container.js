import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import Greeting from './greeting';

const mapSTP = (state) => ({
  currentUser: state.session.currentUser
});

const mapDTP = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapSTP, mapDTP)(Greeting);
