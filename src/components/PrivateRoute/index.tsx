import  React from  "react";
import { Route, Redirect } from  "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../database";
import Loading from '../Loading'

const  PrivateRoute: React.FC<{
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
  componentProps?: any;
}> = ({ component, componentProps, ...rest }) => {

  const ComponentToRender = component;
  const [user, loading] = useAuthState(auth);
  let userHasAccess = user !== null;

  return (
    !loading ?
    <Route 
      {...rest} 
      render={(props) => userHasAccess ?
        <ComponentToRender {...props} {...componentProps} /> :
        <Redirect to={{ pathname: '/login', state: {from: props.location} }} />
      }
    /> : <Loading />
  )

};

export  default  PrivateRoute;