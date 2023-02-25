import React from 'react'
import { View, Text } from 'react-native'
import { useAuth } from '@/hooks/useAuth'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TypeRootStackParamList } from './navigation.types'
import { routes } from './routes'
import Auth from '@/components/screens/Auth/Auth'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigation = () => {
    const { user } = useAuth()
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        contentStyle: {
            backgroundColor: '#1e1c2e'
        }
    }}>
      {
        user
         ? (
            routes.map(route => (
                <Stack.Screen key={route.name} {...route} />
            ))
            )
          : <Stack.Screen name='Auth' component={Auth} />
      }
    </Stack.Navigator>
  )
}

export default PrivateNavigation