import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, useWindowDimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList, KeyboardAvoidingView} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'
import { TextInput } from 'react-native-gesture-handler'
import CustomButton from '../components/button'

const {width, height} = Dimensions.get('window')

const CardSize = (props) =>{
    const [screen, setScreen] = useState(0)
    const {colors} = useTheme()

    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
        <View style={{flex:1}}>
            {screen !=5 ?
                <View style={{alignItems:'center', margin:10,}}>
                    <Text style={{color:'#85314B', fontSize:18, fontWeight:'bold', margin:5}}>facebook post</Text>
                    <Text style={{fontWeight:'bold'}}>940*788</Text>
                </View>
            :null
            }
                {screen == 0 ?
                    <View style={{justifyContent:'center', alignItems:'center', padding:10}}>
                        <Image source={require('../../assets/grid1.png')} resizeMode='stretch' style={{width:width*0.8, height:height*0.28}} />
                    </View>
                :screen == 1 ?
                    <View style={{justifyContent:'center', alignItems:'center', padding:10}}>
                        <Image source={require('../../assets/grid1.png')} resizeMode='stretch' style={{width:width*0.6, height:height*0.42}} />
                    </View>
                :screen == 2 ?
                    <View style={{justifyContent:'center', alignItems:'center', padding:10}}>
                        <Image source={require('../../assets/grid1.png')} resizeMode='stretch' style={{width:width*0.8, height:height*0.32}} />
                    </View>
                :screen == 5 ?
                    <View style={{}}>
                        <View style={{alignItems:'center', margin:5}}>
                            <Text style={{color:'#85314B', fontSize:18, fontWeight:'bold'}}>define card size</Text>
                        </View>
                        <View style={{margin:10}}>
                            <Text>height</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <TextInput  placeholder='pixel' style={{width:width*0.9, height:40, padding:10, backgroundColor:'white'}}/>
                        </View>
                        <View style={{margin:10}}>
                            <Text>width</Text>
                        </View>
                        <View style={{alignItems:'center'}}>
                            <TextInput  placeholder='pixel' style={{width:width*0.9, height:40, padding:10, backgroundColor:'white'}}/>
                        </View>
                    </View>
                :null
                }
            <View style={{justifyContent:'flex-end', flex:1}}>
                <ScrollView horizontal>
                    <View style={{alignItems:'flex-end', flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => setScreen(0)}>
                            <Image source={require('../../assets/instaLandscape.png')} style={{width:98, height:56}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setScreen(1)}>
                            <Image source={require('../../assets/instastory.png')} style={{width:73, height:94}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setScreen(0)}>
                            <Image source={require('../../assets/fbcover.png')} style={{width:97, height:56}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setScreen(1)}>
                            <Image source={require('../../assets/fbpost.png')} style={{width:73, height:94}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setScreen(2)}>
                            <Image source={require('../../assets/fbpost1.png')} style={{width:97, height:74}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setScreen(5)}>
                            <Image source={require('../../assets/Size.png')} style={{width:98, height:74}}/>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <View style={{backgroundColor:colors.componentBackground}}>
                <CustomButton title='save and follow' style={{backgroundColor:colors.backageIcon, width:width*0.4, height:height*0.06, margin:5}} titleStyle={{color:'white'}} />
            </View>
        </View>
        </KeyboardAvoidingView>
    )
}

export default CardSize