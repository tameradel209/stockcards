import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'

const {width, height} = Dimensions.get('window')

const Card = (props) => {

    const uri='https://res.cloudinary.com/gallarycloud/image/upload/v1611422309/fxh9qz1b7xodj2vszg6p.jpg'

    return(
        <View style={{margin:10, width:width*0.75, height:height*0.75, backgroundColor:'red'}}>
            <Image source={require('../../assets/Banner.png')} resizeMode='stretch' style={{width:width*0.75, height:height*0.75}}/>
        </View>
    )
}

const Occasions = (props) =>{

    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()
    const uri='https://res.cloudinary.com/gallarycloud/image/upload/v1611422309/fxh9qz1b7xodj2vszg6p.jpg'

    const Data = [{key:'left', id:0} ,{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}, {key:'right', id:8}]

    const scrollX= useRef(new Animated.Value(0)).current
    const itemSize = width*0.75+20
    const spacer = (width-itemSize)/2
    return(
        <View style={{flex:1}}>
            <Animated.FlatList 
            style={{paddingVertical:0}}
                data={Data}
                renderItem={({item, index}) => {
                    const inputRange = [
                        (index-2)*itemSize,
                        (index-1)*itemSize,
                        index*itemSize
                    ]
                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange:[0, -50, 0]
                    })
                    const scaleY = scrollX.interpolate({
                        inputRange,
                        outputRange:[1, 1.5, 1]
                    })
                    const scaleX = scrollX.interpolate({
                        inputRange,
                        outputRange:[1, 1.2, 1]
                    })

                    if(item.key){
                        return <View style={{width:spacer}}/>
                    }
                    return(
                        <TouchableOpacity onPress={() => props.navigation.navigate('occasion')}>
                            <Animated.View style={{margin:10, flex:1, alignItems:'center', justifyContent:'center', borderRadius:20, transform:[{scaleY}]}}>
                                <Image source={require('../../assets/card1.png')} resizeMode='stretch' style={{width:width*0.75, height:height*0.45, borderRadius:20, shadowColor:'#000', shadowOffset:{height:2, width:0}, shadowOpacity:0.1, shadowRadius: 1}}/>
                            </Animated.View>
                            <View style={{justifyContent:'center', alignItems:'center', marginBottom:20}}>
                                <Text style={{color:colors.headerText}}>congratulated cards</Text>
                                <Text style={{color:colors.headerText, fontWeight:'bold', fontSize:16}}>eid el fetr el mobarak</Text>
                            </View>
                        </TouchableOpacity>
                    )
            }}
                keyExtractor={(item) => item.id}
                horizontal
                decelerationRate={0}
                bounces={false}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: true}
                )}
                scrollEventThrottle={16}
                snapToInterval={itemSize}
            />
        </View>
    )
}

export default Occasions