// actions types
export const ADD_ITEM = 'ADD_ITEM';
export const OF = 'OF';
export const EQUAL = 'EQUAL';

// actions createors
export function onAddItem(item) {
  return {
    type: ADD_ITEM,
    item: item
  };
};

export function onOf() {
  return {
    type: OF
  };
};

export function onEqual() {
  return {
    type: EQUAL
  };
};
