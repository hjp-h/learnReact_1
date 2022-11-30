import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Follow() {
  const {state} = useLocation()
  return (
    <h1>关注-{state.followId}</h1>
  )
}
