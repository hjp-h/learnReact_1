import Child from "./Child";
import ChildCount from "./ChildCount";
import ChildNum from "./ChildNum";
import MyProvider from "./MyProvider";
/**
 * Provider下消费的子组件，只要provider提供的value值更新，消费的子组件就会re-render
 * 即使子组件只用到了value的其中一个属性 其它属性更新也会re-render
 * 快速的解决办法是使用useMemo来解决 React.memo无法解决是浅比较
 */
const ProviderTest =  () => {
  return (
    <MyProvider>
       <h3>Provider优化</h3>
      <ChildCount />
      <ChildNum />
      <Child />
    </MyProvider>
  );
}
export default ProviderTest