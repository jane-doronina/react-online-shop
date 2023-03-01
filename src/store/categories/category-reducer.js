export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP"
}

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {}
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
  switch(action.type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {...state, categoriesMap: action.payload};
    default:
      return state;
  }
}
