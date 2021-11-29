import React from 'react';
import { useDispatch } from 'react-redux';

import ProductCard from '@components/ProductCard';
import Button from '@components/Button';
import ActionCreator from '@store/actions';

type TShoppingListItem = {
  productId: string
};

const ProductListItem: React.FC<TShoppingListItem> = ({ productId }: TShoppingListItem) => {

  const dispatch = useDispatch();

  return (
    <>
      <ProductCard id={productId}/>
      <div className="list__item__wrapper">
        <Button
          text="В список покупок"
          clickHandler={() => {
            dispatch(ActionCreator.addItemToList({ productId }));
            dispatch(ActionCreator.setInfoMessage(
              {
                label: 'Отлично!',
                text: 'Продукт добавлен в лист'
              }
            ))
          }}
        />
        <Button
          text="Удалить"
          clickHandler={() => {
            dispatch(ActionCreator.deleteProduct({ productId }));
            dispatch(ActionCreator.setInfoMessage(
              {
                label: 'Отлично!',
                text: 'Продукт удален'
              }
            ))
          }}
        />
      </div>
    </>
  )
};

export default ProductListItem;
