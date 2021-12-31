import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth, getUser } from "../../database";
import { logout } from '../../redux/api'
import { storeUserData } from "../../redux/actions/user.actions";
import { selectUser } from "../../redux/selectors";
import { history } from "../../redux";
import { LOGIN_PATH } from "../../utils/const";

import Dashboard from "./Dashboard";

const DashboardPage = () => {

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
    if (!user) return history.push(LOGIN_PATH)
    memoFetchUserData();
  }, [user, loading, memoFetchUserData]);

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Dashboard
      loading={loading}
      userData={userData}
      fnLogout={handleLogout}
    />
  );
}

export default DashboardPage;