import { ActionTypes, TAction } from '@store/actions';

export type TCartItem = {
  id: string,
  listItemId: string
};

export type TCartState = {
  cartItems: TCartItem[]
};

const initialState: TCartState = {
  cartItems: []
};

const reducerCart = (state: TCartState = initialState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.RESET_CART: {
      return initialState;
    }
    case ActionTypes.ADD_ITEM_TO_CART: {
      const newCartItem: TCartItem = action.payload;
      return {...state, cartItems: [...state.cartItems, newCartItem]};
    }
    // case ActionTypes.REMOVE_ITEM_FROM_CART: {
    //   const cartItemId = action.payload;
    //   return {...state, cartItems: state.cartItems.filter(cartItem => cartItem.id !== cartItemId)};
    // }
    default:
      return {...state};
  }
};

export default reducerCart;
