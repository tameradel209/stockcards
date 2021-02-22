import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons, Entypo} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'
import MapView,{Marker} from 'react-native-maps'
import CustomButton from "../components/button";

const {width, height} = Dimensions.get('window')

const ContactUs = (props) =>{

    const {colors} = useTheme()
    const [position, setPosition] = useState({
        "latitude": 24.663848553214375,
        "latitudeDelta": 4.855868184284596,
        "longitude": 46.77289654407499,
        "longitudeDelta": 10.863468557535782,
    })

    return(
        <ScrollView>
            <View style={{backgroundColor:'white', margin:10, padding:10}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{padding:10, borderRightWidth:1, borderColor:colors.bottomBorder}}>
                        <Image source={require('../../assets/address.png')} resizeMode='contain' style={{width:30, height:50}} />
                    </View>
                    <View style={{flex:1, margin:10}}>
                        <Text>ghjkhjrgdgh gfd gdfg fgdfdfg fgfg fghgf hfhf ghfhfgfgkg</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={{padding:10, borderRightWidth:1, borderColor:colors.bottomBorder}}>
                        <Image source={require('../../assets/surface1.png')} resizeMode='contain' style={{width:30, height:50}} />
                    </View>
                    <View style={{flex:1, margin:10}}>
                        <Text>01207350507</Text>
                        <Text>01207350507</Text>
                        <Text>tamer@gmail.com</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={{padding:10, borderRightWidth:1, borderColor:colors.bottomBorder}}>
                        <Image source={require('../../assets/follower.png')} resizeMode='contain' style={{width:30, height:50}} />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{margin:10}}>
                            <Image source={require('../../assets/linkedin1.png')} resizeMode='contain' style={{width:20, height:20}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:10}}>
                            <Image source={require('../../assets/instagram1.png')} resizeMode='contain' style={{width:20, height:20}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:10}}>
                            <Image source={require('../../assets/Twitter1.png')} resizeMode='contain' style={{width:20, height:20}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{margin:10}}>
                            <Image source={require('../../assets/facebook1.png')} resizeMode='contain' style={{width:20, height:20}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{backgroundColor:'white', margin:10}}>
                <View style={{margin:10, borderBottomWidth:1, height:height/18, justifyContent:'center', borderColor:colors.bottomBorder}}>
                    <Text style={{color:'#85314b', fontSize:18}}>address of the company on the map</Text>
                </View>
                <View style={{padding:10}}>
                    <MapView 
                        style={{width:width-40, height:height*0.25}} 
                        initialRegion={position} 
                        onRegionChange={p => setPosition(p)}
                    >
                        <Marker title={'stock cards'} coordinate={position} />
                    </MapView>                    
                </View>
            </View>
            <View style={{margin:10}}>
                <CustomButton title='email us now' style={{width:width-20}} />
            </View>
        </ScrollView>
    )
}

export default ContactUs