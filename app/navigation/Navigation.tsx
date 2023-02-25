import React, { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import ButtonMenu from '@/components/UI/Layout/ButtonMenu/ButtonMenu'
import PrivateNavigation from './PrivateNavigation'


const Navigation = () => {
    const { user } = useAuth()

    const [currentRoute, setCurrentRoute] = useState<string | undefined>(undefined)

    const navRef = useNavigationContainerRef()

    useEffect(() => {
        setCurrentRoute(navRef.getCurrentRoute()?.name)

        const listener = navRef.addListener('state', () => setCurrentRoute(navRef.getCurrentRoute()?.name))

        return () => {
            navRef.removeListener('state', listener)
        }
    }, [])
  return (
    <>
    <NavigationContainer ref={navRef}>
      <PrivateNavigation/>
    </NavigationContainer>
    {user && currentRoute && <ButtonMenu nav={navRef.navigate} currentRoute={currentRoute} />}
    </>
  )
}

export default Navigation
