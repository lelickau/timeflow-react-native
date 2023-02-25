import * as Splash from 'expo-splash-screen'
import React, { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from 'react'
import type { IUser } from '@/types/user.interface'

export type TypeUserState = IUser | any

interface IContext {
    user: IUser
    setUser: Dispatch<SetStateAction<TypeUserState>>
}

export const AuthContext = createContext({} as IContext)

let ignore = Splash.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [user, setUser] = useState<TypeUserState>({} as IUser)

    useEffect(() =>{
      let isMounted = false

      const getUserFromStorage = async () => {
        if (isMounted) {
          // get users
        }

        await Splash.hideAsync()
      }

      let ignore = getUserFromStorage()

        return () => {
          isMounted = false
        }
    }, [])
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider