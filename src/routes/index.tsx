import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter as Router } from 'connected-react-router'

import { history } from '../redux'
import CustomRoute from '../components/CustomRoute'
import Loading from '../components/Loading'

const Login = React.lazy(() => import('./login.route'))
const Register = React.lazy(() => import('./register.route'))
const Todos = React.lazy(() => import('./todos.route'))
const Photos = React.lazy(() => import('./photos.route'))
const NotFound = React.lazy(() => import('./notFound.route'))
const loginPath = '/login'
const registerPath = '/register'
const todosPath = '/'
const photosPath = '/photos'

export default (
  <Suspense fallback={(<Loading />)}>
    <Router history={history}>
      <Switch>
        <CustomRoute exact path={loginPath} component={Login} />
        <CustomRoute exact path={registerPath} component={Register} />
        <CustomRoute exact path={todosPath} component={Todos} isPrivate />
        <CustomRoute exact path={photosPath} component={Photos} isPrivate />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Suspense>
)
