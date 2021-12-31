import React, { Suspense, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { ConnectedRouter as Router, push } from 'connected-react-router'

import { history } from '../redux'
import { LOGIN_PATH, REGISTER_PATH, DASHBOARD_PATHS } from '../utils/const'
import CustomRoute from '../components/CustomRoute'
import Loading from '../components/Loading'

const Login = React.lazy(() => import('./login.route'))
const Register = React.lazy(() => import('./register.route'))
const Dashboard = React.lazy(() => import('./dashboard.route'))
const NotFound = React.lazy(() => import('./notFound.route'))

const Routes = () => {

  const dispatch = useDispatch()

  // Manually dispatch action at first render
  // fix initial pathname value in redux state
  useEffect(() => {
    dispatch(push({ pathname: history.location.pathname }))
  }, [dispatch])

  return (
    <Suspense fallback={(<Loading />)}>
      <Router history={history}>
        <Switch>
          <CustomRoute exact path={LOGIN_PATH} component={Login} />
          <CustomRoute exact path={REGISTER_PATH} component={Register} />
          <CustomRoute exact path={DASHBOARD_PATHS} component={Dashboard} isPrivate />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default Routes
