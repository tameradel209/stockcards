import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'

const {width, height} = Dimensions.get('window')

const Card  = (props) =>{

    const {colors} = useTheme()

    return(
        <View style={{backgroundColor:'white', margin:10,}}>
            <View style={{margin:10, borderBottomWidth:1, height:height/18, justifyContent:'center', borderColor:colors.bottomBorder}}>
                <Text style={{color:'#85314b', fontWeight:'bold', fontSize:18}}>{props.title}</Text>
            </View>
            <View style={{margin:10, paddingBottom:10}}>
                <Text style={{color:'#5a5a5a'}}>{props.value}</Text>
            </View>
        </View>
    )
}

const AboutApp = (props) =>{
    return(
        <ScrollView>
            <Card title='who us' value='bjv,bnmcvbcbvmcghf hjkl hjkl ghjk ghjk ghjl gj lgjk gljkbncm'/>
            <Card title='our vision' value='bjv,bnmcvbcbvmcbncm'/>
            <Card title='our goal' value='bjv,bnmcvbcbvmcbncm'/>
        </ScrollView>
    )
}

export default AboutApp