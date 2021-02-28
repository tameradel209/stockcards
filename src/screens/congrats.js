import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList, SectionList} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather, MaterialIcons, MaterialCommunityIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'
import CustomButton from '../components/button'

const {width, height} = Dimensions.get('window')

const Congrats = (props) =>{

    const {colors} = useTheme()

    return(
        <View style={{ backgroundColor:'white', flex:1}}>
            <View style={{height:height*0.5, justifyContent:'flex-end', alignItems:'center'}}>
                <Image source={require('../../assets/congrats.png')} resizeMode='contain' style={{width:width*0.8, height:height*0.3}} />
            </View>
            <View style={{alignItems:'center', height:height*0.15, justifyContent:'flex-end'}}>
                <Text style={{margin:10, color:'#C43662', fontSize:18}}>purchase successfully done</Text>
                <Text style={{margin:10, color:'#002B2A', fontSize:18}}>card has been added to your wallet</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <CustomButton style={{backgroundColor:'#EF3C73', margin:5}} titleStyle={{color:'white'}} title='download the card'/>
                <CustomButton style={{backgroundColor:'#D4A72E', margin:5}}  titleStyle={{color:'white'}} title='express your opinion' />
            </View>
        </View>
    )
}

export default Congrats