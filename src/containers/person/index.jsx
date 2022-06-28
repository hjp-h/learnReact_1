import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'

function Person(props) {
  return (
    <Fragment>
      <h3>Person</h3>
      <p>当前成员：</p>
      <ul>
        {
          props.person.map(item => (<li key={item.id}>
            编号：{item.id},姓名：{item.name},年龄：{item.age}
          </li>))
        }
      </ul>
      <button onClick={() => props.addPerson({id:'asdasda',name:'lisi',age:18})}>添加成员</button>
    </Fragment>
  )
}
const mapStateToProps = (state) => ({ person: state.person, count: state.count })
const mapDispatchToProps = (dispatch) => ({addPerson:(data) => dispatch(addPerson(data))})
export default connect(mapStateToProps, mapDispatchToProps)(Person)
