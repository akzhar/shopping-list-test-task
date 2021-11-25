import getNewID from '@utils/getNewID';

import { TState } from '@store/reducer';
import { TProduct } from '@store/reducerProducts';
import { TListItem } from '@store/reducerList';
import { TCartItem } from '@store/reducerCart';
import { DEFAULT_PRICE_UNITS } from '@consts/const';

export type TAction = {
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
};

export enum ActionTypes {
  // message
  RESET_MESSAGE = 'reset message',
  SET_WARNING_MESSAGE = 'set warning message',
  SET_INFO_MESSAGE = 'set info message',
  SHOW_MESSAGE = 'show message',
  HIDE_MESSAGE = 'hide message',
  // products
  RESET_PRODUCTS = 'reset products',
  // DELETE_PRODUCT = 'delete product'
  CREATE_PRODUCT = 'create product',
  // shopping list
  RESET_LIST = 'reset product list',
  REMOVE_ITEM_FROM_LIST = 'remove item from list',
  ADD_ITEM_TO_LIST = 'add item to list',
  // cart
  RESET_CART = 'reset cart',
  // REMOVE_ITEM_FROM_CART = 'remove item from cart'
  ADD_ITEM_TO_CART = 'add item to cart',
}

interface ICreateProduct {
  productName: string,
  productPrice: number,
  productPhotoUrl: string,
  productDescription?: string
}

// interface IDeleteProduct {
//   productId: string
// }

interface IAddItemToList {
  productId: string
}

interface IRemoveItemFromList {
  listItemId: string
}

interface IAddItemToCart {
  listItemId: string
}

// interface IRemoveItemFromCart {
//   cartItemId: string
// }

const ActionCreator = {
  reset: () => {
    return (dispatch: (action: TAction) => VoidFunction, getState: () => TState) => {
      dispatch({ type: ActionTypes.RESET_MESSAGE});
      dispatch({ type: ActionTypes.RESET_PRODUCTS});
      dispatch({ type: ActionTypes.RESET_LIST});
      dispatch({ type: ActionTypes.RESET_CART});
    }
  },
  set404WarningMessage: () => {
    return (dispatch: (action: TAction) => void) => {
      const label = 'Код ошибки 404:';
      const text = 'Запрошенный ресурс не был найден...';
      dispatch({ type: ActionTypes.SET_WARNING_MESSAGE, payload: { label, text } });
      dispatch({ type: ActionTypes.SHOW_MESSAGE});
    }
  },
  createProduct: ({ productName, productPrice, productPhotoUrl, productDescription }: ICreateProduct): TAction => {
    const newProduct: TProduct = {
      id: getNewID(),
      name: productName,
      priceValue: productPrice,
      priceUnits: DEFAULT_PRICE_UNITS,
      photoUrl: productPhotoUrl,
      description: productDescription
    };
    return { type: ActionTypes.CREATE_PRODUCT, payload: newProduct };
  },
  // deleteProduct: ({ productId }: IDeleteProduct): TAction => {
  //   return { type: ActionTypes.DELETE_PRODUCT, payload: productId };
  // },
  addItemToList: ({ productId }: IAddItemToList): TAction => {
    const newListItem: TListItem = {
      id: getNewID(),
      productId
    };
    return { type: ActionTypes.ADD_ITEM_TO_LIST, payload: newListItem };
  },
  removeItemFromList: ({ listItemId }: IRemoveItemFromList): TAction => {
    return { type: ActionTypes.ADD_ITEM_TO_LIST, payload: listItemId };
  },
  addItemToCart: ({ listItemId }: IAddItemToCart): TAction => {
    const newCartItem: TCartItem = {
      id: getNewID(),
      listItemId
    };
    return { type: ActionTypes.ADD_ITEM_TO_CART, payload: newCartItem };
  }
  // removeItemFromCart: ({ cartItemId }: IRemoveItemFromCart): TAction => {
  //   return { type: ActionTypes.REMOVE_ITEM_FROM_CART, payload: cartItemId };
  // }
};

export default ActionCreator;
