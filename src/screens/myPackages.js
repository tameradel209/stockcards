import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {LocalizationContext} from '../../App'
import {useTheme, useFocusEffect} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons} from 'react-native-vector-icons'

const {width, height} = Dimensions.get('window')


const Package = (props) =>{

    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()

    return(
        <View style={{height:height/4, backgroundColor:'white', margin:10}}>
            <View style={{flex:1}}>
                <View style={{flex:1, flexDirection:locale=='en'?'row':'row-reverse', alignItems:'center', borderBottomWidth:1, margin:5, paddingVertical:5, borderBottomColor:colors.bottomBorder}}>
                    <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:4}}>
                        <Text style={{color:colors.icon, fontWeight:'bold'}}>masia package</Text>                                
                    </View>
                    <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:6}}>
                    <Text>(companies package)</Text>
                    </View>
                    <Feather onPress={() => props.navigation.navigate('packageManagement')} style={{flex:1}} name='settings' size={26} color={colors.gray} />
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
                        <View style={{alignItems:locale=='en'?'flex-start':'flex-end', paddingVertical:5, flex:4}}>
                            <Text style={{color:colors.nameText, fontWeight:'bold'}}>{t('package status')}:</Text>
                        </View>
                        <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:7, justifyContent:'center'}}>
                            <View style={{paddingHorizontal:10, paddingVertical:5, backgroundColor:true?'#d7fedc':'#fed7d7', borderRadius:20}}>
                                <Text>available</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:locale=='en'?'row':'row-reverse'}}>
                        <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:4}}>
                            <Text style={{color:colors.nameText, fontWeight:'bold'}}>{t('package price')}:</Text>
                        </View>
                        <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:7}}>
                            <Text>2 SR</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const Header = (props) =>{

    const position = useRef(new Animated.ValueXY()).current
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()
    const [focus, setFocus] = useState(0)

    useFocusEffect(useCallback(
        () =>{
            position.x.setValue(0)
            //filter the packages to all
          }, [locale]
    ))

    const move = (x, y, focused) => {
        Animated.spring(position, {
            toValue: {x:locale=='en'?x:-x, y},
            speed: 10,
            useNativeDriver:true,
            bounciness:15,
            }).start();
        setFocus(focused)
      }

      const rotate = position.x.interpolate({
        inputRange:[0,width/4+((width-(3/4*width)-10)/3)],
        outputRange:['0deg','180deg']
        })

    return(
        <View style={{flexDirection:locale=='en'?'row':'row-reverse', justifyContent:'space-around', margin:5, backgroundColor:colors.componentBackground, borderRadius:20}}>
            <Animated.View style={{position:'absolute', width:width/4, height:height/18, borderRadius:100, backgroundColor:colors.backageIcon, transform:[{translateX:position.x}, {translateY:position.y}, {rotate}]}} />
            <TouchableOpacity onPress={() =>{move(0, 0, 0)}} style={{width:width/4, height:height/18, borderRadius:20, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:focus!=0?colors.componentText:'white'}}>{t('all')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>move(width/4+((width-(3/4*width)-10)/3), 0, 1)} style={{width:width/4, height:height/18, borderRadius:20, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:focus!=1?colors.componentText:'white'}}>{t('available')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>move(width/4*2+((width-(3/4*width)-10)/3*2), 0, 2)} style={{width:width/4, height:height/18, borderRadius:20, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:focus!=2?colors.componentText:'white'}}>{t('expired')}</Text>
            </TouchableOpacity>
        </View>
    )
}

const MyPackages = (props) =>{

    const position = useRef(new Animated.ValueXY()).current
    const {t, locale, setLocale} = useContext(LocalizationContext)

    const data = [0,1,2,3,4,5,6,7,8,9]

    return(
        <View style={{flex:1}}>
            <Header />
            <FlatList 
                data={data}
                renderItem={({item, index}) => <Package key={index} navigation={props.navigation} />}
                keyExtractor={({item}) => item}
            />
        </View>
    )
}

export default MyPackages