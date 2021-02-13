import React, {useContext, useRef, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {LocalizationContext} from '../../App'
import {useTheme, useFocusEffect} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons} from 'react-native-vector-icons'

const {width, height} = Dimensions.get('window')

const MyPackages = (props) =>{

    const position = useRef(new Animated.ValueXY()).current
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()

    useFocusEffect(useCallback(
        () =>{
            position.x.setValue(0)
            //filter the packages to all
          }, [locale]
    ))

    const move = (x,y) => {
        if(locale=='en'){
            Animated.spring(position, {
            toValue: {x, y},
            speed: 10,
            useNativeDriver:true,
            bounciness:15,
            }).start();            
        }
        else{
            Animated.spring(position, {
                toValue: {x:-x, y},
                speed: 10,
                useNativeDriver:true,
                bounciness:15,
                }).start();  
        }

      }

      const rotate = position.x.interpolate({
        inputRange:[0,width/4+((width-(3/4*width)-10)/3)],
        outputRange:['0deg','180deg']
        })

    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:locale=='en'?'row':'row-reverse', justifyContent:'space-around', margin:5, backgroundColor:colors.componentBackground, borderRadius:20}}>
                <Animated.View style={{position:'absolute', width:width/4, height:height/18, borderRadius:100, backgroundColor:colors.backageIcon, transform:[{translateX:position.x}, {translateY:position.y}, {rotate}]}} />
                <TouchableOpacity onPress={() =>move(0,0)} style={{width:width/4, height:height/18, borderRadius:20, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:colors.componentText}}>{t('all')}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>move(width/4+((width-(3/4*width)-10)/3),0)} style={{width:width/4, height:height/18, borderRadius:20, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:colors.componentText}}>{t('available')}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>move(width/4*2+((width-(3/4*width)-10)/3*2),0)} style={{width:width/4, height:height/18, borderRadius:20, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{color:colors.componentText}}>{t('expired')}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={{height:height/4, backgroundColor:'white', margin:10}}>
                    <View style={{flex:1}}>
                        <View style={{flex:1, flexDirection:locale=='en'?'row':'row-reverse', alignItems:'center', borderBottomWidth:1, margin:5, paddingVertical:5, borderBottomColor:colors.bottomBorder}}>
                            <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:4}}>
                                <Text style={{color:colors.icon, fontWeight:'bold'}}>masia package</Text>                                
                            </View>
                            <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:6}}>
                            <Text>(companies package)</Text>
                            </View>
                            <Feather style={{flex:1}} name='settings' size={26} color={colors.gray} />
                            <MaterialCommunityIcons style={{flex:1}}  name='dots-vertical' size={26} color={colors.gray} />
                        </View>
                        <View style={{flex:4, justifyContent:'space-around', margin:5}}>
                            <View style={{flexDirection:locale=='en'?'row':'row-reverse'}}>
                                <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:4}}>
                                    <Text style={{color:colors.nameText, fontWeight:'bold'}}>{t('remain cards')}:</Text>
                                </View>
                                <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:7}}>
                                    <Text>2 cards</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:locale=='en'?'row':'row-reverse'}}>
                                <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:4}}>
                                    <Text style={{color:colors.nameText, fontWeight:'bold'}}>{t('purchase date')}:</Text>
                                </View>
                                <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:7}}>
                                    <Text>13 october 2020</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:locale=='en'?'row':'row-reverse'}}>
                                <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:4}}>
                                    <Text style={{color:colors.nameText, fontWeight:'bold'}}>{t('package status')}:</Text>
                                </View>
                                <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:7}}>
                                    <Text>available</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:locale=='en'?'row':'row-reverse'}}>
                                <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:4}}>
                                    <Text style={{color:colors.nameText, fontWeight:'bold'}}>{t('package price')}:</Text>
                                </View>
                                <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:7}}>
                                    <Text>2 RE</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default MyPackages