import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, User } from "firebase/auth"
import { getFirestore, collection, getDocs, addDoc, query, where, limit } from 'firebase/firestore/lite'
import firebaseConfig from './configs/firebase'
import getErrorMessage from "./getErrorMessage";
import { deleteAuthToken, saveAuthToken } from '../utils/helper/authorizationToken'

interface IUser {
  uid: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signIn = async (email: string, password: string) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const userData = await getUser(user?.uid)
    await saveUserToken(user)
    return userData;
  } catch (err: any) {
    console.error("Error adding document", err.code, err.message, err.name);
    throw Error(getErrorMessage(err.code))
  }
};

const signUp = async (firstName: string, lastName: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const usersCollection = collection(db, 'users');
    const userData = {
      uid: user.uid,
      firstName,
      lastName,
      email,
      password
    }
    await addDoc(usersCollection, userData);
    await saveUserToken(user);
    return userData
  } catch (err: any) {
    console.error("Error adding document", err.code, err.message, err.name);
    throw Error(getErrorMessage(err.code))
  }
};

const getUser = async (userId: string) => {
  try {
    const q = query(collection(db, 'users'), where('uid', "==", userId), limit(1));
    const querySnapshot = await getDocs(q);
    let data: IUser | null = null;
    querySnapshot.forEach((doc: any) => {
      data = doc.data();
    });
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

const signOut = async () => {
  deleteAuthToken()
  await auth.signOut();
};

const saveUserToken = async (user: User) => {
  const token = await user.getIdToken()
  saveAuthToken(token)
}

export {
  auth,
  db,
  signIn,
  signUp,
  getUser,
  signOut,
};