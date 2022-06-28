import {Navigate} from 'react-router-dom'
// cpts
import Home from '../pages/Home'
import About from '../pages/about/index'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
import Store from '../pages/Store'
import Hook from '../pages/Hook'
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
    path: '/about',
    element:<About/>
  },
  {
    path: '/store',
    element:<Store/>
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
    path: '/',
    element:<Navigate to="/home"/>
  }
]
