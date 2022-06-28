import { ADD_PERSON } from '../constant'
import {nanoid} from 'nanoid'
const initState = [{id:nanoid(),name:'zhangsan',age:10}]
export default function personReducer(preState=initState, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState]
    default:
      return preState
  }
}
