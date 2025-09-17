export const initialState = {
    basket: []
};
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // Find the index of the first item with the matching title
      const index = state.basket.findIndex(
        (basketItem) => basketItem.title === action.title
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        // Remove the item at that index
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (title: ${action.title}) as it's not in basket!`);
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
