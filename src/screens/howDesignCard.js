import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Button, Animated, ScrollView, Image, StyleSheet, FlatList, PickerIOSComponent} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'
import { Video, AVPlaybackStatus } from 'expo-av'

const {width, height} = Dimensions.get('window')

const Card = (props) =>{

    const [status, setStatus] = useState({})
    const {colors} = useTheme()

    return(
        <View style={{backgroundColor:'white', margin:10}}>
            <View style={{margin:10}}>
                <Video
                    style={{width:width-40, height:height/3, borderRadius:20}}
                    source={{
                    uri: props.uri,
                    }}
                    isLooping
                    useNativeControls
                    resizeMode="contain"
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </View>
            <View style={{margin:10, flexDirection:'row', alignItems:'center'}}>
                <Image source={require('../../assets/video1.png')} resizeMode='contain' style={{width:30, height:30}} />
                <Text style={{marginHorizontal:10, color:colors.headerText, fontSize:16}}>{props.value}</Text>
            </View>
        </View>
    )
}

const HowDesignCard = (props) =>{

    const video = useRef(null);
    
    const {colors} = useTheme()

    return(
        <ScrollView>
            <Card uri={'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'} value={'learn how to design your card'} />
            <Card uri={'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'} value={'learn how to design your card'} />
            <Card uri={'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'} value={'learn how to design your card'} />
        </ScrollView>
    )
}

export default HowDesignCard