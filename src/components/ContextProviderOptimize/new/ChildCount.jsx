import styled from 'styled-components'
import {useDispatch} from './hooks/useDispatch'
import {useSelector} from './hooks/useSelector'
const ChildCount = function(){
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  console.log("ChildCount render",count)
  return (
    <Wrapper>
      <p>我是ChildCount组件,count:{count}</p>
      <button onClick={() => {dispatch({type:'addCount'})}}>点我Count +1</button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: red;
  padding: 10px;
`
export default ChildCount