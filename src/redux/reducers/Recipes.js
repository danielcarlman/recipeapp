export const Types = {
  SET_TITLE: 'Recipes/SET_TITLE',
  SET_INGREDIENTS: 'Recipes/SET_INGREDIENTS',
};

export const Actions = {
  setTitle: (title) => {
    return { type: Types.SET_TITLE, payload: title };
  },
  addIngredients: (ingredient) => {
    return { type: Types.SET_INGREDIENTS, payload: ingredient };
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
    case Types.SET_INGREDIENTS:
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    default:
      return { ...state };
  }
}
