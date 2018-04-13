import React from 'react'
import {
  HashRouter,
  BrowserRouter,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
// import 'es6-promise/dist/es6-promise'
import { Provider } from 'react-redux'
import store from '@/stores'

import App from '@/containers/App'
import Main from '@/containers/Main'
import modules from './modules'

const { Login } = modules

const isPro = process.env.NODE_ENV === 'production'

const Router = isPro ? BrowserRouter : HashRouter
// const Router = HashRouter

const basename = '/'
const configs = [
]
const router = () => (
  <Provider store={store}>
    <Router basename={basename}>
      <App>
        <Switch>
          <Route path='/' exact={true} component={modules.Index}/>
          <Route path='/demo5' component={modules.Demo5}/>
          <Route path='/demo6' component={modules.Demo6}/>
          <Route path='/login' component={modules.Login}/>
          <Route path='/main' component={modules.Main}/>
          <Main>
            {
              configs.map((item, index) => {
                if (!item.disable) {
                  return <Route key={'router-' + index} path={item.path} component={item.component}/>
                }
              })
            }
          </Main>
        </Switch>
      </App>
    </Router>
  </Provider>
)
export default router
