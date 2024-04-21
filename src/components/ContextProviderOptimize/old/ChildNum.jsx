import { useContext } from "react"
import { MyContext } from "./MyProvider"
import styled from 'styled-components'
const ChildNum = function(){
  const {state,dispatch} = useContext(MyContext);
  console.log("ChildNum render",state.num)
  return (
    <Wrapper>
      <p>我是ChildNum组件,num:{state.num}</p>
      <button onClick={() => {dispatch({type:'addNum'})}}>点我Num +1</button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: green;
  padding: 10px;
`
export default ChildNum