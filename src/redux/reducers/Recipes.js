export const Types = {
  SET_TITLE: 'Recipes/SET_TITLE',
  ADD_INGREDIENTS: 'Recipes/SET_INGREDIENTS',
  DELETE_INGREDIENT: 'Recipes/DELETE_INGREDIENT',
  UPDATE_INGREDIENT: 'Recipes/UPDATE_INGREDIENT',
};

export const Actions = {
  setTitle: (title) => {
    return { type: Types.SET_TITLE, payload: title };
  },
  addIngredients: (ingredient) => {
    return { type: Types.ADD_INGREDIENTS, payload: ingredient };
  },
  deleteIngredients: (index) => {
    return { type: Types.DELETE_INGREDIENT, payload: { index } };
  },
  updateIngredient: (index, value) => {
    return { type: Types.UPDATE_INGREDIENT, payload: { index, value } };
  },
};

const INITIAL_STATE = {
  title: '',
  ingredients: [],
};

export default function Recipes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_TITLE:
      return { ...state, title: action.payload };

    case Types.ADD_INGREDIENTS:
      return { ...state, ingredients: [action.payload, ...state.ingredients] };

    case Types.DELETE_INGREDIENT:
      state.ingredients.splice(action.payload.index, 1);
      return {
        ...state,
        ingredients: [...state.ingredients],
      };

    case Types.UPDATE_INGREDIENT:
      const { index, value } = action.payload;
      const beforeIngredients = state.ingredients.slice(0, index);
      const afterIngredients = state.ingredients.slice(index + 1);
      return {
        ...state,
        ingredients: [...beforeIngredients, value, ...afterIngredients],
      };

    default:
      return { ...state };
  }
}
