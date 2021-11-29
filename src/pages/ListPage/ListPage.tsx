import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '@components/Header';
import Message from '@components/Message';
import CartIcon from '@components/CartIcon';
import Button from '@components/Button';
import ShoppingList from '@components/ShoppingList/ShoppingList';
import { TState } from '@store/reducer';
import { AppRoutes } from '@consts/const';

const ListPage: React.FC = () => {

  const hasProducts: boolean = useSelector((state: TState) => Boolean(state.products.length));

  return (
    <div className="list-page">
      <Message />
      <Header>
        <div className="list-page__buttons">
          <Link to={AppRoutes.NEW_PRODUCT}>
            <Button text="Создать продукт" />
          </Link>
          {
            hasProducts
            &&
            <Link to={AppRoutes.PRODUCTS}>
              <Button text="+" isAnimate />
            </Link>
          }
        </div>
        <div className="list-page__cart">
          <CartIcon />
        </div>
      </Header>
      <h1>Список покупок</h1>
      <ShoppingList />
    </div>
  )
};

export default ListPage;


