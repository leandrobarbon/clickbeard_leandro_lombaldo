export interface User {
   name: string,
   email: string,
   specialty?: string[],
   age?: number | null,
   password: string,
   isAdmin?: boolean,
   isClient?: boolean,
   isEmployer?: boolean,
}