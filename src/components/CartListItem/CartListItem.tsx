import React from 'react';
import { useDispatch } from 'react-redux';

import ProductCard from '@components/ProductCard';
import Button from '@components/Button';
import ActionCreator from '@store/actions';

type TCartListItem = {
  id: string,
  productId: string
};

const CartListItem: React.FC<TCartListItem> = ({ id, productId }: TCartListItem) => {

  const dispatch = useDispatch();

  return (
    <>
      <ProductCard id={productId}/>
      <div className="list__item__wrapper">
        <Button
          text="Удалить"
          clickHandler={() => {
            dispatch(ActionCreator.removeItemFromCart({ cartItemId: id }));
            dispatch(ActionCreator.setInfoMessage(
              {
                label: 'Отлично!',
                text: 'Продукт удален из корзины'
              }
            ))
          }}
        />
      </div>
    </>
  )
};

export default CartListItem;
