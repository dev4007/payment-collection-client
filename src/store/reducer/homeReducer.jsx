
const initialState = {
    total: [], // Array to hold user data

  
  };
  
  function homeReducer(state = initialState, action) {
    const { type } = action;
    switch (type) {
  
      case 'TOTAL_COUNT':
      return {
        ...state,
        total :action.payload,
      };

      default:
        return state;
    }
  }
  
  export default homeReducer;
  