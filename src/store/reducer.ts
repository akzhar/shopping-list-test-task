import { combineReducers } from 'redux';

import reducerCart, { TCartState } from '@store/reducerCart';
import reducerList, { TListState } from '@store/reducerList';
import reducerMessage, { TMessageState } from '@store/reducerMessage';
import reducerProducts, { TProductsState } from '@store/reducerProducts';

export type TState = {
  cart: TCartState,
  list: TListState,
  message: TMessageState,
  products: TProductsState
};

const reducer = combineReducers({
  cart: reducerCart,
  list: reducerList,
  message: reducerMessage,
  products: reducerProducts
});

export default reducer;
