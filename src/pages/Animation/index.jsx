import React,{useRef, useState} from 'react'
import {CSSTransition,SwitchTransition,TransitionGroup} from "react-transition-group"
import './index.css'
export default function Animation() {
  const [show,setShow] = useState(true) 
  const nodeRef = useRef(null)
  const [books,setBooks] = useState([{
    id:1,name:'JS高级程序设计',price:99
  },{
    id:2,name:'JS设计模式',price:88
  },{
    id:3,name:'VueJs设计与实现',price:108
  }])
  const handleDelBooks = (index) => {
    const newBooks = [...books]
    newBooks.splice(index,1);
    setBooks(newBooks)
  }
  return (
    <>
      <button className='primary-btn' onClick={() => setShow(!show)}>切换动画</button>
      <h2>CSSTransition</h2>
      {/* timeout决定动态类名的添加删除 */}
      {/* 事件监听onEnter onEntering onEntered onExit onExiting onExiting  */}
      {/* cssTransiton本质上就是根据状态 添加对应的类名 */}
      {/* nodeRef绑定节点 如果不这么做 CSSTransition会调用findNodeDom方法 严格模式下会报错 */}
      <CSSTransition nodeRef={nodeRef} appear unmountOnExit in={show} classNames={`hjp`} timeout={2000}>
        <h3 ref={nodeRef}>React 过渡动画</h3>
      </CSSTransition>
      <hr />

      <h2>SwitchTransition</h2>
      {/* mode 'out-in' 表示先执行退出 再执行进入动画 */}
      <SwitchTransition mode='out-in'>
        <CSSTransition key={show ? 'show' : 'notShow'} classNames="fade" timeout={2000}>
          {show ? <div className='switch-text'>动画展示啦</div> : <div className='switch-text'>动画隐藏啦</div>}
        </CSSTransition>
      </SwitchTransition>

      <h2>TransitionGroup</h2>
      <TransitionGroup component="ul">
          {books.map((item,index) => 
            <CSSTransition key={item.id} classNames="book" timeout={800}>
              <li>
                <span>{item.name}---{item.price}元</span>
                <button onClick={() => handleDelBooks(index)} className='primary-btn'>删除</button>
              </li>
            </CSSTransition>
          )}
      </TransitionGroup>
      <button className='primary-btn' onClick={() => setBooks([...books,{id:Date.now(),name:'如何暴富',price:268}])}>添加一本书</button>
    </>
  )
}
