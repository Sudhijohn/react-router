import React from 'react';

const PostContext = React.createContext({
  posts: [],
  fetchAllPosts: () => {},
});

export default PostContext;
