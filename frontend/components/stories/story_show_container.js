import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import StoryShow from './story_show';

import {fetchStory} from '../../actions/story_actions';
import {postComment} from '../../actions/comment_actions';
import {postLike, deleteLike} from '../../util/like_api_util'; //get api to create actions here!!!

const mapSTP = (state, ownProps) => {
  return {
    story: state.entities.stories[`${ownProps.match.params.storyId}`],
    comments: Object.values(state.entities.comments).reverse(), //reverse to get most recent first
    users: state.entities.users,  //we pass a hash object->ez to find user by key author_id
    likes: state.entities.likes,  //we pass a hash object->ez to find user by likeIds
    currentUser: state.session.currentUser
  };
};

const mapDTP = (dispatch, ownProps) => {
  return {
    fetchStory: (storyId) => dispatch(fetchStory(storyId)),

    postLike: (itemType, itemId, like) => postLike(itemType, itemId, like)
      .then(() => dispatch(fetchStory(ownProps.match.params.storyId))),

    deleteLike: (likeId) => deleteLike(likeId)
      .then(() => dispatch(fetchStory(ownProps.match.params.storyId))),
      //need for refetch current item id

    postComment: (formData) => dispatch(postComment("stories",
      ownProps.match.params.storyId, formData)) // hard code 2 arguments,
      //so, in the comment_index, they just need to call postComment(comment)
  };
};

export default withRouter(connect(mapSTP, mapDTP)(StoryShow));
