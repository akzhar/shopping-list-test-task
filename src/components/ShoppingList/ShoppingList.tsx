import React from 'react';
import { useSelector } from 'react-redux';

import ShoppingListItem from '@components/ShoppingListItem';
import { TState } from '@store/reducer';
import { TListItem } from '@store/reducerList';

const ShoppingList: React.FC = () => {

  const shoppingListItems: TListItem[] = useSelector((state: TState) => state.shoppingList);

  return (
    shoppingListItems.length
      ?
    <ul className="list">
      {
        shoppingListItems.map(listItem => (
          <li key={listItem.id} className="list__item">
            <ShoppingListItem id={listItem.id} productId={listItem.productId} />
          </li>
        ))
      }
    </ul>
      :
    <p>Список пуст...</p>
  )
};

export default ShoppingList;
