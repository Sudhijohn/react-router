import React, { useReducer } from 'react';
import PostContext from './postContext';
import { PostReducer, initialState } from './postReducer';

const PostProvider = (props) => {
  const [state, dispatch] = useReducer(PostReducer, initialState);
  const fetchAllPosts = (data) => {
    dispatch({ type: 'FETCH_POSTS', payLoad: data });
  };

  const fetchPost = (id) => {
    dispatch({ type: 'FETCH_POST', id: id });
  };

  const postContext = {
    posts: state.posts,
    post: state.post,
    fetchAllPosts: fetchAllPosts,
    fetchPost: fetchPost,
  };
  return (
    <PostContext.Provider value={postContext}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostProvider;
