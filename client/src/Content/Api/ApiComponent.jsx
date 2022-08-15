import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getApi, allApiPost } from '../../Redux/actions/apiActions';
import ApiList from './ApiList';
import './Api.css';

export default function ApiComponent() {
  const api = useSelector((state) => state.api);
  const [input, setInput] = useState({});

  const changeHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (input.input) {
      dispatch(getApi(input));
    }
  }, [input]);

  useEffect(() => {
    dispatch(allApiPost());
  }, []);

  return (
    <div>
      <img className="logo" src="assets/intro.gif" alt="" />
      <h1>Персонажи</h1>
      <input
        type="text"
        name="input"
        placeholder="Поиск"
        onChange={changeHandler}
        value={input.input || ''}
      />
      {api && api.map((el) => <ApiList key={el.id} apis={el} />)}
    </div>
  );
}
