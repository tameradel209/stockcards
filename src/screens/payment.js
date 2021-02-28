import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList, SectionList} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather, MaterialIcons, Ionicons, MaterialCommunityIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'
import CustomButton from '../components/button'
import { CheckBox } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'

const {width, height} = Dimensions.get('window')

const Card = (props) => {
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()

    return(
        <View style={{width:width, backgroundColor:'black'}}>
                <View style={{height:height*0.30}} />
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'white', fontSize:16}}>pay with visa card</Text>
                </View>
                <View style={{backgroundColor:'white', borderTopRightRadius:30, borderTopLeftRadius:30, padding:10, paddingTop:20}}>
                    <View style={{margin:10}}>
                        <Text style={{color:'#707070'}}>enter name of card owner  *</Text>
                    </View>
                    <View style={{borderBottomWidth:1, borderColor:colors.bottomBorder, margin:10}}>
                        <TextInput placeholder='enter full name' placeholderTextColor='#002B2A' />
                    </View>
                    <View style={{margin:10}}>
                        <Text style={{color:'#707070'}}>enter number of the card  *</Text>
                    </View>
                    <View style={{borderBottomWidth:1, borderColor:colors.bottomBorder, margin:10}}>
                        <TextInput placeholder='enter full name' placeholderTextColor='#002B2A' />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1}}>
                            <View style={{margin:10}}>
                                <Text style={{color:'#707070'}}>expired date  *</Text>
                            </View>
                            <View style={{borderBottomWidth:1, borderColor:colors.bottomBorder, margin:10}}>
                                <TextInput placeholder='enter expired date' placeholderTextColor='#002B2A' />
                            </View>
                        </View>
                        <View  style={{flex:1}}>
                            <View style={{margin:10}}>
                                <Text style={{color:'#707070'}}>cvv  *</Text>
                            </View>
                            <View style={{borderBottomWidth:1, borderColor:colors.bottomBorder, margin:10}}>
                                <TextInput placeholder='enter cvv number' placeholderTextColor='#002B2A' />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{height:height*0.2, backgroundColor:'white'}} />
        </View>
    )
}

const Card1 = (props) => {
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()

    return(
        <View style={{width:width, backgroundColor:'black'}}>
                <View style={{height:height*0.30}} />
                <View style={{alignItems:'center'}}>
                    <Text style={{color:'white', fontSize:16}}>pay with paypal</Text>
                </View>
                <View style={{backgroundColor:'white', borderTopRightRadius:30, borderTopLeftRadius:30, padding:10, paddingTop:20}}>
                    <View style={{margin:10}}>
                        <Text style={{color:'#707070'}}>nemail  *</Text>
                    </View>
                    <View style={{borderBottomWidth:1, borderColor:colors.bottomBorder, margin:10}}>
                        <TextInput placeholder='enter email' placeholderTextColor='#002B2A' />
                    </View>
                </View>
                <View style={{height:height*0.4, backgroundColor:'white'}} />
        </View>
    )
}

const Payment = (props) =>{
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()
    const scrollX= useRef(new Animated.Value(0)).current
    const scrollX1= useRef(new Animated.Value(0)).current

    const data = [{key:'left', id:0} ,{id:1},{id:2},{id:3}, {key:'right', id:4}]
    const itemSize = width*0.7
    const spacer = (width-itemSize)/2

    const translateX = scrollX.interpolate({
        inputRange:[0, itemSize],
        outputRange:[0, -width]
    })

    return(
        <View style={{flex:1}}>
            <Animated.ScrollView 
                bounces={false}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: scrollX1}}}],
                    {useNativeDriver: true}
                )}
            >
                <Animated.View style={{flexDirection:'row', transform:[{translateX}]}}>
                    <Card />
                    <Card />
                    <Card1 />
                </Animated.View>
            </Animated.ScrollView>
            <Animated.FlatList 
                style={{position:'absolute',}}
                data={data}
                renderItem={({item, index}) => {
                    if(item.key){
                        return <View style={{width:spacer, backgroundColor:'black', height:height*0.25}}/>
                    }

                    return(
                        <Animated.View style={{backgroundColor:'black', alignItems:'center', height:height*0.25, width:width*0.7}}>
                            <Image source={require('../../assets/paycard.png')} resizeMode='contain' style={{width:width*0.7, height:height*0.25}} />
                        </Animated.View>
                )}}
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
            <View style={{backgroundColor:colors.componentBackground, flexDirection:'row', justifyContent:'space-between', width:width, position:'absolute', bottom:0}}>
                <View style={{justifyContent:'center', margin:10}}>
                    <Text>Payable</Text>
                    <Text>22.00 SR</Text>
                </View>
                <CustomButton onPress={() => props.navigation.navigate('congrats')} style={{width:width*0.4, margin:10, backgroundColor:'#EF3C73', height:height*0.05}} title='confirm pay process' titleStyle={{color:'white'}} />
            </View>
        </View>
    )
}

export default Payment