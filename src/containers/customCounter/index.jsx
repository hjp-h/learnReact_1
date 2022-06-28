import React, { Fragment } from 'react'
import { connect } from '../../utils/redux/connect'
import { increment,decrement,incrementAsync } from '../../redux/actions/counter';
function CustomCounter(props) {
  return (
    <Fragment>
      <h3>CustomCounter</h3>
      <p>当前计数：{props.count}</p>
      <button onClick={() => props.increment(1)}>点我加一</button>
      <button onClick={() => props.incrementAsync(2)}>异步加</button>
    </Fragment>
  )
}
const mapStateToProps = (state) => ({ person: state.person, count: state.count })
const mapDispatchToProps = (dispatch) => ({
  increment: (data) => dispatch(increment(data)),
  decrement: (data) => dispatch(decrement(data)),
  incrementAsync: (data) => dispatch(incrementAsync(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(CustomCounter)

// 简写方式  react-redux自动帮我们dispatch
// export default connect(mapStateToProps, {increment,decrement})(Counter)
