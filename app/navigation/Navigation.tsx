import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '@/hooks/useAuth'

const Navigation = () => {
    const { user } = useAuth()
  return (
    <View>
      <Text>Navigation</Text>
    </View>
  )
}

export default Navigation
