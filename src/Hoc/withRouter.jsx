import { useNavigate, useParams, useSearchParams } from "react-router-dom"

// 针对类组件不能使用函数的hook
export function WithRouter(WrappedComponent){
  const navigate = useNavigate();
  const params = useParams()
  const [searchParams] = useSearchParams()
  const query = Object.fromEntries(searchParams)
  const router = {navigate,params,query}
  return (props) => <WrappedComponent {...props} router={router}/>
}