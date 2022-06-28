import { createStore, applyMiddleware } from 'redux'
// 引入redux-thunk中间件 使得store.dispatch能够处理一个函数
import thunk from 'redux-thunk'
// 引入reducer
import reducer from './reducers'
// 方便在浏览器调试redux
import {composeWithDevTools} from 'redux-devtools-extension'
// 创建store对象
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
