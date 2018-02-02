import {connect} from 'react-redux';
import {fetchStory} from '../../actions/story_actions';
import StoryShow from './story_show';
import {withRouter} from 'react-router-dom';

const mapSTP = (state, ownProps) => ({
  story: state.entities.stories[`${ownProps.match.params.storyId}`]
});

const mapDTP = (dispatch, ownProps) => {
  return {
    fetchStory: (storyId) => dispatch(fetchStory(storyId))
  };
};

export default withRouter(connect(mapSTP, mapDTP)(StoryShow));
