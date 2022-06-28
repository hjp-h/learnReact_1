// axios
import axios from 'axios'
import { SET_BANNER, SET_RECOMMEND } from '../constant'
export const setBannerAction = (data) => ({
  type: SET_BANNER,
  data
})
export const setRecommendAction = (data) => ({
  type: SET_RECOMMEND,
  data
})
export const setInfoAction = (dispatch) => {
    axios({
      url:'http://123.207.32.32:8000/home/multidata'
    }).then(({ data }) => {
      const banner = data.data.banner.list;
      const recommend = data.data.recommend.list;
			dispatch(setBannerAction(banner))
			dispatch(setRecommendAction(recommend))
    })
}
