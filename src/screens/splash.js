import React, {useContext, useState, useEffect} from 'react'
import {View, Text, Dimensions, TouchableOpacity, ScrollView, Image, StyleSheet, TextInput, Modal} from 'react-native'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import {LocalizationContext} from '../context/langContext'
import {useTheme} from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import CustomButton from "../components/button";

const {width, height} = Dimensions.get('window')

const Splash = (props) =>{

    const {t, locale} = useContext(LocalizationContext)
    const {colors} = useTheme()

    return(
        <View style={{flex:1, backgroundColor:'#260f17'}}>
            <View style={{flex:8, justifyContent:'flex-end', alignItems:'center'}}>
                <Image source={require('../../assets/logo.png')} resizeMode='contain' style={{width:width/3*2, height:height/6}} />
            </View>
            <View style={{flex:4, alignItems:'center', justifyContent:'flex-end'}}>
                <CustomButton onPress={() => props.navigation.navigate('login')} title={t('login')} style={{backgroundColor:colors.backageIcon}} titleStyle={{color:'#ffffff'}} />
            </View>
            <View style={{flex:2, alignItems:'center', justifyContent:'center'}}>
                <CustomButton onPress={() => props.navigation.navigate('signup')} title={t('create a new account')} style={{backgroundColor:'#ffffff'}}/>
            </View>
            <View style={{flex:2, alignItems:'center'}}>
                <TouchableOpacity onPress={() => props.navigation.navigate('bottomNavigator')}>
                    <Text style={{color:'#ffffff'}}>{t('continue without login')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Splash