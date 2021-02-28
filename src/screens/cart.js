import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList, SectionList} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather, MaterialIcons, Ionicons, MaterialCommunityIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'
import CustomButton from '../components/button'
import { CheckBox } from 'react-native-elements'

const {width, height} = Dimensions.get('window')

const Card = (props) => {
    return(
        <View style={{height:height/8, marginVertical:2, padding:10, backgroundColor:'white', flexDirection:'row', alignItems:'center'}}>
            <Image source={require('../../assets/card1.png')} resizeMode='stretch' style={{height:height/10, width:height/10}} />
            <View style={{margin:5}}>
                <Text style={{color:'#002B2A', marginBottom:5}}>ramadan congratulation</Text>
                <Text  style={{color:'#C43662', marginBottom:5}}>5.00 SR</Text>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={{borderRadius:10, padding:5, backgroundColor:'#ECF4FF', flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name='earth' size={20} color='#102950' />
                        <Text style={{color:'#102950', marginHorizontal:5}}>use cobone for this card</Text>
                    </View>
                    <TouchableOpacity style={{margin:5}}>
                        <Image source={require('../../assets/editicon.png')} resizeMode='contain' style={{width:25, height:25}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{margin:5}}>
                        <Image source={require('../../assets/deleteicon.png')} resizeMode='contain' style={{width:25, height:25}} /> 
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const Card2 = (props) =>{

    const [show, setShow] = useState(false) 
    const [checked, setChecked] = useState(-1)

    return(
        <View style={{backgroundColor:'white'}}>
            <View style={{backgroundColor:'#FFF5F5', margin:10}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{color:'#7C2540', flex:7}}>do you want to use one of your packages</Text>
                    <TouchableOpacity style={{backgroundColor:'#ECD3D3', flex:1, margin:10, alignItems:'center'}} onPress={() => setShow(!show)}>
                        <MaterialIcons name={show?'arrow-drop-down':'arrow-drop-up'} size={26} />
                    </TouchableOpacity> 
                </View>
                {show?
                <View>
                    <CheckBox
                        title='vip package'
                        checked={checked==0}
                        onPress={() => setChecked(checked==0?-1:0)}
                        containerStyle={{padding:0, backgroundColor:'#FFF5F5'}}
                    />
                    <CheckBox
                        title='individual package'
                        checked={checked==1}
                        onPress={() => setChecked(checked==1?-1:1)}
                        containerStyle={{padding:0, backgroundColor:'#FFF5F5'}}
                    />                    
                </View>

                    :null
                }
            </View>
        </View>
    )
}

const Cart = (props) =>{
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()
    const [show, setShow] = useState(false) 
    const [checked, setChecked] = useState(-1)

    const data = [0,1,2,3,4,5,6]

    return(
        <View style={{flex:1}}>
            <View style={{backgroundColor:'white'}}>
                <View style={{margin:10, backgroundColor:'#D9FFE2', padding:10}}>
                    <Text style={{color:'#107827'}}>you are now using code that allows you to buy one free card from avialable cards in the cart</Text>
                </View>
            </View>
            <View style={{padding:10, backgroundColor:'white'}}>
                <Text style={{color:'#7D908D'}}>the number of cards in the cart is 4</Text>
            </View>
            <FlatList 
                data={data}
                renderItem={({item, index}) => <Card />}
                keyExtractor={(item) => item}
                ListFooterComponent={() => <Card2 />}
            />
            <View style={{backgroundColor:colors.componentBackground, flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{justifyContent:'center', margin:10}}>
                    <Text>Payable</Text>
                    <Text>22.00 SR</Text>
                </View>
                <CustomButton onPress={() => props.navigation.navigate('payment')} style={{width:width*0.4, margin:10, backgroundColor:'#EF3C73', height:height*0.05}} title='follow pay process' titleStyle={{color:'white'}} />
            </View>
        </View>
    )
}

export default Cart