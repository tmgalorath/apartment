export const BRING_ITEM = 'BRING_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export const bringItem = item => {
  return { type: BRING_ITEM, data: item };
};
export const updateItem = item => {
  return { type: UPDATE_ITEM, data: item };
};
