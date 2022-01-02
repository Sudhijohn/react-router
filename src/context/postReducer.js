export const initialState = {
  posts: [],
  post: {
    title: '',
    id: 0,
    userId: 0,
    body: '',
  },
};

export const PostReducer = (state, action) => {
  if (action.type === 'FETCH_POSTS') {
    const newState = { ...state };
    newState.posts = [...action.payLoad];
    return newState;
  }
  if (action.type === 'FETCH_POST') {
    const newState = { ...state };
    const post = newState.posts.find((post) => post.id === Number(action.id));
    newState.post = post || initialState.post;
    return newState;
  }
  return { ...state };
};
