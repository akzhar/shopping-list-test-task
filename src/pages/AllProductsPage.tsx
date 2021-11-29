import React from 'react';
import { Link } from 'react-router-dom';

import Message from '@components/Message';
import ProductList from '@components/ProductList/ProductList';
import { AppRoutes } from '@consts/const';

const AllProductsPage: React.FC = () => (
  <>
    <Message />
    <Link to={AppRoutes.LIST}>
      К списку покупок
    </Link>
    <h1>Все продукты</h1>
    <ProductList />
  </>
);

export default AllProductsPage;


