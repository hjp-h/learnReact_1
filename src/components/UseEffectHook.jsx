import React, { Fragment, useEffect, useState } from 'react'
export default function UseEffectHook() {
  const [count, setCount] = useState(0)
  const [show,setShow] = useState(true)
  useEffect(() => {
    console.log('UseEffectHook组件渲染了')
    return () => {
      console.log('UseEffectHook组件卸载了')
    }
  }, [])
  useEffect(() => {
    console.log('count更新了')
    if (count === 3) {
      setTimeout(() => setCount(4), 500);
    }
  }, [count])
  return (
    <Fragment>
      <h3>UseEffectHook</h3>
      <p>当前计数：{count}</p>
      <p>show:{show?'显示':'隐藏'}</p>
      <button onClick={() => setCount(count + 1)}>点我+1</button>
      <button onClick={() => setShow(!show)}>切换show</button>
    </Fragment>
  )
}
