import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList, SectionList} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather, MaterialIcons, MaterialCommunityIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'

const {width, height} = Dimensions.get('window')

const List = (props) =>{
    const {colors} = useTheme()

    return(
        <View style={{margin:5, marginHorizontal:10}}>
            <TouchableOpacity onPress={() => props.setList(props.list==props.index?-1:props.index)} style={{flexDirection:'row', justifyContent:'space-between', padding:10, alignItems:'center', backgroundColor:'white', height:height/15 }}>
                <Text style={{color:props.list==props.index?'#85314b':'#000'}}>{props.title}</Text>
                <MaterialIcons name={props.list==props.index?'arrow-drop-down':'arrow-drop-up'} size={26} />
            </TouchableOpacity>
            {props.list==props.index?
            <View style={{backgroundColor:'white' }}>
                <View style={{borderTopWidth:1, margin:10, borderColor:colors.bottomBorder}}>
                    <Text  style={{color:'#5a5a5a'}}>{props.value}</Text>
                </View>                
            </View>

            :
            null                
            }
        </View>
    )
} 

const CommonQuestions = (props) =>{

    const [list, setList]= useState(-1)
    const {colors} = useTheme()
    const data = [0,1,2,3,4,5,6]
    return(
        <View>
            <FlatList 
                data={data}
                renderItem={({item, index}) => <List title='conditions' value='lkjljk' setList={setList} list={list} key={item} index={item} />}
                keyExtractor={(item) => item}
            />
        </View>
    )
}

export default CommonQuestions