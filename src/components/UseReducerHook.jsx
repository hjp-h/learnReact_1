import React, { Fragment, useReducer } from 'react'
export default function UseReducerHook() {
  const countReducer = (preState, action) => {
    const { type, data } = action;
    switch (type) {
      case 'add':
        return preState + data
      case 'sub':
        return preState - data
      default:
        return preState
    }

  }
  const [count, dispatch] = useReducer(countReducer,0)
  return (
    <Fragment>
      <h3>UseReducerHook</h3>
      <p>当前计数：{count}</p>
      <button onClick={() => dispatch({ type: 'add', data: 1 })}>点我+1</button>
      <button onClick={() => dispatch({type:'sub',data:1})}>点我-1</button>
    </Fragment>
  )
}
