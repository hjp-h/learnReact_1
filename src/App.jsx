import React from 'react'
import { NavLink, useRoutes} from 'react-router-dom'
import routes from './router'

export default function App() {
	const element = useRoutes(routes)
	return (
		<div>
			<div className="row">
				<div className="col-xs-offset-2 col-xs-8">
					<div className="page-header"><h2>React Learning</h2></div>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-2 col-xs-offset-2">
					<div className="list-group">
						{/* 路由链接 */}
						<NavLink className="list-group-item" to="/about">CssInJs</NavLink>
						<NavLink className="list-group-item" to="/home">Home</NavLink>
						<NavLink className="list-group-item" to="/store">Redux</NavLink>
						<NavLink className="list-group-item" to="/hook">Hook</NavLink>
						<NavLink className="list-group-item" to="/router">Router</NavLink>
						<NavLink className="list-group-item" to="/animation">Animation</NavLink>
					</div>
				</div>
				<div className="col-xs-6">
					<div className="panel">
						<div id="page-content" className="panel-body">
							{/* 注册路由1 */}
							{/* <Routes>
								<Route path='/about' element={<About />}></Route>
								<Route path='/home' element={<Home />}></Route>
								<Route path='/' element={<Navigate to='/home'/>}></Route>
							</Routes> */}
							{/* 注册路由2 */}
							{element}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
