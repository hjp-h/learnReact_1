import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Mine() {
  const [searchParams] = useSearchParams()
  const query = Object.fromEntries(searchParams)
  return (
    <h2>我的音乐-{query.name}-{query.id}</h2>
  )
}
