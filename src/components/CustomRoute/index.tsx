import  React from  "react";
import { Route, Redirect } from  "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../database";
import { LOGIN_PATH } from "../../utils/const";

import Loading from '../Loading'

interface IProps {
  component: React.ComponentType<any>;
  path: string | string[];
  isPrivate?: boolean;
  exact?: boolean;
  componentProps?: any;
}

const CustomRoute: React.FC<IProps> = ({
  component,
  isPrivate = false,
  componentProps,
  ...rest
}) => {

  const ComponentToRender = component;
  const [user, loading] = useAuthState(auth);
  let userHasAccess = user !== null;

  return (
    !loading ?
    <Route 
      {...rest} 
      render={(props) => userHasAccess || !isPrivate ?
        <ComponentToRender {...props} {...componentProps} /> :
        <Redirect to={{ pathname: LOGIN_PATH, state: {from: props.location} }} />
      }
    /> : <Loading />
  )

};

export default CustomRoute;