import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppRoutes } from '@consts/const';
import cartIconPath from '@assets/img/cart.svg';
import { TState } from '@store/reducer';

const CartIcon: React.FC = () => {

  const itemsInCart: number = useSelector((state: TState) => state.cart.length);

  return (
    <div className="cart-icon">
        <Link to={AppRoutes.CART}>
          <output className="cart-icon__counter">{itemsInCart}</output>
          <img src={cartIconPath} alt="cart" width="24" height="24" />
        </Link>
    </div>
  )
};

export default CartIcon;
