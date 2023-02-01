const STATUS = 'bookstore/categories/STATUS';

const initialStates = {
  categories: [],
};

const reducer = (state = initialStates, action) => {
  switch (action.type) {
    case STATUS:
      return { ...state, status: 'Under Construction' };
    default:
      return state;
  }
};

export const checkStatus = () => ({ type: STATUS });

export default reducer;