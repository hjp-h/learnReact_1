import React, { createContext, Fragment, useContext, useState } from 'react'
const Context = createContext();
export function GrandSon() {
  const count = useContext(Context)
  return (
    <div>
      <p>我是子孙组件，我接收到的值是：{count}</p>
    </div>
  )
}
export function Son() {
  return (
    <div>
      <GrandSon/>
    </div>
  )
}
export default function UseContextHook() {
  const [count, setCount] = useState(0)
  
  return (
    <Fragment>
      <h3>UseContextHook</h3>
      <Context.Provider value={count}>
        <Son/>
      </Context.Provider>
      <button onClick={() => setCount(count + 1)}>点我+1</button>
    </Fragment>
  )
}
