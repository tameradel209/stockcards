import React, {useContext, useState, useEffect} from 'react'
import {View, Text, Dimensions, TouchableOpacity, ScrollView, Image, StyleSheet, TextInput, Modal, Platform, KeyboardAvoidingView} from 'react-native'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import {LocalizationContext} from '../context/langContext'
import {useTheme} from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import CustomButton from "../components/button";

const {width, height} = Dimensions.get('window')

const Signup = (props) =>{ 

    const {t, locale} = useContext(LocalizationContext)
    const {colors} = useTheme()

    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
        <ScrollView>
            <View style={{height:height/2}}>
                <Image source={require('../../assets/signupbg.png')} resizeMode='stretch' style={{width:width, height:height/2}} />
                <View style={{position:'absolute', bottom:80, padding:10, alignItems:locale=='en'?'flex-start':'flex-end', width:width}}>
                    <Text style={{textAlign:locale=='en'?'left':'right', fontSize:18, fontWeight:'bold', color:'#fff'}}>{t('create a new account')}</Text>
                </View>
                <View style={{alignItems:locale=='en'?'flex-start':'flex-end', padding:10, position:'absolute', bottom:70, width:width}}>
                    <View style={{width:width/5, borderWidth:1.5, borderColor:colors.backageIcon, backgroundColor:colors.backageIcon}} />
                </View>
                <View style={{position:'absolute', bottom:20, padding:10, alignItems:locale=='en'?'flex-start':'flex-end', width:width}}>
                    <Text style={{textAlign:locale=='en'?'left':'right', fontSize:18, color:'#fff'}}>{t('create a new account and enjoy the best groups of free and paid gift cards')}</Text>
                </View>
            </View>
            <View style={{paddingVertical:20, alignItems:locale=='en'?'flex-start':'flex-end'}}>
                <View style={{marginHorizontal:10, justifyContent:'center'}}>
                    <Text style={{color:colors.nameText}}>{t('full name')}</Text>
                </View>
                <View style={{marginBottom:10,marginHorizontal:5, padding:5, justifyContent:'center', borderBottomWidth:1, borderColor:colors.bottomBorder, width:width-20}}>
                    <TextInput placeholder={t('enter full name')} textAlign={locale=='en'?'left':'right'} />
                </View>
                <View style={{marginHorizontal:10, justifyContent:'center'}}>
                    <Text style={{color:colors.nameText}}>{t('email')}</Text>
                </View>
                <View style={{marginBottom:10,marginHorizontal:5, padding:5, justifyContent:'center', borderBottomWidth:1, borderColor:colors.bottomBorder, width:width-20}}>
                    <TextInput placeholder={t('enter email')} textAlign={locale=='en'?'left':'right'} />
                </View>
                <View style={{marginHorizontal:10, justifyContent:'center'}}>
                    <Text style={{color:colors.nameText}}>{t('phone number')}</Text>
                </View>
                <View style={{marginBottom:10,marginHorizontal:5, padding:5, justifyContent:'center', borderBottomWidth:1, borderColor:colors.bottomBorder, width:width-20}}>
                    <TextInput placeholder={t('enter phone number')} textAlign={locale=='en'?'left':'right'} />
                </View>
                <View style={{marginHorizontal:10, justifyContent:'center'}}>
                    <Text style={{color:colors.nameText}}>{t('password')}</Text>
                </View>
                <View style={{marginBottom:10,marginHorizontal:5, padding:5, justifyContent:'center', borderBottomWidth:1, borderColor:colors.bottomBorder, width:width-20}}>
                    <TextInput placeholder={t('enter password')} secureTextEntry textAlign={locale=='en'?'left':'right'} />
                </View>
                <View style={{marginHorizontal:10, justifyContent:'center'}}>
                    <Text style={{color:colors.nameText}}>{t('rewrite password')}</Text>
                </View>
                <View style={{marginBottom:10,marginHorizontal:5, padding:5, justifyContent:'center', borderBottomWidth:1, borderColor:colors.bottomBorder, width:width-20}}>
                    <TextInput placeholder={t('rewrite password')} secureTextEntry textAlign={locale=='en'?'left':'right'} />
                </View>
            </View>
            <View style={{alignItems:'center', margin:10}}>
                <CustomButton onPress={() => props.navigation.navigate('bottomNavigator')} style={{backgroundColor:colors.backageIcon}} title={t('create an account')} titleStyle={{color:'#ffffff'}}/>
            </View>
            <View style={{alignItems:'center'}}>
                <Text>{t('or login with')}</Text>
            </View>
            <View style={{flexDirection:locale=='en'?'row':'row-reverse', justifyContent:'space-between', paddingHorizontal:width/4, paddingVertical:20, marginBottom:100}}>
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
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Signup