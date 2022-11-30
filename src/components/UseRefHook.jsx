import React, { Fragment, useEffect, useRef, useState } from 'react'
export default function useRefHook() {
  const [count, setCount] = useState(0)
  const inputRef = useRef('你好鸭')
  useEffect(() => {
    inputRef.current = count
  },[count]) 
  return (
    <Fragment>
      <h3>useRefHook</h3>
      <p>当前计数：{count}，上一次count的值：{ inputRef.current}</p>
      <button onClick={() => setCount(count + 1)}>点我+1</button>
      {/* 注意：如果这里不把inputRef绑定给input 那么最初的值就是你好鸭 */}
      <input ref={inputRef} />
      <button onClick={() => console.log(inputRef)}>打印输入框最终值</button>
    </Fragment>
  )
}
