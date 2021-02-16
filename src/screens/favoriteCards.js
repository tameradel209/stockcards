import React, {useContext} from 'react'
import {View, Text, Dimensions, TouchableOpacity, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import {LocalizationContext} from '../context/langContext'
import {useTheme} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

const {width, height} = Dimensions.get('window')

const Card = (props) =>{

    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()
    const uri='https://res.cloudinary.com/gallarycloud/image/upload/v1611422309/fxh9qz1b7xodj2vszg6p.jpg'

    return(
        <Animatable.View animation='flipInY' delay={200} style={{margin:5, alignItems:locale=='en'? 'flex-start': 'flex-end'}}>
            <View>
                <Image source={{uri}} style={[{height:width/2-10, width:width/2-10, }, locale=='en'? {borderBottomRightRadius:25}: {borderBottomLeftRadius:25}]}/>
            </View>
            <View>
                <Text style={{fontSize:18}}>name of the card</Text>
            </View>
            <View style={{flexDirection:locale=='en' ?'row': 'row-reverse'}}>
                <Text style={{color:colors.componentText}}>5.00 RE</Text>
                <Text style={{textDecorationLine:'line-through', marginHorizontal:20, color:'gray'}}>8.00 RE</Text>
            </View>
            <View style={[{width:30, height:30, borderRadius:15, alignItems:'center', justifyContent:'center', backgroundColor:'white', position:'absolute', top:5}, locale=='en'? {left:5} : {right:5}]}>
                <MaterialCommunityIcons name='cards-heart' size={20} color={colors.icon} />
            </View>
        </Animatable.View>
    )
}

const FavoriteCards = (props) =>{

    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()

    const Data = [0,1,2,3,4,5,6,7,8,9,10,11,12]

    return(
        <FlatList 
            data={Data}
            renderItem={({item, index}) => <Card key={index} />}
            keyExtractor={(item) => item}
            numColumns={2}
        />
    )
}

export default FavoriteCards