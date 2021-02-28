import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, Button, ScrollView, Image, StyleSheet, FlatList, PanResponder} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'
import CustomButton from '../components/button'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

const {width, height} = Dimensions.get('window')

const Card = (props) =>{

    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()
    return(
        <View style={{marginTop:10, backgroundColor:'white'}}>
            <View style={{margin:10}}>
                <Text style={{color:colors.headerText}}>{props.title}</Text>
            </View>
            <View style={{flexWrap:'wrap', margin:10, flexDirection:'row'}}>
                {props.data.map((item, index) =>(
                    <TouchableOpacity onPress={() =>props.setAction(item.id)} style={{borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:props.action==item.id?colors.backageIcon:'#fff3f7', margin:5, paddingHorizontal:30, paddingVertical:8}}>
                        <Text style={{color:props.action!=item.id?colors.headerText:'white'}}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const Card1 = (props) =>{

    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()

    return(
        <View style={{marginTop:10, backgroundColor:'white'}}>
            <View style={{margin:10}}>
                <Text style={{color:colors.headerText}}>{props.title}</Text>
            </View>
            <View style={{flexWrap:'wrap', margin:10, flexDirection:'row', backgroundColor:''}}>
                {props.data.map((item, index) =>(
                    <TouchableOpacity onPress={() => props.setColor(item.color)} style={{margin:5}}>
                        <View style={{borderWidth: item.color==props.color?1:0, width:30, height:30, borderRadius:15, borderColor:item.color=='#ffffff'?'gray':item.color, padding:3}}>
                            <View style={{backgroundColor:item.color, flex:1, borderRadius:15, borderWidth:item.color=='#ffffff'?1:0, borderColor:'gray'}} />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const SectorFilter = (props) =>{
    const [type, setType] = useState(0)
    const [sector, setSector] = useState(0)
    const [occasion, setOccasion] = useState(0)
    const [color, setColor] = useState('black')
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()

    const data = [
        {id:0, name:'special'},
        {id:1, name:'free'},
        {id:2, name:'inter'},
        {id:3, name:'junt'},
        {id:4, name:'fun'}
    ]

    const data1 = [
        {id:0, color:'#000000'},
        {id:1, color:'#ffffff'},
        {id:2, color:'#e6b000'},
        {id:3, color:'#7dd616'},
        {id:4, color:'#8144e6'}
    ]

    const slider1 = useRef(new Animated.Value(0)).current
    const slider2 = useRef(new Animated.Value(50)).current
    const panResponder1 = useRef(PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            slider1.setOffset(slider1._value)
          },
        onPanResponderMove:(e, g) =>{
            slider1.setValue(g.dx)
        },
        onPanResponderRelease: () => {
            slider1.flattenOffset()
        }
    })).current

    const diffClap = Animated.diffClamp(slider1,0, 200)


    return(
        <ScrollView>
            <Card title='type' setAction={setType} action={type} data={data} />
            <Card title='sector' setAction={setSector} action={sector} data={data} />
            <Card title='occasion' setAction={setOccasion} action={occasion} data={data} />
            <Card1 title='color' setColor={setColor} color={color} data={data1} />
            <View style={{margin:10, alignItems:'center'}}>
                <View style={{flexDirection:'row', width:width*0.5, backgroundColor:'#707070', height:5, alignItems:'center'}}>
                    <Animated.View {...panResponder1.panHandlers} style={{width:20, height:20, borderRadius:10, backgroundColor:colors.backageIcon, transform:[{translateX:diffClap}]}} />
                    <Animated.View style={{width:10, height:10, borderRadius:5, backgroundColor:colors.backageIcon}} />
                </View>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'white', paddingVertical:20}}>
                <CustomButton title='view results' />
            </View>
        </ScrollView>
    )
}

export default SectorFilter