import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ApiComponent from './Content/Api/ApiComponent';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ApiComponent />} />
    </Routes>
  );
}
