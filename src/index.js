import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
		<BrowserRouter>
			<Suspense fallback={<h2>加载中。。。</h2>}>
				<App/>
			</Suspense>
		</BrowserRouter>
)
