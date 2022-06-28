// axios
import axios from 'axios'
import { SET_BANNER, SET_RECOMMEND,SET_SAGA_BANNER,SET_SAGA_RECOMMEND,FETCH_SAGA_INFO } from '../constant'
export const setBannerAction = (data) => ({
  type: SET_BANNER,
  data
})
export const setRecommendAction = (data) => ({
  type: SET_RECOMMEND,
  data
})
export const setSagaBannerAction = (data) => ({
  type: SET_SAGA_BANNER,
  data
})
export const setSagaRecommendAction = (data) => ({
  type: SET_SAGA_RECOMMEND,
  data
})
export const fetchInfoAction = {
  type: FETCH_SAGA_INFO
}
export const setInfoAction = (dispatch,getState) => {
    axios({
      url:'http://123.207.32.32:8000/home/multidata'
    }).then(({ data }) => {
      const banner = data.data.banner.list;
      const recommend = data.data.recommend.list;
			dispatch(setBannerAction(banner))
			dispatch(setRecommendAction(recommend))
    })
}
