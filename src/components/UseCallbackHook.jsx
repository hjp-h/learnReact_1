import React, { useCallback, Fragment, memo, useState } from 'react'
export const JPButton  = memo((props) => {
  return (
    <button onClick={props.addFn}>点我+1</button>
  )
})
export default function UseCallbackHook() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => setCount((preCount) => preCount+1),[count])
  return (
    <Fragment>
      <h3>UseCallbackHook</h3>
      <p>当前计数：{ count }</p>
      <JPButton addFn={increment}/>
    </Fragment>
  )
}
