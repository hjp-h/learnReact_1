import { combineReducers } from 'redux' 
import count from './counter'
import person from './person'
import info from './info'
// 最终调用方式是 state.count state.person
export default combineReducers({
  count,person,info
})
