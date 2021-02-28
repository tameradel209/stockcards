import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'

const {width, height} = Dimensions.get('screen')

const Card = (props) =>{

    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()
    const uri='https://res.cloudinary.com/gallarycloud/image/upload/v1611422309/fxh9qz1b7xodj2vszg6p.jpg'

    return(
        <Animatable.View animation='flipInY' delay={200} style={{margin:5, alignItems:locale=='en'? 'flex-start': 'flex-end'}}>
            <TouchableOpacity onPress={props.onPress}>
                <View>
                    <Image source={{uri:props.uri}} style={[{height:width/2-10, width:width/2-10, }, locale=='en'? {borderBottomRightRadius:25}: {borderBottomLeftRadius:25}]}/>
                </View>
                <View>
                    <Text style={{fontSize:18}}>{props.name}</Text>
                </View>
                <View style={{flexDirection:locale=='en' ?'row': 'row-reverse'}}>
                    <Text style={{color:colors.componentText}}>{props.price}</Text>
                    <Text style={{textDecorationLine:'line-through', marginHorizontal:20, color:'gray'}}>{props.originalPrice}</Text>
                </View>
                {props.patch}
            </TouchableOpacity>
        </Animatable.View>
    )
}

export default Card