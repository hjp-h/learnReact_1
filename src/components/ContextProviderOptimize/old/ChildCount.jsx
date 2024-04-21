import { useContext } from "react"
import { MyContext } from "./MyProvider"
import styled from 'styled-components'
const ChildCount = function(){
  const {state,dispatch} = useContext(MyContext);
  console.log("ChildCount render",state.count)
  return (
    <Wrapper>
      <p>我是ChildCount组件,count:{state.count}</p>
      <button onClick={() => {dispatch({type:'addCount'})}}>点我Count +1</button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: red;
  padding: 10px;
`
export default ChildCount