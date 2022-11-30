import React,{useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

export default function Find() {
  const navigate = useNavigate()
  const [musicList] = useState([{id:1,name:'李香兰'},{id:2,name:'夕阳醉了'},{id:3,name:'遥远的她'}]);
  const handleItemClick = (id) => {
    navigate("/router/find/detail/"+id)
  }
  return (
    <>
    <h1>发现音乐</h1>
    <ul>
      {
        musicList.map(item => <li key={item.id} onClick={() => handleItemClick(item.id)}>{item.name}</li>)
      }
    </ul>
    <Outlet/>
    </>
  )
}
