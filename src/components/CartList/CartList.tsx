import React from 'react';
import { useSelector } from 'react-redux';

import CartListItem from '@components/CartListItem';
import { TState } from '@store/reducer';
import { TCartItem } from '@store/reducerCart';

const CartList: React.FC = () => {

  const cartItems: TCartItem[] = useSelector((state: TState) => state.cart);

  return (
    cartItems.length
      ?
    <ul className="list">
      {
        cartItems.map(cartItem => (
          <li key={cartItem.id} className="list__item">
            <CartListItem id={cartItem.id} productId={cartItem.productId} />
          </li>
        ))
      }
    </ul>
      :
    <p>В корзине пусто...</p>
  )
};

export default CartList;
