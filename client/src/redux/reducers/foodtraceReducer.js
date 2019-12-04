import * as actions from '../actions';

const initialState = {
  newFoodInfo: null,
  FoodInfo: null
};

const foodtraceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.QUERY_FOOD_INFO:
      return {
        ...state,
        FoodInfo: action.foodInfo
      };
    case actions.ADD_NEW_FOOD:
      return {
        ...state,
        newFoodInfo: action.addFood
      };
    default:
      return state;
  }
};

export default foodtraceReducer;
