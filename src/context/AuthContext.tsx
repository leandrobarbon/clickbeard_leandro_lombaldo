import { createContext, useState, ReactNode, useContext } from 'react';
import { User } from 'models/user';
import { setCookie, destroyCookie } from 'nookies';
import Router from 'next/router';
import { signInService } from 'services/signInService';
import { registerService } from 'services/registerService';

interface AuthContextType {
   isAuthenticated: boolean;
   user?: User | null;
   signIn: (email: string, password: string) => Promise<void>;
   signUp: (user: User) => Promise<void>;
   logout: () => void
}

interface AuthProvider {
   children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProvider) {
   const [user, setUser] = useState<User | null>(null);

   const isAuthenticated = !!user;

   async function signIn(email: string, password: string) {
      const response = await signInService(email, password)

      setCookie(undefined, 'nextauth-user', JSON.stringify({ token: response.data.token, user: response.data.user }), {
         maxAge: 60 * 60 * 1, //1 Hour
      })


      setUser(response.data.user as User);

      Router.push('/home');
   }

   async function signUp(user: User) {
      const response = await registerService(user)

      setCookie(undefined, 'nextauth-user', JSON.stringify({ token: response.data.token, user: response.data.user }));

      setUser(response.data.user)
   }


   async function logout() {
      destroyCookie(null, 'user');
      setUser(null)
      Router.replace('/');
   }



   return (
      <AuthContext.Provider value={{ isAuthenticated, user, signIn, signUp, logout }}>
         {children}
      </AuthContext.Provider>
   )
}

export const useAuth = () => {
   return useContext(AuthContext);
}