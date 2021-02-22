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

const Stack = createStackNavigator()

const OccasionsNavigator = (props) =>{
    const {colors} = useTheme()
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const navigation = useNavigation()
    return(
        <Stack.Navigator screenOptions={{
            headerTitleStyle:{color:colors.headerText},
            headerBackTitleVisible:false,
            headerRight:() => <Button title='drawer' onPress={() => props.navigation.toggleDrawer()} />,
            headerBackImage:({tintColor}) => <Ionicons name={'ios-arrow-back'} color={colors.headerText} size={30}/>
        }}>
            <Stack.Screen name='occasons' component={Occasions} options={{
                headerTitle:t('occasions'),
                headerTitleAlign:'center'
            }} />
            <Stack.Screen name='occasion' component={Occasion} options={{
                headerTitle:t('occasion'),
                headerTitleAlign:'center',
            }} />
            <Stack.Screen name='occasionFilter' component={OcasionFilter} options={{
                headerTitle:t('occasion filter'),
                headerTitleAlign:'center',
            }} />
        </Stack.Navigator>
    )
}

export default OccasionsNavigator