import React, {useContext, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, ScrollView, Image, StyleSheet} from 'react-native'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import * as Device from 'expo-device'
import {LocalizationContext} from '../../App'
import { useTheme, useFocusEffect } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

const {width, height} = Dimensions.get('window')

const Header = (props) => {

    const { colors } = useTheme()

    const {t, locale, setLocale} = useContext(LocalizationContext)

    return(
        <LinearGradient start={{x:locale=='en' ? 0:1,y:0}} end={{x:locale=='en' ? 1:0,y:0}} colors={['rgb(98, 27, 49)', 'rgb(196, 54, 98)']} style={[styles.gradient, {flexDirection:locale=='en' ?'row':'row-reverse'}]}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/icon.png')} style={styles.image}/>
            </View>
            <View>
                <Text style={{color:colors.customBackground}}>{t('hello')}</Text>
                <Text style={styles.nameText}>{props.name}</Text>
            </View>
        </LinearGradient>
    )
}

const Item = (props) => {

    const { colors } = useTheme()

    const {t, locale, setLocale} = useContext(LocalizationContext)

    return(
        <View>
            <TouchableOpacity onPress={props.onPress} style={[styles.button, {backgroundColor:colors.customBackground, flexDirection:locale=='en'? 'row':'row-reverse'}]}>
                <View style={{margin:20}}>
                    {props.icon}
                </View>
                <View>
                    <Text style={{color:colors.nameText, fontSize:16}}>{props.name}</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const MainProfile = (props) => {

    const {t, locale, setLocale} = useContext(LocalizationContext)

/*     const handleViewRef = ref => this.view = ref

    const zoom = () => this.view.zoomInDown(2000)

    useFocusEffect(useCallback(
        () => {
            zoom() 
        },
        [],
    )) */

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Header name={'Ahmed Adel'} />
            </View>
            <Animatable.View animation={'zoomInDown'} /* ref={handleViewRef} */ style={styles.bodyContainer}>
                <Item icon={<Image source={require('../../assets/chat-bubble-user.png')} style={{width:24, height:24}} />} name={t('personal information')} onPress={() => props.navigation.navigate('personalInfo')}/>
                <Item icon={<Image source={require('../../assets/image-plus.png')} style={{width:24, height:24}} />} name={t('my favorite cards')} onPress={() => props.navigation.navigate('favoriteCards')}/>
                <Item icon={<Image source={require('../../assets/package.png')} style={{width:24, height:24}} />} name={t('my packages')} onPress={() => props.navigation.navigate('myPackages')}/>
                <Item icon={<Image source={require('../../assets/clipboard-alt.png')} style={{width:24, height:30}} />} name={t('my orders list')} onPress={() => props.navigation.navigate('ordersList')}/>
                <Item icon={<Image source={require('../../assets/bell.png')} style={{width:24, height:30}} />} name={t('notifications')}  onPress={() => props.navigation.navigate('notifications')}/>                  
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    },
    headerContainer:{
        flex:1, 
        margin:20
    },
    bodyContainer:{
        flex:4,
        alignItems:'center'
    },
    gradient:{
        borderRadius:20, 
        height:height/8, 
        width:width/6*5, 
        margin:height/100, 
        alignItems:'center',
    },
    imageContainer:{
        margin:20
    },
    image:{
        height:height/11, 
        width:height/11, 
        borderRadius:height/22
    },
    nameText:{
        fontWeight:'bold', 
        fontSize:18,
        color:'white'
    },
    button:{
        margin:height/100, 
        borderRadius:10,  
        height:height/11, 
        width:width/6*5, 
        alignItems:'center'
    }
})

export default MainProfile