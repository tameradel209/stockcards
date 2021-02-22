import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'

const {width, height} = Dimensions.get('window')

const Card = (props) =>{
    const {colors} = useTheme()

    return(
        <TouchableOpacity onPress={() => props.setLang(props.index)} style={{padding:10, paddingVertical:15, backgroundColor:'white', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{color:colors.nameText, fontSize:16}}>{props.title}</Text>
            <View style={{width:20, height:20, borderRadius:10, borderWidth:1, padding:2, borderColor:props.lang==props.index?colors.backageIcon:'#d2d2d2'}}>
                <View style={{backgroundColor:props.lang==props.index?colors.backageIcon:'#d2d2d2', flex:1, borderRadius:10,}} />
            </View>
        </TouchableOpacity>
    )
}

const Card1 = (props) =>{
    const {colors} = useTheme()

    return(
        <TouchableOpacity onPress={() => props.setLang(props.index)} style={{padding:10, backgroundColor:'white', flexDirection:'row'}}>
            <View style={{margin:10}}>
                <Image source={props.uri} resizeMode='contain' style={{width:20, height:20}} />
            </View>
            <View style={{margin:10}}>
                <Text style={{color:colors.nameText, fontSize:16}}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Settings = (props) =>{

    const {colors} = useTheme()
    const [lang, setLang] = useState(0)
    const [currency, setCurrency] = useState(0)

    return(
        <ScrollView>
            <View style={{margin:10,}}>
                <View style={{padding:10, paddingVertical:20, backgroundColor:colors.componentBackground}}>
                    <Text style={{fontWeight:'bold'}}>language</Text>
                </View>
                <Card lang={lang} setLang={setLang} title={'arabic language'} index={0} />
                <Card lang={lang} setLang={setLang} title={'english language'} index={1} />
            </View>

            <View style={{margin:10,}}>
                <View style={{padding:10, paddingVertical:20, backgroundColor:colors.componentBackground}}>
                    <Text style={{fontWeight:'bold'}}>currency</Text>
                </View>
                <Card lang={currency} setLang={setCurrency} title={'SR saudi'} index={0} />
                <Card lang={currency} setLang={setCurrency} title={'$ USA'} index={1} />
                <Card lang={currency} setLang={setCurrency} title={'EG egypt'} index={2} />
                <Card lang={currency} setLang={setCurrency} title={'dinar KWD'} index={3} />
            </View>

            <View style={{margin:10,}}>
                <View style={{padding:10, paddingVertical:20, backgroundColor:colors.componentBackground}}>
                    <Text style={{fontWeight:'bold'}}>share</Text>
                </View>
                <Card1 uri={require('../../assets/facebook2.png')} title={'facebook'} index={0} />
                <Card1 uri={require('../../assets/messenger2.png')} title={'facebook'} index={0} />
                <Card1 uri={require('../../assets/twitter2.png')} title={'facebook'} index={0} />
            </View>
        </ScrollView>
    )
}

export default Settings