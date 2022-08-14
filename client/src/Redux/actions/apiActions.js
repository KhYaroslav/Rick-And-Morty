import axios from 'axios';
import { ALL_API_POST, DELETE_API_POST } from '../types';

export const addApiPost = () => (dispatch) => {
  axios('https://rickandmortyapi.com/api/character')
    .then((res) => dispatch({ type: ALL_API_POST, payload: res.data.results }));
};

export const deletePost = (id) => {
  console.log(id);
  return {
    type: DELETE_API_POST,
    payload: id,
  };
};