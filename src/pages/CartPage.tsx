import React from 'react';
import { Link } from 'react-router-dom';

import Message from '@components/Message';
import CartList from '@components/CartList';
import { AppRoutes } from '@consts/const';

const CartPage: React.FC = () => (
  <>
    <Message />
    <Link to={AppRoutes.LIST}>
      К списку покупок
    </Link>
    <h1>Корзина</h1>
    <CartList />
  </>
);

export default CartPage;


