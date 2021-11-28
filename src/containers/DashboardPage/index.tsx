import React, { useEffect } from "react";
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
  section: TSection
}

const DashboardPage = ({ section = 'todos' }: IProps) => {

  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();
  const userData = useSelector(selectUser)

  useEffect(() => {
    if (loading) return;
    if (!user) return history.push('/login')
    fetchUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);  // fetchUserData doesn't change

  const fetchUserData = async () => {
    try {
      if(!user) return
      const userData = await getUser(user.uid)
      if(!userData) return;
      const { email, firstName, lastName } = userData
      dispatch(storeUserData({ email, firstName, lastName }))
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Dashboard
      section={section}
      loading={loading}
      userData={userData}
      fnLogout={handleLogout}
    />
  );
}

export default DashboardPage;