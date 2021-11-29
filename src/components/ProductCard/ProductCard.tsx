import React from 'react';
import { useSelector } from 'react-redux';

import { TState } from '@store/reducer';
import { TProduct } from '@store/reducerProducts';

type TProductCard = {
  id: string
};

const ProductCard: React.FC<TProductCard> = ({ id }: TProductCard) => {

  const product: TProduct | undefined = useSelector((state: TState) => {
    return state.products.find((product: TProduct) => product.id === id);
  });

  return (
    product ?
    <div className="product">
      <div className="product__wrapper">
        <div className="product__photo">
          <img src={`data:image/png;base64,${product.dataPhoto}`} alt={`Фото ${product.name}`}/>
        </div>
        <div className="product__info">
          <h3 className="product__name">{product.name}</h3>
          <div className="product__price">
            <b className="product__price-value">{product.priceValue}</b>
            <span>{product.priceUnits}</span>
          </div>
          <p className="product__description">{product.description}</p>
        </div>
      </div>
    </div>
    :
    <>Упс... такого продукта больше не существует</>
  )
};

export default ProductCard;
