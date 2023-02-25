import { TypeNav } from '@/types/menu.interface'
import { View, Text } from 'react-native'
import React, { FC } from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { menuData } from './menu.data'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface IButtonMenu {
    nav: TypeNav
    currentRoute?: string
}

const ButtonMenu: FC<IButtonMenu> = ({ currentRoute, nav }) => {
  const { bottom } = useSafeAreaInsets()
  return (
    <View className='pt-5 px-3 flex-row justify-between items-center w-full bg-[#1e1c2e]' style={{ paddingBottom: bottom + 10 }}>
      {
        menuData.map((item) => <MenuItem nav={nav} item={item} currentRoute={currentRoute} key={item.path} />)
      }
    </View>
  )
}

export default ButtonMenu