import { ALL_API_POST, DELETE_API_POST } from '../types';

const allApiPost = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_API_POST:
      return payload;
    case DELETE_API_POST:
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
};

export default allApiPost;
