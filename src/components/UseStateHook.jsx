import React, { Fragment, useState } from 'react'
import { nanoid } from 'nanoid'
export default function UseStateHook() {
  const [count, setCount] = useState(0)
  const [students, setStudents] = useState([{ id: nanoid(), name: 'zhangsan', age: 18 }])
  const addAge = (index) => {
    const newStudents = [...students]
    newStudents[index].age += 1
    setStudents(newStudents)
  }
  const addStu = () => setStudents((preStudents) => [...preStudents, { id: nanoid(), name: 'lisi', age: 18 }])
  return (
    <Fragment>
      <h3>UseStateHook</h3>
      <p>当前计数：{count}</p>
      <button onClick={() => setCount(count + 1)}>点我+1</button>
      <p>当前学生：<button onClick={addStu}>添加学生</button></p>
      <ul>
        {
          students.map((stu,index) => (
            <li key={stu.id}>编号：{stu.id}，姓名：{stu.name}，年龄：{stu.age}，<button onClick={(e) => addAge(index)}>年龄＋1</button></li>
          ))
        }
      </ul>
    </Fragment>
  )
}
