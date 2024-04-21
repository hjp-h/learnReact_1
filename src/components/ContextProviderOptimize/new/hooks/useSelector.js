import { useCallback, useContext, useEffect, useReducer, useRef } from "react";
import { MyContext } from "../MyProvider";

export const useSelector = selector => {
  // 强制更新
  const [, forceRender] = useReducer(v => v + 1, 0);
  const store = useContext(MyContext);

  // 获取当前使用的 state
  const selectedStateRef = useRef(selector(store.getState()))
  
  // 对比更新回调
  const checkForUpdates = useCallback(() => {
    // 获取变更后的 state
    const newState = selector(store.getState());
    // 对比前后两次 state
    if (newState !== selectedStateRef.current) {
      selectedStateRef.current = newState;
      forceRender({})
    };
  }, [selector, store]);
  
  // 订阅 state
  useEffect(() => {
    const subscription = store.subscribe(checkForUpdates);
    return () => subscription();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store]);
  
  // 返回需要的 state
  return selectedStateRef.current;
}