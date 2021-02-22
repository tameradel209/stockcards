import React, {useContext} from 'react'
import { StyleSheet, ScrollView, SafeAreaView, View, Image, Text, Linking, Dimensions, TouchableOpacity } from "react-native";
import {createDrawerNavigator, DrawerItemList, DrawerItem} from '@react-navigation/drawer'
import {LocalizationContext} from '../context/langContext'
import {useTheme} from '@react-navigation/native'
import {Ionicons} from 'react-native-vector-icons'
//import BottomNavigator from './bottomNavigator'
import Occasions from '../screens/occasions'
import Sectors from '../screens/sectors'
import OffersPackages from '../screens/offersPackages'
import AboutApp from '../screens/aboutApp'
import ContactUs from '../screens/contactUs'
import PrivacyPolicy from '../screens/privacyPolicy'
import UseTerms from '../screens/useTerms'
import commonQuestions from '../screens/commonQuestions'
import HowDesignCard from '../screens/howDesignCard'
import Settings from '../screens/settings'
import Home from "../screens/home";
import { LinearGradient } from 'expo-linear-gradient'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import Constants from 'expo-constants'
import OcasionsNavigator from './ocasionsNavigator'


const {width, height} = Dimensions.get('window')
const Drawer = createDrawerNavigator()

const Label = (props) =>{

    const {t, locale} = useContext(LocalizationContext)

    return(
        <View style={{flexDirection:locale=='en'?'row':'row-reverse', alignItems:'center', width:250}}>
            <Image source={props.image} resizeMode='contain' style={{width:20, height:20}} />
            <Text style={{marginHorizontal:10, color:'#002b2a'}}>{props.title}</Text>
        </View>
    )
}

const CustomDrawerContentComponent = (props)=>{

    return (
        <ScrollView>
            <SafeAreaView style={{flex:1}}
                forceInset={{ top:'always', horizontal:'never' }}>
                <LinearGradient start={{x:0,y:0}} end={{x:1,y:0}} colors={['rgb(98, 27, 49)', 'rgb(196, 54, 98)']} style={[styles.drawerHeader]}>
                    <View style={{flex:1}}>
                        <Image source={require('../../assets/icon.png')}
                            style={styles.drawerImage} />
                    </View>
                    <View style={{flex:2}}>
                        <Text style={styles.drawerHeaderText}>
                            Ristorant con Confusion
                        </Text>
                        <Text style={{color:'white', marginBottom:10}}>
                            wesamgamal@gmail.com
                        </Text>
                    </View>
                </LinearGradient>
                <DrawerItemList {...props} />
                <DrawerItem
                    label={() =>{
                        return(
                            <Label image={require('../../assets/exit.png')} title='exit'/>
                        )
                    }}

                    onPress={() => props.navigation.push('profile')/* Linking.openURL('https://mywebsite.com/help') */}
                />
            </SafeAreaView>
        </ScrollView>
    )
}

const MyHeader = (props) =>{
    return(
        <View style={{flexDirection:'row', width, height:50, marginTop:Constants.statusBarHeight, backgroundColor:'red'}}>
            <TouchableOpacity onPress={props.onPress}>
                <Image source={require('../../assets/list.png')} resizeMode='contain' style={{width:30, height:30}} />
            </TouchableOpacity>
            <Text>{props.title}</Text>
        </View>
    )
}

const DrawerNavigator = () =>{

    const {t, locale, setLocale} = useContext(LocalizationContext)

    return(
        <Drawer.Navigator 
            drawerContent={CustomDrawerContentComponent} 
            drawerPosition={locale=='en'?'left':'right'} 
            backBehavior='order' 
            screenOptions={{
            swipeEnabled:false,
/*             header: ({ scene }) => {
                const { options } = scene.descriptor;
                const title =
                  options.headerTitle !== undefined
                    ? options.headerTitle
                    : options.title !== undefined
                    ? options.title
                    : scene.route.name;
              
                return (
                  <MyHeader
                    title={title}
                    onPress={scene.descriptor.navigation.toggleDrawer}
                  />
                )
              },
              headerShown:true */
        }}>
            <Drawer.Screen 
                name='home' 
                component={Home}  
                options={{drawerLabel:() => <Label image={require('../../assets/home.png')} title='home'/>}} 
            />
            <Drawer.Screen 
                name='ocasionsNavigator'
                component={OcasionsNavigator} 
                options={{drawerLabel:() => <Label image={require('../../assets/star.png')} title='occations'/>}} 
            />
            <Drawer.Screen 
                name='sectors' 
                component={Sectors}
                options={{drawerLabel:() => <Label image={require('../../assets/education.png')} title='sectors'/>}}
            />
            <Drawer.Screen 
                name='offersPackages' 
                component={OffersPackages}
                options={{drawerLabel:() => <Label image={require('../../assets/package.png')} title='packages offers'/>}}    
            />
            <Drawer.Screen 
                name='aboutApp' 
                component={AboutApp} 
                options={{drawerLabel:() => <Label image={require('../../assets/comment.png')} title='about app'/>}} 
            />
            <Drawer.Screen 
                name='contactUs'
                component={ContactUs}
                options={{drawerLabel:() => <Label image={require('../../assets/message.png')} title='contact us'/>}} 
            />
            <Drawer.Screen 
                name='privacyPolicy'
                component={PrivacyPolicy}
                options={{drawerLabel:() => <Label image={require('../../assets/clipboard-alt.png')} title='privacy policy'/>}} 
            />
            <Drawer.Screen 
                name='useTerms' 
                component={UseTerms}
                options={{drawerLabel:() => <Label image={require('../../assets/file-check.png')} title='terms of use'/>}} 
            />
            <Drawer.Screen 
                name='commonQuestions' 
                component={commonQuestions}
                options={{drawerLabel:() => <Label image={require('../../assets/exclamation.png')} title='common questions'/>}} 
            />
            <Drawer.Screen 
                name='howDesignCard' 
                component={HowDesignCard} 
                options={{drawerLabel:() => <Label image={require('../../assets/videosquare.png')} title='how design your card'/>}}     
            />
            <Drawer.Screen 
                name='Settings' 
                component={Settings} 
                options={{drawerLabel:() => <Label image={require('../../assets/package.png')} title='settings'/>}} 
            />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
	drawerHeader:{
		backgroundColor: '#512DA8',
		height: 100,
		alignItems: 'flex-end',
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row'
	},
	drawerHeaderText:{
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
	drawerImage:{
		margin: 10,
		width : 50,
		height: 50,
        borderRadius:25
	}
})

export default DrawerNavigator