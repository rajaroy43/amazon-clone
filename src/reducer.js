export const initialState = {
  basket: [],
  user:null
};

export const getBasketTotal = (basket) =>
  basket?.reduce((ammount, item) => ammount + item.price, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //items exist
        newBasket.splice(index, 1);
      } else {
        //items not exist
        console.log(
          `Cant remove product id : ${action.id} as its not in basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
      case "SET_USER":
        console.log(action);
        return{
          ...state,
          user:action.user
        };
      case "EMPTY_BASKET":
        return{
          ...state,
          basket:[]
        }
    default:
      return state;
  }
};

export default reducer;
