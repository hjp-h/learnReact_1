import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Detail() {
  // params方式接收
  // const { id, content, title } = useParams()

  // 类似于router5 class中this.props.match.params
  // const match = useMatch('/home/message/detail/:id/:content/:title')
  // console.log('match',match)
  
  // search方式接收  search是一个map
  // const [search, setSearch ] = useSearchParams();
  // console.log('search',search)
  // const id = search.get('id');
  // const content = search.get('content')
  // const title = search.get('title')

  // state方式接受
  const { state: { id, content, title } } = useLocation()
  console.log(useLocation())
  return (
    <div>
      <p>{`id: ${id}, content:${content}, title:${title}`}</p>
      {/* <button onClick={() => setSearch('id=3&content=加油&title=你好生活')}>更新参数</button> */}
    </div>
    
  )
}
