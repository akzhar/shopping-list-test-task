import { ActionTypes, TAction } from '@store/actions';

export type TListItem = {
  id: string,
  productId: string
};

export type TListState = TListItem[];

const initialState: TListState = [];

const reducerList = (state: TListState = initialState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.RESET_LIST: {
      return initialState;
    }
    case ActionTypes.ADD_ITEM_TO_LIST: {
      const newListItem: TListItem = action.payload;
      return [...state, newListItem];
    }
    case ActionTypes.REMOVE_ITEM_FROM_LIST: {
      const listItemId = action.payload;
      return [...state.filter(item => item.id !== listItemId)];
    }
    default:
      return [...state];
  }
};

export default reducerList;
