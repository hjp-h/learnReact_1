/* eslint-disable react/display-name */
/** 路由页 - 真正意义上的根组件，已挂载到redux上，可获取store中的内容 **/

/** 所需的各种插件 **/
import { useEffect } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Loading from "@security/components/loading"; // loading动画，用于动态加载模块进行中时显示
import AuthPath from "@common/store/auth";
import React from "react";
import PageLayout from "@security/views/PageLayout";

export function AsyncLoad(importFn) {
  const AsyncLoadComponent = React.lazy(importFn);
  return (props) => (
    <React.Suspense fallback={<Loading />}>
      <AsyncLoadComponent {...props} />
    </React.Suspense>
  );
}

/** 下面是代码分割异步加载的方式引入各页面 webpackChunkName设置生成后的js名字 **/
const ApplyAuth = AsyncLoad(
  () => import(/* webpackChunkName:'applyAuth' */ "@security/views/ApplyAuth")
);

const MyAuth = AsyncLoad(
  () => import(/* webpackChunkName:'myAuth' */ "@security/views/MyAuth")
);

const MyApply = AsyncLoad(
  () => import(/* webpackChunkName:'myApply' */ "@security/views/MyApply")
);

const ToApprove = AsyncLoad(
  () => import(/* webpackChunkName:'toApprove' */ "@security/views/ToApprove")
);

const HasApprove = AsyncLoad(
  () => import(/* webpackChunkName:'hasApprove' */ "@security/views/HasApprove")
);

const Auditing = AsyncLoad(
  () => import(/* webpackChunkName:'auditing' */ "@security/views/Auditing")
);

const Plot = AsyncLoad(
  () => import(/* webpackChunkName:'plot' */ "@security/views/Plot")
);

const NotFound = AsyncLoad(
  () => import(/* webpackChunkName:'notfound' */ "@security/views/Notfound")
);

// interface MyRoute {
//   name: string;
//   path: string;
//   component?: AnyType;
//   redirect?: string;
//   childrens?: MyRoute[];
// }
const routes = [
  {
    name: "index",
    path: "/",
    redirect: "/applyAuth",
  },
  {
    name: "ApplyAuth",
    path: "/applyAuth",
    component: ApplyAuth,
  },
  {
    name: "MyAuth",
    path: "/myAuth",
    component: MyAuth,
  },
  {
    name: "myApply",
    path: "/myApply",
    component: MyApply,
  },
  {
    name: "hasApprove",
    path: "/hasApprove",
    component: HasApprove,
  },
  {
    name: "toApprove",
    path: "/toApprove",
    component: ToApprove,
  },
  {
    name: "auditing",
    path: "/auditing",
    component: Auditing,
  },
  {
    name: "plot",
    path: "/plot",
    component: Plot,
  },
];

/** 组件 **/
export default function RootRouterContainer(props) {
  // 在组件加载完毕后触发
  useEffect(() => {
    // 可以手动在此预加载指定的模块：
    // Features.preload(); // 预加载Features页面
    // Test.preload(); // 预加载Test页面
    // 也可以直接预加载所有的异步模块
    // Loadable.preloadAll();
  }, []);

  /** 简单权限控制 路由守卫 **/
  function onEnter(Component, route) {
    // 例子：如果没有登录，直接跳转至login页
    if (/\//.test(route.path)) {
      AuthPath.setAuthIden(route.path.split("/")[1]);
    }
    return Component;
  }

  const renderRoutes = (routes, parenPath) => {
    if (!routes?.length) return "";

    const routesList = routes.map((route) => {
      const Component = route.component;
      return (
        <Route
          key={route.name}
          path={route.path}
          element={
            route.redirect ? (
              <Navigate replace to={route.redirect} />
            ) : (
              onEnter(<Component />, route)
            )
          }
        >
          {renderRoutes(route.childrens, route.path)}
        </Route>
      );
    });
    //默认路由，path也可以设置为`/${parenPath}`”`，重定向到第一个`${parenPath}/${routes[0]?.path}`
    parenPath &&
      routesList.push(
        <Route
          path=""
          key={`${parenPath}/${routes[0]?.path}`}
          element={<Navigate to={`${parenPath}/${routes[0]?.path}`} />}
        />
      );
    return routesList;
  };

  return (
    <div className="boss">
      <Routes>
        <Route element={<PageLayout />}>{renderRoutes(routes)}</Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
