import { ActionTypes, TAction } from '@store/actions';

export type TProduct = {
  id: string,
  name: string,
  priceValue: number,
  priceUnits: string,
  dataPhoto: string, // base64 img
  description?: string
};

export type TProductsState = TProduct[];

const initialState: TProductsState = [];

const reducerProducts = (state: TProductsState = initialState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.RESET_PRODUCTS: {
      return initialState;
    }
    case ActionTypes.CREATE_PRODUCT: {
      const newProduct: TProduct = action.payload;
      return [...state, newProduct];
    }
    case ActionTypes.DELETE_PRODUCT: {
      const productId: string = action.payload;
      return [...state.filter(product => product.id !== productId)];
    }
    default:
      return [...state];
  }
};

export default reducerProducts;
