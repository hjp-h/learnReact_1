// react api
import React from 'react'
import { Link, Outlet, useOutlet, useResolvedPath } from 'react-router-dom'
// store
import store from '../redux/store'
// action
// import {setBannerAction,setRecommendAction } from '../redux/actions/info'
import {setInfoAction,fetchInfoAction } from '../redux/actions/info'
export default function Home() {
	console.log('##', useOutlet())
	console.log('@@', useResolvedPath('/user?id=001&name=tom#qwe'))
	// 方式一： 在组件中发送网络请求 将结果dispatch
	// useEffect(() => {
  //   axios({
  //     url:'http://123.207.32.32:8000/home/multidata'
  //   }).then(({ data }) => {
  //     const banner = data.data.banner.list;
  //     const recommend = data.data.recommend.list;
	// 		store.dispatch(setBannerAction(banner))
	// 		store.dispatch(setRecommendAction(recommend))
  //   })
  // },[])
	const handleDispatch = () => {
		// 方式二 将请求放在acction中 让借给redux管理
		store.dispatch(setInfoAction);
		// 方式三 redux-saga调用
		store.dispatch(fetchInfoAction)
	}
	return (
		<div>
			<h3>我是Home的内容</h3>
			<button onClick={handleDispatch}>点我发送网络请求,并将数据存入redux</button>
			&nbsp;&nbsp;&nbsp;
			<Link to="message">消息页</Link>
			<hr />
			<Outlet/>
		</div>
	)
}
