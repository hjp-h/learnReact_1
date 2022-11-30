import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import "./index.css"
export default function Routers() {
  return (
    <>
     <h2>Routers练习</h2>
     <div className="my-nav">
      <Link to="find">发现音乐</Link>
      <NavLink to="mine?name=hjp&id=1" className={({isActive}) => isActive?'my-music-active':''}>我的音乐</NavLink>
      <Link to="follow" state={{followId:1}}>关注</Link>
     </div>
     <Outlet/>
    </>
  )
}
