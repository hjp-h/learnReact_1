import React,{useState} from 'react'
import { Link,Outlet,useNavigate } from 'react-router-dom'

export default function Message() {
  const [messages] = useState([
		{id:'001',title:'消息1',content:'锄禾日当午'},
		{id:'002',title:'消息2',content:'汗滴禾下土'},
		{id:'003',title:'消息3',content:'谁知盘中餐'},
		{id:'004',title:'消息4',content:'粒粒皆辛苦'}
  ])

  const navigate = useNavigate()
  const showDetail = (msg) => {
    navigate('detail', {
      replace: false,
      state: {
        ...msg
      }
    })
  }
  
  return (
    <div>
      <ul>
        {messages.map(msg => (
          <li key={msg.id}>
            {/* params方式传参 useParams */}
            {/* <Link to={ `detail/${msg.id}/${msg.content}/${msg.title}` }>{msg.title}</Link> */}

            {/* search方式  useSearchParams */}
            {/* <Link to={ `detail?id=${msg.id}&content=${msg.content}&title=${msg.title}` }>{msg.title}</Link> */}

            {/* state方式 useLocation */}
            <Link to="detail" state={{ ...msg }}>{msg.title}</Link>
            <a onClick={() => showDetail(msg)}>查看详情</a>
          </li>
        ))}
      </ul>
      <hr />
      <Outlet/>
   </div>
  )
}
