// import actionType from '../constant/constant';
import actionType from "../constant/constant";

// import usertest from '../actions/audit'

const initialState = {
  categorie: [],
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.ALL_CATEGORY_LOADED_FROM_API:
      return {
        ...state,
        categorie: action.categorie,
        loading: false,
      };
    default:
      return state;
  }
};
