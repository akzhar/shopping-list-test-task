import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from '@components/Layout';
import HomePage from '@pages/HomePage';
import NewProductPage from '@pages/NewProductPage';
import ListPage from '@pages/ListPage';
import AllProductsPage from '@pages/AllProductsPage';
import CartPage from '@pages/CartPage';
import NotFoundPage from '@pages/NotFoundPage';
import { AppRoutes } from '@consts/const';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoutes.HOME} element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path={AppRoutes.LIST} element={<ListPage/>} />
        <Route path={AppRoutes.PRODUCTS} element={<AllProductsPage/>} />
        <Route path={AppRoutes.NEW_PRODUCT} element={<NewProductPage/>} />
        <Route path={AppRoutes.CART} element={<CartPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
