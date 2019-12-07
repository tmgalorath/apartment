import { BRING_ITEM } from '../actions/tutorials';

// const initialState = {
//   loading: false,
//   tab: 'This Week'
// };
// {kitchen : []}
export default (state = {items: []} , action) => {
  const { type, data } = action;
  switch (type) {
    case BRING_ITEM:
      return { items: [data, ...state.items ] };
    default:
      return state;
  }
};
