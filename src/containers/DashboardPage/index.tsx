import React, { useEffect, useCallback, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, getUser } from "../../database";
import { logout } from '../../redux/api'
import { storeUserData } from "../../redux/actions/user.actions";
import { selectUser } from "../../redux/selectors";
import Dashboard from "./Dashboard";
import { history } from "../../redux";

export type TSection = 'todos' | 'photos'

interface IProps {
  children: ReactNode
  section: TSection
}

const DashboardPage = ({ children = null, section = 'todos' }: IProps) => {

  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();
  const userData = useSelector(selectUser)

  const memoFetchUserData = useCallback(async () => {
    try {
      if(!user) return
      const userData = await getUser(user.uid)
      if(!userData) return;
      const { email, firstName, lastName } = userData
      dispatch(storeUserData({ email, firstName, lastName }))
    } catch (err) {
      console.error(err);
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (loading) return;
    if (!user) return history.push('/login')
    memoFetchUserData();
  }, [user, loading, memoFetchUserData]);

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Dashboard
      children={children}
      section={section}
      loading={loading}
      userData={userData}
      fnLogout={handleLogout}
    />
  );
}

export default DashboardPage;