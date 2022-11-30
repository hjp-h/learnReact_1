import React, { useState,useTransition } from 'react'
// import { nanoid } from 'nanoid'
import { NAME_LIST } from '../config/mockData'
// useTransition是用来设置更新的优先级的
export default function UseTransitionHook() {
  const [nameList, setNameList] = useState(NAME_LIST)
  const [pending,startTransition] = useTransition()
  const handleInput = (e) => {
    // 不使用useTransition会导致输入的时候卡顿 因为react会等到数据处理完毕之后再渲染视图
    // 使用useTransition之后 可以让相关数据慢点更新 让视图先渲染
    // 还允许组件将较慢的数据获取更新推迟到后续呈现，以便可以立即呈现更重要的更新。
    startTransition(() => {
      const keyword = e.target.value;
      setNameList(NAME_LIST.filter(name => name.toLowerCase().includes(keyword)))
    })
  }
  return (
    <div style={{height:"400px"}}>
      <h3>UseTransition</h3>
      <input placeholder='请输入关键词查找' onInput={handleInput}></input>
      {pending ? <div style={{height:'300px'}}>加载中。。。</div> : <ul style={{height:'300px',overflow:'auto'}}>
        {
          nameList.map((stu,index) => (
            <li key={index}>{stu}</li>
          ))
        }
      </ul>}
    </div>
  )
}
