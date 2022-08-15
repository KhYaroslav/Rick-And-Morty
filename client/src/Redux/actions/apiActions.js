// import axios from 'axios';
import {
  ALL_API_POSTS,
  ALL_API_POST,
  DELETE_API_POST,
  GET_API_POST,
} from '../types';

// export const addApiPost = () => (dispatch) => {
//   axios('https://rickandmortyapi.com/api/character')
//     .then(
//       (res) => dispatch({ type: ALL_API_POST, payload: res.data.results }),
//     );
// };

export const allApiPost = (value) => ({
  type: ALL_API_POSTS,
  payload: value,
});

export const allApi = (value) => ({
  type: ALL_API_POST,
  payload: value,
});

export const getApi = (input) => ({
  type: GET_API_POST,
  payload: input,
});

export const deleteApiPost = (id) => ({
  type: DELETE_API_POST,
  payload: id,
});
