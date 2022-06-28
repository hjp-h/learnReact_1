import styled from 'styled-components'

// 模板字符串进行函数调用 返回的是一个组件
export const JPButton = styled.button`
  padding: 10px 20px;
	border:none;
	border-radius:5px;
`
// 样式继承 styled(被继承组件)
export const JPPrimaryButton = styled(JPButton)`
	color: #fff;
	background-color:#4678b2;
`
export const JPDangerButton = styled(JPButton)`
	color: #fff;
	background-color:#cb2b29;
`
export const JPWarningButton = styled(JPButton)`
	color: #fff;
	background-color:#f8c537;
`
export const JPDiv = styled.div`
  background: #4678b2;
	color:#fff;
	padding:10px;
	.son{
		color:red;
		background:#457250;
		span{
			color:blue;
			&:hover{
				color:red;
			}
			&::after{
				content:'_after'
			}
		}
	}
`

