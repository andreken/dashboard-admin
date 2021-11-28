import  React from  "react";
import { Route, Redirect } from  "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../database";

const  PrivateRoute: React.FC<{
  component: React.ComponentType<any>;
  path: string;
  exact?: boolean;
  componentProps?: any;
}> = ({ component, componentProps, ...rest }) => {

  const ComponentToRender = component;
  const [user] = useAuthState(auth);
  const userHasAccess = user !== null;

  return (
    <Route 
      {...rest} 
      render={(props) => userHasAccess ?
        <ComponentToRender {...props} {...componentProps} /> :
        <Redirect to={{ pathname: '/login', state: {from: props.location} }} />
      }
    />
  )

};

export  default  PrivateRoute;