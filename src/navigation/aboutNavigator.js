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

const Stack = createStackNavigator()

const AboutNavigator = (props) =>{
    const {colors} = useTheme()
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const navigation = useNavigation()
    return(
        <Stack.Navigator screenOptions={{
            headerTitleStyle:{color:colors.headerText},
            headerBackTitleVisible:false,
            headerRight:() => <Ionicons name='list' onPress={() => props.navigation.toggleDrawer()} size={28} />,
            headerBackImage:({tintColor}) => <Ionicons name={'ios-arrow-back'} color={colors.headerText} size={30}/>
        }}>
            <Stack.Screen name='aboutApp' component={AboutApp} options={{
                headerTitle:t('about app'),
                headerTitleAlign:'center'
            }} />
        </Stack.Navigator>
    )
}

export default AboutNavigator