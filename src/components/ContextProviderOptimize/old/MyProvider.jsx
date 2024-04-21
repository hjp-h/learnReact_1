import React, { useReducer } from "react";
const MyContext = React.createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case 'addCount': {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case 'addNum': {
      return {
        ...state,
        num: state.num + 1
      }
    }
    default: return state;
  }
}

const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0, num: 0 })
  return <MyContext.Provider value={{state, dispatch}}>{children}</MyContext.Provider>
};
export default MyProvider

export {
  MyContext
}