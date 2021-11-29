import React from 'react';
import { Link } from 'react-router-dom';

import Header from '@components/Header';
import Message from '@components/Message';
import NewProductForm from '@components/NewProductForm/NewProductForm';
import { AppRoutes } from '@consts/const';

const NewProductPage: React.FC = () => {
  return (
  <>
    <Message />
    <Header>
      <Link to={AppRoutes.LIST}>
        К списку покупок
      </Link>
      <Link to={AppRoutes.PRODUCTS}>
        К списку продуктов
      </Link>
    </Header>
    <h1>Новый продукт</h1>
    <NewProductForm />
  </>
)
};

export default NewProductPage;


