import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from '@components/Layout';
import HomePage from '@pages/HomePage'
import NotFoundPage from '@pages/NotFoundPage'
import { AppRoutes } from '@consts/const';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoutes.HOME} element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
