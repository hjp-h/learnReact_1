import styled from 'styled-components'
import {useDispatch} from './hooks/useDispatch'
import {useSelector} from './hooks/useSelector'
const ChildNum = function(){
  const dispatch = useDispatch();
  const num = useSelector(state => state.num);
  console.log("ChildNum render",num)
  return (
    <Wrapper>
      <p>我是ChildNum组件,num:{num}</p>
      <button onClick={() => {dispatch({type:'addNum'})}}>点我Num +1</button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: green;
  padding: 10px;
`
export default ChildNum