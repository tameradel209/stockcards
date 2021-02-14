import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList, Switch} from 'react-native'
import {LocalizationContext} from '../../App'
import {useTheme, useFocusEffect} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons, AntDesign} from 'react-native-vector-icons'
import CustomButton from "../components/button";
import * as Animatable from 'react-native-animatable'

const {height, width} = Dimensions.get('window')

const Card = (props) =>{

    const [notify, setNotify] = useState(true)
    const {colors} = useTheme()
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const uri='https://res.cloudinary.com/gallarycloud/image/upload/v1611422309/fxh9qz1b7xodj2vszg6p.jpg'

    return(
        <Animatable.View animation={'tada'} delay={500} style={{height:height/4, backgroundColor:'white', margin:10}}>
            <View style={{flex:1, flexDirection:locale=='en'?'row':'row-reverse', borderBottomWidth:1, borderColor:colors.bottomBorder, marginHorizontal:10, alignItems:'center', justifyContent:locale=='en'?'flex-start':'flex-end'}}>
                <View style={{flex:8, alignItems:locale=='en'?'flex-start':'flex-end'}}>
                    <Text style={{fontWeight:'bold', fontSize:16, color:colors.componentText}}>eid el adha card</Text>
                </View>
                <Switch
                    style={{flex:1}}
                    value={notify}
                    trackColor={{ false: "#c7c7c7", true: "#4ac37e" }}
                    thumbColor={"#ffffff"}
                    onValueChange={(value) => setNotify(value)}>
                </Switch>
                <MaterialCommunityIcons style={{flex:1}}  name='dots-vertical' size={26} color={colors.gray} />
            </View>
            <View style={{flexDirection:locale=='en'?'row':'row-reverse', flex:3}}>
                <View style={{flex:1, margin:10, alignItems:locale=='en'?'flex-start':'flex-end'}}>
                    <Text style={{fontWeight:'bold', color:colors.nameText, margin:5}}>{t('occasion date')}:</Text>
                    <Text style={{fontWeight:'bold', color:colors.nameText, margin:5}}>{t('notification times')}:</Text>
                </View >
                <View style={{flex:1, margin:10, alignItems:locale=='en'?'flex-start':'flex-end'}}>
                    <Text style={{color:colors.nameText, margin:5}}>purchase date</Text>
                    <Text style={{color:colors.nameText, margin:5}}>purchase date</Text>
                    <Text style={{color:colors.nameText, margin:5}}>purchase date</Text>
                    <Text style={{color:colors.nameText, margin:5}}>purchase date</Text>
                </View>
            </View>
        </Animatable.View>
    )
}

const Notifications = (props) => {

    const {colors} = useTheme()
    const {t, locale, setLocale} = useContext(LocalizationContext)

    const uri='https://res.cloudinary.com/gallarycloud/image/upload/v1611422309/fxh9qz1b7xodj2vszg6p.jpg'

    const data = [0,1,2,3,4,5,6]

    return(
        <FlatList 
            data={data}
            renderItem={({item, index}) => <Card key={index} />}
            keyExtractor={(item) => item}
        />
    )
}

export default Notifications