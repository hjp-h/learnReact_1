import React, { Fragment, useMemo, useState } from 'react'
export default function UseMemoHook() {
  const [count, setCount] = useState(0)
  const [show,setShow] = useState(true)
  const calculateAdd = (num) => {
    let res = 0
    for (let i = 1; i <= num; i++){
      res += i;
    }
    return res
  }
  const total = useMemo(() => calculateAdd(count),[count])
  return (
    <Fragment>
      <h3>UseMemoHook</h3>
      <p>当前计数：{count}，累计求和：{total }</p>
      <button onClick={() => setCount(count + 1)}>点我+1</button>
      <button onClick={() => setShow(!show)}>切换show</button>
    </Fragment>
  )
}
