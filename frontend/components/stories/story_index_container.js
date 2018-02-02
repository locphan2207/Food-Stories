import {connect} from 'react-redux';
import {fetchStories} from '../../actions/story_actions';
import StoryIndex from './story_index';

const mapSTP = (state) => ({
  stories: Object.values(state.entities.stories)
});

const mapDTP = (dispatch) => ({
  fetchStories: () => dispatch(fetchStories())
});

export default connect(mapSTP, mapDTP)(StoryIndex);
