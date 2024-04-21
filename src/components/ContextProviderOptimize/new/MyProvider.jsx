import React, { useEffect, useMemo, useReducer, useRef } from "react";
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
  // 保存state的最新值
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state
  },[state])
  const subscribersRef = useRef([]);
  
  // state 变化，遍历执行回调
  useEffect(() => {
    subscribersRef.current.forEach(sub => sub());
  }, [state]);

  const value = useMemo(
    () => ({
      dispatch,
      subscribe: cb => {
        subscribersRef.current.push(cb);
        return () => {
          subscribersRef.current = subscribersRef.current.filter(item => item !== cb);
        };
      },
      getState: () => stateRef.current
    }),
    []
  )
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>
};
export default MyProvider

export {
  MyContext
}