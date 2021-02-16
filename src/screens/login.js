import React, {useContext, useState, useEffect} from 'react'
import {View, Text, Dimensions, TouchableOpacity, ScrollView, Image, StyleSheet, TextInput, Modal} from 'react-native'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import {LocalizationContext} from '../context/langContext'
import {useTheme} from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import CustomButton from "../components/button";

const {width, height} = Dimensions.get('window')

const Login = (props) =>{ 

    const {t, locale} = useContext(LocalizationContext)
    const {colors} = useTheme()

    return(
        <ScrollView>
            <View style={{height:height/2}}>
                <Image source={require('../../assets/loginbg.png')} resizeMode='stretch' style={{width:width, height:height/2}} />
                <View style={{position:'absolute', bottom:80, padding:10, alignItems:locale=='en'?'flex-start':'flex-end', width:width}}>
                    <Text style={{textAlign:locale=='en'?'left':'right', fontSize:18, fontWeight:'bold', color:'#fff'}}>{t('login')}</Text>
                </View>
                <View style={{alignItems:locale=='en'?'flex-start':'flex-end', padding:10, position:'absolute', bottom:70, width:width}}>
                    <View style={{width:width/5, borderWidth:1.5, borderColor:colors.backageIcon, backgroundColor:colors.backageIcon}} />
                </View>
                <View style={{position:'absolute', bottom:20, padding:10, alignItems:locale=='en'?'flex-start':'flex-end', width:width}}>
                    <Text style={{textAlign:locale=='en'?'left':'right', fontSize:18, color:'#fff'}}>{t('login and enjoy the best groups of free and paid gift cards')}</Text>
                </View>
            </View>
            <View style={{paddingVertical:20, alignItems:locale=='en'?'flex-start':'flex-end'}}>
                <View style={{marginHorizontal:10, justifyContent:'center'}}>
                    <Text style={{color:colors.nameText}}>{t('email')}</Text>
                </View>
                <View style={{marginBottom:10,marginHorizontal:5, padding:5, justifyContent:'center', borderBottomWidth:1, borderColor:colors.bottomBorder, width:width-20}}>
                    <TextInput placeholder={t('enter email')} textAlign={locale=='en'?'left':'right'} />
                </View>
                <View style={{marginHorizontal:10, justifyContent:'center'}}>
                    <Text style={{color:colors.nameText}}>{t('password')}</Text>
                </View>
                <View style={{flexDirection:locale=='en'?'row':'row-reverse', justifyContent:'space-between', marginBottom:10, marginHorizontal:5, padding:5, alignItems:'center', borderBottomWidth:1, borderColor:colors.bottomBorder, width:width-20}}>
                    <TextInput placeholder={t('enter password')}  textAlign={locale=='en'?'left':'right'} />
                    <TouchableOpacity onPress={() => props.navigation.navigate('password')}>
                        <Text style={{color:'#85314b'}}>{t('forgot password ?')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{alignItems:'center', margin:10}}>
                <CustomButton onPress={() => props.navigation.navigate('bottomNavigator')} style={{backgroundColor:colors.backageIcon}} title={t('login')} titleStyle={{color:'#ffffff'}}/>
            </View>
            <View style={{alignItems:'center'}}>
                <Text>{t('or login with')}</Text>
            </View>
            <View style={{flexDirection:locale=='en'?'row':'row-reverse', justifyContent:'space-between', paddingHorizontal:width/4, paddingVertical:20}}>
                <TouchableOpacity onPress={() => null} style={{width:50, height:50, borderRadius:25, alignItems:'center', justifyContent:'center', shadowColor: '#000', shadowOffset: {width: 0,height: 3,},shadowOpacity: 0.25,shadowRadius: 3.84, elevation:5, backgroundColor:'white'}}>
                    <Image source={require('../../assets/twitter.png')} style={{width:20, height:20}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => null} style={{width:50, height:50, borderRadius:25, alignItems:'center', justifyContent:'center', shadowColor: '#000', shadowOffset: {width: 0,height: 3,},shadowOpacity: 0.25,shadowRadius: 3.84, elevation:5, backgroundColor:'white'}}>
                    <Image source={require('../../assets/facebook.png')} resizeMode='contain' style={{width:20, height:20}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => null} style={{width:50, height:50, borderRadius:25, alignItems:'center', justifyContent:'center', shadowColor: '#000', shadowOffset: {width: 0,height: 3,},shadowOpacity: 0.25,shadowRadius: 3.84, elevation:5, backgroundColor:'white'}}>
                    <Image source={require('../../assets/google.png')} style={{width:20, height:20}} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:locale=='en'?'row':'row-reverse', justifyContent:'center', padding:10, marginBottom:200}}>
                <View style={{marginHorizontal:10}}>
                    <Text>{t('get actual account in the app')}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('signup')}>
                        <Text style={{color:colors.backageIcon}}>{t('create an account')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login