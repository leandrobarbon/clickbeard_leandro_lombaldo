import { createContext, useState, ReactNode } from 'react';
import { User } from 'models/user';
import { setCookie } from 'nookies';
import Router from 'next/router';
import { signInService } from 'services/signInService';
import { registerService } from 'services/registerService';

interface AuthContextType {
   isAuthenticated: boolean;
   user?: User;
   signIn: (email: string, password: string) => Promise<void>;
   signUp: (user: User) => Promise<void>;
}

interface AuthProvider {
   children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProvider) {
   const [user, setUser] = useState<User | null>(null);

   const isAuthenticated = !!user;

   async function signIn(email:string, password: string) {
      const response = await signInService(email, password)

      setCookie(undefined, 'nextauth-user', JSON.stringify({ token: response.token, role: 'role aqui' }), {
         maxAge: 60 * 60 * 1, //1 Hour
      })
      

      setUser(response);
      
      if (email === 'admin@admin.com.br') {
         Router.push('/admin');
      } else {
         Router.push('/home');
      }
   }

   async function signUp(user:User) {      
      const response = await registerService(user)

      setCookie(undefined, 'nextauth-user', JSON.stringify({ token: response.token, role: 'role aqui' }))

      setUser(response)
   }


   return (
      <AuthContext.Provider value={{ isAuthenticated, signIn, signUp }}>
        {children}
      </AuthContext.Provider>
    )
}