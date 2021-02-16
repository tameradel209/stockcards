import React, {useContext, useState, useEffect} from 'react'
import {View, Text, Dimensions, TouchableOpacity, ScrollView, Image, StyleSheet, TextInput, Modal} from 'react-native'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import {LocalizationContext} from '../context/langContext'
import {useTheme} from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import CustomButton from "../components/button";

const {width, height} = Dimensions.get('window')

const Password = (props) =>{ 

    const {t, locale} = useContext(LocalizationContext)
    const {colors} = useTheme()

    return(
        <ScrollView>
            <View style={{height:height/2}}>
                <Image source={require('../../assets/passwordbg.png')} resizeMode='stretch' style={{width:width, height:height/2}} />
                <View style={{position:'absolute', bottom:80, padding:10, alignItems:locale=='en'?'flex-start':'flex-end', width:width}}>
                    <Text style={{textAlign:locale=='en'?'left':'right', fontSize:18, fontWeight:'bold', color:'#fff'}}>{t('password reset')}</Text>
                </View>
                <View style={{alignItems:locale=='en'?'flex-start':'flex-end', padding:10, position:'absolute', bottom:70, width:width}}>
                    <View style={{width:width/5, borderWidth:1.5, borderColor:colors.backageIcon, backgroundColor:colors.backageIcon}} />
                </View>
                <View style={{position:'absolute', bottom:20, padding:10, alignItems:locale=='en'?'flex-start':'flex-end', width:width}}>
                    <Text style={{textAlign:locale=='en'?'left':'right', fontSize:18, color:'#fff'}}>{t('you can reset your password if you are facing a problem while login')}</Text>
                </View>
            </View>
            <View style={{padding:10, alignItems:locale=='en'?'flex-start':'flex-end', width:width}}>
                <Text style={{textAlign:locale=='en'?'left':'right', fontSize:18, color:'#572c3a'}}>{t('enter your email to reset your password')}</Text>
            </View>
            <View style={{padding:10, marginTop:20, alignItems:locale=='en'?'flex-start':'flex-end', width:width}}>
                <Text style={{textAlign:locale=='en'?'left':'right', color:'#002b2a'}}>{t('phrase2')}</Text>
            </View>
            <View style={{paddingHorizontal:10, alignItems:locale=='en'?'flex-start':'flex-end', width:width}}>
                <Text style={{textAlign:locale=='en'?'left':'right', color:'#002b2a'}}>support @company.com</Text>
            </View>
            <View style={{paddingVertical:20, alignItems:locale=='en'?'flex-start':'flex-end'}}>
                <View style={{marginHorizontal:10, justifyContent:'center'}}>
                    <Text style={{color:colors.nameText}}>{t('email')}</Text>
                </View>
                <View style={{marginBottom:10,marginHorizontal:5, padding:5, justifyContent:'center', borderBottomWidth:1, borderColor:colors.bottomBorder, width:width-20}}>
                    <TextInput placeholder={t('enter email')} textAlign={locale=='en'?'left':'right'} />
                </View>
            </View>
            <View style={{alignItems:'center', margin:10}}>
                <CustomButton onPress={() => null} style={{backgroundColor:colors.backageIcon}} title={t('login')} titleStyle={{color:'#ffffff'}}/>
            </View>
        </ScrollView>
    )
}

export default Password