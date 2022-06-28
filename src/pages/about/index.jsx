import React, { Fragment, useState } from 'react'
import { useNavigationType } from 'react-router-dom'
import styled from 'styled-components'
import { JPButton,JPDangerButton,JPPrimaryButton,JPWarningButton,JPDiv} from './style'

const JPInput = styled.input.attrs({
	placeholder: "hongjiapeng",
	color: "purple",
})`
	color:${props => props.color};
	border-color:${props => props.borderColor};
`
export default function About() {
	console.log(useNavigationType())
	const [red] = useState('red')
	return (
		<Fragment>
			<h3>我是Css-in-js的内容</h3>
			<hr />
			<h4>样式继承</h4>
			<JPButton>普通按钮</JPButton>
			<JPPrimaryButton>primary按钮</JPPrimaryButton>
			<JPDangerButton>danger按钮</JPDangerButton>
			<JPWarningButton>warning按钮</JPWarningButton>
			<hr />
			<h4>嵌套样式</h4>
			<JPDiv>
				我是JPDiv<br/>
				<div className="son">son<br/>
					<span>我是son下的span(后面是伪元素)</span>
				</div>
			</JPDiv>
			<hr />
			<h4>props穿透，attrs的使用，传入state作为props熟悉</h4>
			<JPInput type="textarea" borderColor={red}></JPInput>
		</Fragment>
	)
}
