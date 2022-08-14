import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addApiPost } from '../../Redux/actions/apiActions';
import ApiList from './ApiList';
import './Api.css';

export default function ApiComponent() {
  const api = useSelector((state) => state.api);
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    if (!api.length) {
      dispatch(addApiPost());
    }
  }, []);

  return (
    <div>
      <img className="logo" src="assets/intro.gif" alt="" />
      <h1>Персонажи</h1>
      <input
        type="text"
        placeholder="Поиск"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />
      {api.map((el) => <ApiList key={el.id} apis={el} />)}
    </div>
  );
}
