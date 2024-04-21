import React, { Fragment } from 'react'
import UseStateHook from '../components/UseStateHook'
import UseEffectHook from '../components/UseEffectHook'
import UseContextHook from '../components/UseContextHook'
import UseReducerHook from '../components/UseReducerHook'
import UseCallbackHook from '../components/UseCallbackHook'
import UseMemoHook from '../components/UseMemoHook'
import UseRefHook from '../components/UseRefHook'
import UseImperativeHandleHook from '../components/UseImperativeHandleHook'
import UseGetScrollYHook from '../components/UseGetScrollYHook'
import UseTransitionHook from '../components/UseTransitionHook'
import ProviderTest from '../components/ContextProviderOptimize/new'
export default function Hook() {
  return (
    <Fragment>
      <h2>Hook练习</h2>
      <hr />
      <UseGetScrollYHook/>
      <hr />
      <UseStateHook />
      <hr />
      <UseEffectHook />
      <hr />
      <UseContextHook />
      <hr/>
      <ProviderTest/>
      <hr />
      <UseReducerHook />
      <hr />
      <UseCallbackHook />
      <hr />
      <UseMemoHook />
      <hr />
      <UseRefHook />
      <hr />
      <UseImperativeHandleHook />
      <hr />
      <UseTransitionHook/>
    </Fragment>
  )
}
