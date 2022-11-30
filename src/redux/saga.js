
import { takeEvery,put,all } from 'redux-saga/effects'
import axios from 'axios';
import { FETCH_SAGA_INFO } from './constant'
import { setSagaBannerAction,setSagaRecommendAction} from './actions/info';
// 5.中间件拦截action 具体的生成器函数
function* fetchSagaInfo(action) {
  console.log(action);
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata");
  const banner = res.data.data.banner.list;
  const recommend = res.data.data.recommend.list;
  // yield put(setSagaBannerAction(banner))
  // yield put(setSagaRecommendAction(recommend))
  yield (all([
    yield put(setSagaBannerAction(banner)),
    yield put(setSagaRecommendAction(recommend))]))
  // 这里面写多个yield都会执行时因为saga内部会调用生成器的next方法
  // 根据done值来判断是否还有yield
}

// 4.导出一个生成器函数 监听某个action 
function* mySaga() {
   // takeLatest takeEvery区别:
  // takeLatest: 一次只能监听一个对应的action（dispatch多次 只会执行一次）
  // takeEvery:  每一次都会被执行
  yield all([
    takeEvery(FETCH_SAGA_INFO, fetchSagaInfo),
    // takeEvery(...)
  ])
}
export default mySaga



// 实现原理 (生成器调用之后就是一个迭代器 调用它的next方法才会执行 每次next都是依次执行yield之前的代码)
function* getResult() {
  const result = yield new Promise(resolve => {
    setTimeout(() => {
      resolve("Hello Generator")
    }, 1000);
  })
  console.log(result)
  yield result
}
const it = getResult()
it.next().value.then(res => {
  // next方法传入参数 作为下一次迭代的结果
  // 如果不传参就是打印undefined
  it.next(res)
})
