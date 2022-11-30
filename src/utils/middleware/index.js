// 引入store
import store from "../../redux/store";
import { increment } from '../../redux/actions/counter'

// 1.在每次dispatch之前打印日志
// 方法1：
function dispatchLogging(action) {
  console.log('正在dispatch....')
  store.dispatch(action);
  console.log('dispatch结束....，当前state：', store.getState())
}
dispatchLogging(increment(10));

// 方法2：hack技术: monkeyingpatch
// 在函数的基础上进行优化 修改store.dispatch
const next = store.dispatch
function dispatchLogging1(action) {
  console.log('正在dispatch....')
  next(action);
  console.log('dispatch结束....，当前state：', store.getState())
}
store.dispatch = dispatchLogging1

// 1.进一步封装logging
function patchLogging(store) {
  const next = store.dispatch
  function dispatchLogging1(action) {
    console.log('正在dispatch....')
    next(action);
    console.log('dispatch结束....，当前state：', store.getState())
  }
  // store.dispatch = dispatchLogging1
  return dispatchLogging1
}
patchLogging(store)

// 2.封装patchThunk(redux-thunk的核心功能)
function patchThunk(store) {
  const next = store.dispatch
  return function dispatchThunk(action){
    if (typeof action === 'function') {
      next(action(next,store.getState))
    } else if(typeof action === 'object') {
      next(action)
    }
  }
}

// 3.封装applyMiddleWare
function applyMiddleware(...middlewares) {
  middlewares.forEach(middleware => {
    store.dispatch = middleware(store)
  })
}
applyMiddleware(patchLogging,patchThunk)

