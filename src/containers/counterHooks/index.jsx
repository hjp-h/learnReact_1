import React, { Fragment } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement,incrementAsync } from '../../redux/actions/counter';
function Counter(props) {
  // react-redux hook的使用
  const {count} = useSelector((state) => ({count:state.count}))
  const dispatch = useDispatch()
  return (
    <Fragment>
      <h3>Counter</h3>
      <p>当前计数：{count}</p>
      <button onClick={() => dispatch(increment(1))}>点我加一</button>
      <button onClick={() => dispatch(decrement(1))}>点我减一</button>
      <button onClick={() => dispatch(incrementAsync(2))}>异步加</button>
    </Fragment>
  )
}
// const mapStateToProps = (state) => ({ person: state.person, count: state.count })
// const mapDispatchToProps = (dispatch) => ({
//   increment: (data) => dispatch(increment(data)),
//   decrement: (data) => dispatch(decrement(data)),
//   incrementAsync: (data) => dispatch(incrementAsync(data))
// })
export default Counter
