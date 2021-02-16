import React, {useContext} from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {LocalizationContext} from '../context/langContext'
import {useTheme} from '@react-navigation/native'
import {Ionicons} from 'react-native-vector-icons'
import BottomNavigator from './bottomNavigator'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () =>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='bottomNavigator' component={BottomNavigator} />
        </Drawer.Navigator>
    )
}
