// react api
import React, { Fragment } from 'react'
// redux api
import { Provider } from 'react-redux'
import store from '../redux/store'
import { StoreContext } from '../utils/redux/context'
// axios
// cpt
import Person from '../containers/person'
import Counter from '../containers/counter'
import CustomeCounter from '../containers/customCounter'
import Info from '../containers/info'
export default function Store() {
  return (
    // 之所以要传入store的原因是connect函数的通过context来接受
    <Fragment>
      <Provider store={store}>
        <Counter />
        {/* <Counter store={store}/> */}
        <hr />
        <Person />
        <hr />
        <Info/>
      </Provider>
      <StoreContext.Provider value={store}>
        <CustomeCounter/>
      </StoreContext.Provider>
    </Fragment>
  )
}
