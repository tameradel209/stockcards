import React, {useContext} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import MainProfile from '../screens/mainProfile'
import PersonalInfo from '../screens/personalInfo'
import EditPersonalInfo from '../screens/editPersonalInfo'
import FavoriteCards from '../screens/favoriteCards'
import MyPackages from '../screens/myPackages'
import OrdersList from '../screens/ordersList'
import Notifications from '../screens/notificationsManagement'
import {LocalizationContext} from '../../App'
import {useTheme} from '@react-navigation/native'
import {Ionicons} from 'react-native-vector-icons'
import PackageManagement from "../screens/packageManagement";

const Stack = createStackNavigator()

const ProfileNavigator = () =>{
    const {colors} = useTheme()
    const {t, locale, setLocale} = useContext(LocalizationContext)

    return(
        <Stack.Navigator screenOptions={{
            headerTitleStyle:{color:colors.headerText},
            headerBackTitleVisible:false,
            headerBackImage:({tintColor}) => <Ionicons name={'ios-arrow-back'} color={colors.headerText} size={30}/>
        }}>
            <Stack.Screen name='mainProfile' component={MainProfile} options={{
                headerTitle:t('profile'),
                headerTitleAlign:'center'
            }} />
            <Stack.Screen name='personalInfo' component={PersonalInfo} options={{
                headerTitle:t('personal information'),
                headerTitleAlign:'center'
            }} />
            <Stack.Screen name='editPersonalInfo' component={EditPersonalInfo} options={{
                headerTitle:t('edit personal information'),
                headerTitleAlign:'center',
            }} />
            <Stack.Screen name='favoriteCards' component={FavoriteCards} options={{
                headerTitle:t('my favorite cards'),
                headerTitleAlign:'center',
            }} />
            <Stack.Screen name='myPackages' component={MyPackages} options={{
                headerTitle:t('my packages'),
                headerTitleAlign:'center',
            }} />
            <Stack.Screen name='packageManagement' component={PackageManagement} options={{
                headerTitle:t('package management'),
                headerTitleAlign:'center',
            }} />
            <Stack.Screen name='ordersList' component={OrdersList} options={{
                headerTitle:t('my orders list'),
                headerTitleAlign:'center',
            }} />
            <Stack.Screen name='notifications' component={Notifications} options={{
                headerTitle:t('occasion notifications management'),
                headerTitleAlign:'center',
            }} />
        </Stack.Navigator>
    )
}

export default ProfileNavigator