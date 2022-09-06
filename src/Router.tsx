import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyWork from 'components/MyWork';
import Profile from 'components/Profile';

const HomePage = React.lazy(() => import('./components/HomePage'));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/" element={<Profile />} />
        <Route path="/my-work" element={<MyWork />} />
      </Route>
    </Routes>
  );
};

export default Router;
