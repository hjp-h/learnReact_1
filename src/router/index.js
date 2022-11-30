import {Navigate} from 'react-router-dom'
import React from 'react'
// cpts
import Home from '../pages/Home'
import About from '../pages/about/index'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
// import Store from '../pages/Store'
// import Hook from '../pages/Hook'
import Routers from '../pages/Routers'
import Find from '../pages/MusicRouter/FindMusic'
import Mine from '../pages/MusicRouter/Mine'
import Follow from '../pages/MusicRouter/Follow'
import MusciDeatil from '../pages/MusicRouter/MusciDeatil'
import Animation from '../pages/Animation'
const Hook = React.lazy(() => import("../pages/Hook"))
const Store = React.lazy(() => import("../pages/Store"))
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'message',
        element: <Message />,
        children: [
          {
            // params
            // path: 'detail/:id/:content/:title',
            // search
            path:'detail',
            element:<Detail/>
          }
        ]
        
      }
    ]
  },
  {
    path:'/router',
    element:<Routers/>,
    children:[
      {
        path:'',
        element:<Navigate to="/router/find"/>
      },
      {
        path:'find',
        element:<Find/>,
        children:[
          {
            path:'detail/:id',
            element:<MusciDeatil/>
          }
        ]
      },
      {
        path:'mine',
        element:<Mine/>
      },
      {
        path:'follow',
        element:<Follow/>
      }
    ]
  },
  {
    path: '/about',
    element:<About/>
  },
  {
    path: '/store',
    element:<Store/>
  },
  {
    path: '/hook',
    element:<Hook/>
  },
  {
    path: '/animation',
    element:<Animation/>
  },
  {
    path: '/',
    element:<Navigate to="/home"/>
  }
]
