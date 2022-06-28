import React, { Fragment } from 'react'
import { connect } from 'react-redux'

function Info(props) {
  return (
    <Fragment>
      <h3>Info</h3>
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
    </Fragment>
  )
}
const mapStateToProps = (state) => ({ info: state.info })
const mapDispatchToProps = (dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Info)
