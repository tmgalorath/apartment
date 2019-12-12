import { BRING_ITEM, UPDATE_ITEM } from '../actions/tutorials';

// const initialState = {
//   loading: false,
//   tab: 'This Week'
// };
// {kitchen : []}
const defaultItems = [
  { title: 'TV', tag: 'Kitchen', ownerName: 'John Adams' },
  { title: 'Desk', tag: 'Kitchen', ownerName: 'George Washington' },
  { title: 'Chair', tag: 'Kitchen', ownerName: 'Abraham Lincoln' },
  { title: 'TV Stand', tag: 'Kitchen', ownerName: 'George Washington' },
  { title: 'Xbox', tag: 'Personal', ownerName: 'Abraham Lincoln' },
  { title: 'PS4', tag: 'Personal', ownerName: 'George Washington' },
  { title: 'Nintendo Switch', tag: 'Personal', ownerName: 'John Adams' },
  { title: 'Desktop Computer', tag: 'Personal', ownerName: 'Abraham Lincoln' },
  { title: 'Apple TV', tag: 'Living', ownerName: 'John Adams' },
  { title: 'ChromeCast', tag: 'Living', ownerName: 'Abraham Lincoln' },
  { title: 'Window Shades', tag: 'Bedroom', ownerName: 'Abraham Lincoln' },
  { title: 'Wifi Router', tag: 'Bedroom', ownerName: 'George Washingto' }
];
export default (state = { items: defaultItems }, action) => {
  const { type, data } = action;
  switch (type) {
    case BRING_ITEM:
      return { items: [data, ...state.items] };
    case UPDATE_ITEM:
      const updated = state.items.map(x => {
        if (data.title === x.title) {
          return data;
        } else {
          return x;
        }
      });
      return { items: updated };
    default:
      return state;
  }
};
