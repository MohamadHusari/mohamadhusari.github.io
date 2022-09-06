import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from 'components/Profile';

const HomePage = React.lazy(() => import('./components/HomePage'));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/" element={<Profile />} />
        <Route path="/my-work" element={<h1>1111111</h1>} />
        <Route path="/contact" element={<h1>2222222</h1>} />
      </Route>
    </Routes>
  );
};

export default Router;
