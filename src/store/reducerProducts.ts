import { ActionTypes, TAction } from '@store/actions';

export type TProduct = {
  id: string,
  name: string,
  priceValue: number,
  priceUnits: string,
  photoUrl: string
  description?: string
};

export type TProductsState = {
  products: TProduct[]
};

const initialState: TProductsState = {
  products: [] // TODO: add default products
};

const reducerProducts = (state: TProductsState = initialState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.RESET_PRODUCTS: {
      return initialState;
    }
    case ActionTypes.CREATE_PRODUCT: {
      const newProduct: TProduct = action.payload;
      return {...state, products: [...state.products, newProduct]};
    }
    default:
      return {...state};
  }
};

export default reducerProducts;
