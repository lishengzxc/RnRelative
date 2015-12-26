// actions types
export const ADD_ITEM = 'ADD_ITEM';
export const OF = 'OF';
export const EQUAL = 'EQUAL';
export const CLEAR = 'CLEAR';
export const OLDER = 'OLDER';
export const YOUNGER = 'YOUNGER';

// actions createors
export function onAddItem(item) {
  return {
    type: ADD_ITEM,
    item: item
  };
};

export function onClear() {
  return {
    type: CLEAR
  };
};

export function onOlder() {
  return {
    type: OLDER
  };
}

export function onYounger() {
  return {
    type: YOUNGER
  };
}

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
