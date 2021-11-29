import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '@components/Button';
import ProductListItem from '@components/ProductListItem';
import { TState } from '@store/reducer';
import { TProduct } from '@store/reducerProducts';
import { AppRoutes } from '@consts/const';

const ProductIList: React.FC = () => {

  const products: TProduct[] = useSelector((state: TState) => state.products);

  return (
    products.length
      ?
    <ul className="list">
      {
        products.map(product => (
          <li key={product.id} className="list__item">
            <ProductListItem productId={product.id} />
          </li>
        ))
      }
    </ul>
      :
    <>
      <p>Список пуст...</p>
      <Link to={AppRoutes.NEW_PRODUCT}>
        <Button text="Cоздать продукт" />
      </Link>
    </>
  )
};

export default ProductIList;
