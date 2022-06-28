import React, { Fragment } from 'react'
import { connect } from 'react-redux'

function Info(props) {
  return (
    <Fragment>
      <h3>Info</h3>
      <h4>redux-thunk产生</h4>
      <p>banner：</p>
      <ul>
        {
          props.info.banner.map(item => (<li key={item.acm}>
            标题：{item.title}
          </li>))
        }
      </ul>
      <p>recommend：</p>
      <ul>
        {
          props.info.recommend.map(item => (<li key={item.acm}>
            标题：{item.title}
          </li>))
        }
      </ul>
      <hr />
      <h4>redux-saga产生</h4>
      <p>banner：</p>
      <ul>
        {
          props.info.sagaBanner.map(item => (<li key={item.acm}>
            标题：{item.title}
          </li>))
        }
      </ul>
      <p>recommend：</p>
      <ul>
        {
          props.info.sagaRecommend.map(item => (<li key={item.acm}>
            标题：{item.title}
          </li>))
        }
      </ul>
    </Fragment>
  )
}
const mapStateToProps = (state) => ({ info: state.info })
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Info)
