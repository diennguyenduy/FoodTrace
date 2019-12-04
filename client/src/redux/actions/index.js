import AddFood from '../../models/invoke';
import QueryFood from '../../models/query';

export const QUERY_FOOD_INFO = 'QUERY_FOOD_INFO';
export const queryFoodInfo = (id) => async (dispatch, getState) => {
  const state = getState();
  let foodInfo = await QueryFood(id);
  dispatch({
    type: QUERY_FOOD_INFO,
    foodInfo
  });
};

export const ADD_NEW_FOOD = 'ADD_NEW_FOOD';
export const addNewFood = (
  ProductID,
  ProductName,
  RetailerID,
  RetailerImDate,
  Quantity,
  Product_ProcessorID
) => async (dispatch, getState) => {
  const state = getState();
  let addFood = await AddFood(
    ProductID,
    ProductName,
    RetailerID,
    RetailerImDate,
    Quantity,
    Product_ProcessorID
  );
  dispatch({
    type: ADD_NEW_FOOD,
    addFood
  });
};
