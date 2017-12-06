import React from 'react'
import ReactDom from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'//compose对几个函数进行组合
import thunk from 'redux-thunk'//处理异步
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'

import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import reducers from './reducer'
import './config'

const store = createStore(reducers,compose(
    applyMiddleware(thunk),//开启thunk中间键
    window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDom.render(
    (
    <Provider store={store}>
      <BrowserRouter> 
      <div>
          <AuthRoute></AuthRoute>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
      </div>
       </BrowserRouter>
    </Provider> 
    ),
    document.getElementById('root')
)