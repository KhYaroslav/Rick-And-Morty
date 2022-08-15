import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteApiPost } from '../../Redux/actions/apiActions';

export default function ApiList({ apis }) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteApiPost(apis.id));
  };

  const color = (status) => {
    if (status === 'Alive') {
      return 'green';
    }
    if (status === 'Dead') {
      return 'red';
    }
    return 'orange';
  };

  return (
    <div className="content-characters" v-for="character in filterSearch">
      <div className="character">
        <img src={apis.image} alt={apis.image} />
        <div className="info-character">
          <h2>{apis.name}</h2>
          <h4>{apis.species}</h4>
          <h4 style={{ background: color(apis.status) }}>{apis.status}</h4>
          <h4 onClick={deleteHandler}>Удалить</h4>
        </div>
      </div>
    </div>
  );
}
