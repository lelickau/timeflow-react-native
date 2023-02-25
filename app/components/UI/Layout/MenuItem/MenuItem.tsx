import { AntDesign } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import React, { FC } from 'react'
import type { IMenuItem, TypeNav } from '@/types/menu.interface'

interface IMenuItemProps {
  item: IMenuItem
  nav: TypeNav
  currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ currentRoute, nav, item }) => {
  const isActive = currentRoute === item.path
  return (
    <Pressable className='w-[24%] items-center' onPress={() => nav(item.path)}>
      <AntDesign name={item.iconName} size={26} color={isActive ? '#664EFE' : '#8D8A97'} />
    </Pressable>
  )
}

export default MenuItem