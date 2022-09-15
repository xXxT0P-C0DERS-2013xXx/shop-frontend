import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Header } from './pages/header/Header';
import { Home } from './pages/home/Home';
import { Shop } from './pages/shop/Shop';
import { path } from './utils/consts';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={path.HOME} element={<Home />} />
        <Route path={path.SHOP} element={<Shop />} />
      </Routes>
    </div>
  );
};
