import React, {useContext} from 'react'
import {Button} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import MainProfile from '../screens/mainProfile'
import PersonalInfo from '../screens/personalInfo'
import EditPersonalInfo from '../screens/editPersonalInfo'
import FavoriteCards from '../screens/favoriteCards'
import MyPackages from '../screens/myPackages'
import OrdersList from '../screens/ordersList'
import Notifications from '../screens/notificationsManagement'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useNavigation} from '@react-navigation/native'
import {Ionicons} from 'react-native-vector-icons'
import PackageManagement from "../screens/packageManagement";
import Occasions from "../screens/occasions";
import Occasion from "../screens/occasion";
import OcasionFilter from "../screens/occasionFilter";
import OccasionCardShow from '../screens/occasionCardShow'
import OffersPackages from '../screens/offersPackages'
import AboutApp from '../screens/aboutApp'
import Cart from '../screens/cart'
import Payment from '../screens/payment'
import Congrats from '../screens/congrats'

const Stack = createStackNavigator()

const CartNavigator = (props) =>{
    const {colors} = useTheme()
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const navigation = useNavigation()
    return(
        <Stack.Navigator initialRouteName={'cart'} screenOptions={{
            headerTitleStyle:{color:colors.headerText},
            headerBackTitleVisible:false,
            headerBackImage:({tintColor}) => <Ionicons name={'ios-arrow-back'} color={colors.headerText} size={30}/>
        }}>
            <Stack.Screen name='cart' component={Cart} options={{
                headerTitle:t('cart'),
                headerTitleAlign:'center'
            }} />
            <Stack.Screen name='payment' component={Payment} options={{
                headerTitle:t('payment method'),
                headerTitleAlign:'center'
            }} />
            <Stack.Screen name='congrats' component={Congrats} options={{
                headerShown:false
            }} />
        </Stack.Navigator>
    )
}

export default CartNavigator