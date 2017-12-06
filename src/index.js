import React from 'react'
import ReactDom from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'//compose对几个函数进行组合
import thunk from 'redux-thunk'//处理异步
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'

import reducers from './reducer'
import './config'

const store = createStore(reducers,compose(
    applyMiddleware(thunk),//开启thunk中间键
    window.devToolsExtension?window.devToolsExtension():f=>f
))

ReactDom.render(
    (<Provider store={store}>
      <BrowserRouter> 
      </BrowserRouter>
    </Provider>),
    document.getElementById('root')
)