import React from 'react'
import { useParams } from 'react-router-dom'

export default function MusciDeatil() {
  const params = useParams()
  return (
    <>
      <div>MusciDeatil--{params.id}</div>
    </>
  )
}
