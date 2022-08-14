import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addApiPost } from '../../Redux/actions/apiActions';
import ApiList from './ApiList';
import './Api.css';

export default function ApiComponent() {
  const api = useSelector((state) => state.api);
  console.log('🚀 ~ file: ApiComponent.jsx ~ line 8 ~ ApiComponent ~ api', api);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!api.length) {
      dispatch(addApiPost());
    }
  }, []);

  return (
    <div>
      <img className="logo" src="assets/logo.png" alt="" />
      <h1>Персонажи</h1>
      <input
        type="text"
        placeholder="Поиск"
      />
      {api.map((el) => <ApiList key={el.id} apis={el} />)}
    </div>
  );
}
