import {INCREMENT,DECREMENT} from '../constant'
export const increment = data => ({ type: INCREMENT, data })
export const decrement = data => ({ type: DECREMENT, data })
// 异步加
export const incrementAsync = (data, time) => {
  // 异步action是一个函数
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data))
    }, time);
  }
}
