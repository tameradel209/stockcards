import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'

const {width, height} = Dimensions.get('window')

const OffersPackages = (props) =>{
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()
    const [focus, setFocus] = useState(0)
    const [button, setButton] = useState(0)
    const uri='https://res.cloudinary.com/gallarycloud/image/upload/v1611422309/fxh9qz1b7xodj2vszg6p.jpg'

    const Data = [{key:'left'} ,0,1,3,4,5,6,7,8,9, {key:'right'}]

    const scrollX= useRef(new Animated.Value(0)).current
    const itemSize = width*0.75+20
    const spacer = (width-itemSize)/2
    return(
        <View style={{flex:1}}>
            <View  style={{flexDirection:locale=='en'?'row':'row-reverse', backgroundColor:colors.componentBackground, borderRadius:20, margin:10}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={() =>setButton(0)} style={{borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:button==0?colors.backageIcon:'#f2e7ea', margin:5, width:width*0.6, height:height/18}}>
                        <Text style={{color:button!=0?colors.componentText:'white'}}>{t('all')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>setButton(1)} style={{borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:button==1?colors.backageIcon:'#f2e7ea', margin:5, width:width*0.6, height:height/18}}>
                        <Text style={{color:button!=1?colors.componentText:'white'}}>{t('available')}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>setButton(2)} style={{borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:button==2?colors.backageIcon:'#f2e7ea', margin:5, width:width*0.6, height:height/18}}>
                        <Text style={{color:button!=2?colors.componentText:'white'}}>{t('expired')}</Text>
                    </TouchableOpacity>
                </ScrollView>                
            </View>
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
                        <View>
                            <Animated.View style={{margin:10, flex:1, alignItems:'center', justifyContent:'center', borderRadius:20, transform:[{scaleY}]}}>
                                <Image source={require('../../assets/card3.png')} resizeMode='stretch' style={{width:width*0.75, height:height*0.45, borderRadius:20, shadowColor:'#000', shadowOffset:{height:2, width:0}, shadowOpacity:0.1, shadowRadius: 1, elevation: 5}}/>
                            </Animated.View>
                        </View>
                    )
            }}
                keyExtractor={(item) => item}
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

export default OffersPackages