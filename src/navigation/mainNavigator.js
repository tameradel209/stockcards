import React, {useContext, useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {LocalizationContext} from '../context/langContext'
import {useTheme} from '@react-navigation/native'
import {Ionicons} from 'react-native-vector-icons'
import Login from '../screens/login'
import Signup from '../screens/signup'
import Splash from "../screens/splash";
import Password from '../screens/password'
import DrawerNavigator from './drawerNavigator';
import BottomNavigator from './bottomNavigator'

const Stack = createStackNavigator()

const MainNavigator = () =>{
    const {colors} = useTheme()
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const [user, setUser] = useState(true)

    return(
        <Stack.Navigator initialRouteName={'splash'} screenOptions={{
            headerShown:false
        }}>
            {user ? (
                <>
                    <Stack.Screen name='splash' component={Splash} />
                    <Stack.Screen name='login' component={Login} />
                    <Stack.Screen name='signup' component={Signup} />
                    <Stack.Screen name='password' component={Password} />
                    <Stack.Screen name='bottomNavigator' component={BottomNavigator} />
                </>
            ):(
                <>
                    <Stack.Screen name='bottomNavigator' component={BottomNavigator} options={{
                        headerShown:false
                    }} />
                </>
            )}
        </Stack.Navigator>
    )
}

export default MainNavigator