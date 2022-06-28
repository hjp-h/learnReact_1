import React, { useState, useEffect,useContext } from "react"
import {StoreContext} from './context'
export function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    return function EnHanceHOC(props) {
      // 获取外部传入的store
      const store = useContext(StoreContext)
      const [storeState,setStoreState] = useState(mapStateToProps(store.getState()))
      useEffect(() => {
        // 监听store变化 更新页面
        const unsubscribe = store.subscribe(() => {
          setStoreState(mapStateToProps(store.getState()))
        })
        // 卸载组件时 取消订阅
        return () => {
            unsubscribe()
        }
      },[])
      return (<WrappedComponent {...props} {...mapStateToProps(store.getState())} {...mapDispatchToProps(store.dispatch)}></WrappedComponent>)
    }
  }
}
