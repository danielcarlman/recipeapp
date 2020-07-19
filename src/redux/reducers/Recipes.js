export const Types = {
  SET_TITLE: 'Recipes/SET_TITLE',
  SET_INGREDIENTS: 'Recipes/SET_INGREDIENTS',
};

export const Actions = {
  setTitle: (title) => {
    return { type: Types.SET_TITLE, payload: title };
  },
};

const INITIAL_STATE = {
  title: '',
  ingredients: [
    { name: 'rice', quantity: 100, metric: 'grams' },
    { name: 'egg', quantity: 6, metric: 'unit' },
  ],
};

export default function Recipes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_TITLE:
      return { ...state, title: action.payload };
    default:
      return { ...state };
  }
}
