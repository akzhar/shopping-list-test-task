import React from 'react';
import { useDispatch } from 'react-redux';

import ProductCard from '@components/ProductCard';
import Button from '@components/Button';
import ActionCreator from '@store/actions';

type TShoppingListItem = {
  id: string,
  productId: string
};

const ShoppingListItem: React.FC<TShoppingListItem> = ({ id, productId }: TShoppingListItem) => {

  const dispatch = useDispatch();

  return (
    <>
      <ProductCard id={productId}/>
      <div className="list__item__wrapper">
        <Button
          text="В корзину"
          clickHandler={() => {
            dispatch(ActionCreator.addItemToCart({ productId }));
            dispatch(ActionCreator.setInfoMessage(
              {
                label: 'Отлично!',
                text: 'Продукт добавлен в корзину'
              }
            ))
          }}
        />
        <Button
          text="Удалить"
          clickHandler={() => {
            dispatch(ActionCreator.removeItemFromList({ listItemId: id }));
            dispatch(ActionCreator.setInfoMessage(
              {
                label: 'Отлично!',
                text: 'Продукт удален из списка'
              }
            ))
          }}
        />
      </div>
    </>
  )
};

export default ShoppingListItem;
