import React, { Fragment, useState, useRef, memo, forwardRef, useImperativeHandle } from 'react'
const JPInput = memo(forwardRef((props, ref) => {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    value: () => inputRef.current.value
  }),[inputRef])
  return (
    <input type="text" ref={inputRef}/>
  )
}))
export default function UseImperativeHandleHook() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()
  return (
    <Fragment>
      <h3>useImperativeHandle</h3>
      <p>当前计数：{count}</p>
      <button onClick={() => setCount(count + 1)}>点我+1</button>
      <button onClick={() => inputRef.current.focus() }>点我聚焦</button>
      <JPInput ref={inputRef} />
    </Fragment>
  )
}
