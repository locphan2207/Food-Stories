import {connect} from 'react-redux';
import {fetchStories} from '../../actions/story_actions';
import SuggestionBox from './suggestion_box';
import {withRouter} from 'react-router-dom';

const mapSTP = (state, ownProps) => {
  const ids = Object.keys(state.entities.stories);
  const currentId = ownProps.match.params.storyId;
  let threeStos = [];
  if (!ids || ids.length < 10) threeStos = [];  //we need at least 4 ids,
  else {
    //----I wanted to random suggestion, but it doesnt always work well----
    //----So, let just get the neighbors of this current story
    let currentStoIdx = ids.indexOf(`${currentId}`);
    if (currentStoIdx > 2) {
      for (let i = 0; i < 3; i++)
        threeStos.push(state.entities.stories[`${ids[--currentStoIdx]}`]);
    } else {
      for (let i = 0; i < 3; i++)
        threeStos.push(state.entities.stories[`${ids[++currentStoIdx]}`]);
    }
  }
  return {
    threeStos: threeStos
  };
};

const mapDTP = (dispatch, ownProps) => {
  return {
    fetchStories: () => dispatch(fetchStories())
  };
};

export default withRouter(connect(mapSTP, mapDTP)(SuggestionBox));
