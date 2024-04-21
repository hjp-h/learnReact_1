import { useContext } from "react";
import { MyContext } from "../MyProvider";

export const useDispatch = () => {
  const store = useContext(MyContext);
  return store.dispatch
}