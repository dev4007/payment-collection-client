
const initialState = {
    paymentHistory: [], // Array to hold user data

  
  };
  
  function paymentReducer(state = initialState, action) {
    const { type } = action;
    switch (type) {
  
      case 'PAYMENT_HISTORY':
      return {
        ...state,
        paymentHistory :action.payload,
      };

      default:
        return state;
    }
  }
  
  export default paymentReducer;
  