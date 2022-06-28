import { SET_BANNER, SET_RECOMMEND } from '../constant'
const defaultState = {
  banner: [],
  recommend:[]
}
export default function infoReducer(preState=defaultState, action) {
  switch (action.type) {
    case SET_BANNER:
      return { ...preState, banner: action.data }
    case SET_RECOMMEND:
      return { ...preState, recommend: action.data }
    default:
      return {...preState}
  }
}
