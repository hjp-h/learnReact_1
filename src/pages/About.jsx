import React from 'react'
import { useNavigationType } from 'react-router-dom'
export default function About() {
	console.log(useNavigationType())
	return (
		<h3>我是About的内容</h3>
	)
}
