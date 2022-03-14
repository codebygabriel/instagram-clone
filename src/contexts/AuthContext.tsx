import { createContext, ReactNode, useState } from 'react';
import { auth, firebase } from '../services/firebase.service';
import Router from 'next/router';

type AuthCreateAccountProps = {
  email?: string;
  username?: string;
  password?: string;
};

type UserProps = {
  id: string;
  email: string;
  username: string;
  photo_url?: string | null;
};

type AuthContextProps = {
  credentials: UserProps | null;
  isAuthenticated: boolean;
  createAccount: ({ email, username, password }: AuthCreateAccountProps) => Promise<boolean>;
  recoveryPassword: ({ email }: AuthCreateAccountProps) => Promise<boolean>;
  signInWidthCredentials: ({ email, username, password }: AuthCreateAccountProps) => Promise<boolean>;
  signInWithGoogle: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [credentials, setCredentials] = useState<UserProps | null>(null);

  let isAuthenticated = !!credentials;

  async function createAccount({ email, username, password }: AuthCreateAccountProps) {
    try {
      const data = await auth.createUserWithEmailAndPassword(email, password);

      await auth.currentUser.updateProfile({ displayName: username });

      if (!!data?.user) return true;
    } catch (err) {
      // console.log('ERROR ON CREATE ACCOUNT:', err);

      return false;
    };
  };

  async function signInWidthCredentials({ email, password }: AuthCreateAccountProps) {
    try {
      const data = await auth.signInWithEmailAndPassword(email, password);

      if (!!data?.user) return true;
    } catch (err) {
      // console.log('ERROR ON SIGN IN WITH CREDENTIALS:', err);

      return false;
    };
  };

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const data = await auth.signInWithPopup(provider);

    if (data?.user) {
      const { uid, photoURL, displayName, email } = data.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account.');
      };

      setCredentials({
        id: uid,
        email,
        username: displayName,
        photo_url: photoURL,
      });

      isAuthenticated = true;

      Router.push('/');
    };
  };

  async function recoveryPassword({ email }: AuthCreateAccountProps) {
    try {
      await auth.sendPasswordResetEmail(email);

      return true;
    } catch (err) {
      // console.log('ERROR ON RECOVERY PASSWORD:', err);

      return false;
    };
  };

  return (
    <AuthContext.Provider value={{
      credentials,
      createAccount,
      isAuthenticated,
      signInWithGoogle,
      recoveryPassword,
      signInWidthCredentials,
    }}>
      {children}
    </AuthContext.Provider>
  );
};