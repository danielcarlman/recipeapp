export const Types = {
  SET_TITLE: 'Recipes/SET_TITLE',
  ADD_INGREDIENTS: 'Recipes/SET_INGREDIENTS',
  UPDATE_INGREDIENT: 'Recipes/UPDATE_INGREDIENT',
};

export const Actions = {
  setTitle: (title) => {
    return { type: Types.SET_TITLE, payload: title };
  },
  addIngredients: (ingredient) => {
    return { type: Types.ADD_INGREDIENTS, payload: ingredient };
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
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    case Types.UPDATE_INGREDIENT:
      const { index, value } = action.payload;
      const beforeIngredients = state.ingredients.slice(0, index);
      const afterIngredients = state.ingredients.slice(index + 1);
      // const edittingIngredient = state.ingredients[index];
      return {
        ...state,
        // ingredients: beforeIngredients.concat(value).concat(afterIngredients),
        ingredients: [...beforeIngredients, value, ...afterIngredients],
      };
    default:
      return { ...state };
  }
}
