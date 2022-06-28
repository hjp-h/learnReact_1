import { SET_BANNER, SET_RECOMMEND,SET_SAGA_BANNER,SET_SAGA_RECOMMEND } from '../constant'
const defaultState = {
  banner: [],
  recommend: [],
  sagaBanner: [],
  sagaRecommend:[]
}
export default function infoReducer(preState=defaultState, action) {
  switch (action.type) {
    case SET_BANNER:
      return { ...preState, banner: action.data }
    case SET_RECOMMEND:
      return { ...preState, recommend: action.data }
    case SET_SAGA_BANNER:
      return { ...preState, sagaBanner: action.data }
    case SET_SAGA_RECOMMEND:
      return { ...preState, sagaRecommend: action.data }
    default:
      return {...preState}
  }
}
