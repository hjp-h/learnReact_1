import { Fragment } from 'react'
import {useGetScrollY} from '../hooks/useGetScrollY'
export default () => {
  const el = document.getElementById('page-content')
  // const [scrollY] = useGetScrollY(el)
  console.log('el',el)
  return (
    <Fragment>
       <h3>自定义hook</h3>
        {/* <p style={{position:'sticky',top:0,backgroundColor:'#123456',zIndex:1000,color:'white'}}>当前滚动位置Y：{scrollY}</p> */}
    </Fragment>
  )
}
