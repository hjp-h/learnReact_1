import { createStore, applyMiddleware,compose } from 'redux'
// 引入redux-thunk中间件 使得store.dispatch能够处理一个函数
/**
 * 中间件作用
 * 中间件就是来处理一些副作用（网络请求） 
 * 在dispatch一个异步action到真正reducer处理之前做拦截
 * 最后再重新dispatch一个同步action到reducer
 */

import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
// 引入reducer
import reducer from './reducers'
import saga from './saga';
// 方便在浏览器调试redux
// import { composeWithDevTools } from 'redux-devtools-extension'

// 创建store对象
// export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

// 与thunk不同 引入的createSagaMiddleware是个函数 需要调用才能返回一个中间件
// 1.创建sagaMiddleWare
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// 2.应用sagaMiddleWare
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk, sagaMiddleware)))

// 3.调用run方法 传入一个生成器函数 对某个action进行拦截
sagaMiddleware.run(saga)
