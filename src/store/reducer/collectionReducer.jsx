
const initialState = {
  userCollection: [], // Array to hold user data
  userList: [], // Array to hold user data

};

function collectionReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {

    case 'USER_LIST':
    return {
      ...state,
      userList :action.payload,
    };
    case 'ADD_COLLECTION':
      return {
        ...state,
        userCollection :action.payload,
      };



    default:
      return state;
  }
}

export default collectionReducer;
