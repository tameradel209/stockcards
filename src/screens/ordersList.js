import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons, AntDesign} from 'react-native-vector-icons'
import CustomButton from "../components/button";
import * as Animatable from 'react-native-animatable'

const {height, width} = Dimensions.get('window')

const Card = (props) =>{

    const {colors} = useTheme()
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const uri='https://res.cloudinary.com/gallarycloud/image/upload/v1611422309/fxh9qz1b7xodj2vszg6p.jpg'

    return(
        <Animatable.View animation={'lightSpeedIn'} delay={500} style={{height:height/7*2, backgroundColor:'white', margin:10}}>
            <View style={{flex:1, borderBottomWidth:1, borderColor:colors.bottomBorder, marginHorizontal:10, justifyContent:'center', alignItems:locale=='en'?'flex-start':'flex-end'}}>
                <Text style={{fontWeight:'bold', fontSize:16, color:colors.componentText}}>eid el adha card</Text>
            </View>
            <View style={{flexDirection:locale=='en'?'row':'row-reverse', flex:3}}>
                <View style={{flex:1, margin:10, alignItems:'center', justifyContent:'center'}}>
                    <Image source={{uri}} style={{height:100, width:100, borderRadius:10}} />
                </View>
                <View style={{flex:1, margin:10, justifyContent:'space-between', alignItems:locale=='en'?'flex-start':'flex-end'}}>
                    <Text style={{fontWeight:'bold', color:colors.nameText}}>{t('remain cards')}:</Text>
                    <Text style={{fontWeight:'bold', color:colors.nameText}}>{t('purchase date')}:</Text>
                    <Text style={{fontWeight:'bold', color:colors.nameText}}>{t('card status')}:</Text>
                    <Text style={{fontWeight:'bold', color:colors.nameText}}>{t('price')}:</Text>
                </View >
                <View style={{flex:1, margin:10, justifyContent:'space-between', alignItems:locale=='en'?'flex-start':'flex-end'}}>
                    <Text style={{color:colors.nameText}}>purchase date:</Text>
                    <Text style={{color:colors.nameText}}>purchase date:</Text>
                    <Text style={{color:colors.nameText}}>purchase date:</Text>
                    <Text style={{color:colors.nameText}}>purchase date:</Text>
                </View>
            </View>
            <View style={{flex:1, flexDirection:locale=='en'?'row':'row-reverse', justifyContent:'space-between', margin:10, borderTopWidth:1, borderTopColor:colors.bottomBorder, alignItems:'center'}}>
                <TouchableOpacity style={{flexDirection:'row', backgroundColor:'#26d48d', borderRadius:20, padding:5, height:30, width:130, justifyContent:'center'}}>
                    <Text style={{color:'white'}}>{t('download card')}</Text>
                    <AntDesign name='clouddownloado' size={20} color='white' style={{marginHorizontal:5}} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/Delete.png')} style={{width:30, height:30}} />
                </TouchableOpacity>
            </View>
        </Animatable.View>
    )
}

const OrdersList = (props) => {

    const {colors} = useTheme()
    const {t, locale, setLocale} = useContext(LocalizationContext)

    const uri='https://res.cloudinary.com/gallarycloud/image/upload/v1611422309/fxh9qz1b7xodj2vszg6p.jpg'

    const data = [0,1,2,3,4,5,6]

    return(
        <FlatList 
            data={data}
            renderItem={({item, index}) => <Card key={index} />}
            keyExtractor={(item) => item}
        />
    )
}

export default OrdersList