import styled from 'styled-components'
 const Child =  function(){
  console.log("我是Child")
  return <Wrapper>
    <p>我是Child</p>
  </Wrapper>
}
const Wrapper = styled.div`
  background-color: red;
  padding: 10px;
`
export default Child;