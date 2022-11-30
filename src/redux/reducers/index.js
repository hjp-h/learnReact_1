import { combineReducers } from 'redux' 
import count from './counter'
import person from './person'
import info from './info'
// 最终调用方式是 state.count state.person
export default combineReducers({
  count,person,info
})

/**
 * combineReudecer原理
 * 1.如果是单个reducer，比如countReducer直接将返回，然后 createStore(countReducer),那么store.getState()返回的就是一个值
 * 2.如果是多个reducer,它会帮我们创建一个函数，然后将返回一个对象，对象里就是多个reducer
 * function reducer(preState={},action){
 *    return {
 *       count:countReducer(preState.count,action),
 *       info:infoReducer(preState.info,action)
 *    }
 * }
 * store.getState().count  store.getState().info
 */

