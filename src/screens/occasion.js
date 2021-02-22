import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'

const {width, height} = Dimensions.get('screen')

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

const Occasion = (props) =>{
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()
    const [button, setButton] = useState(0)
    const [y, setY] = useState(0)
    const scrollY = useRef(new Animated.Value(0)).current
    const uri='https://res.cloudinary.com/gallarycloud/image/upload/v1611422309/fxh9qz1b7xodj2vszg6p.jpg'

    const data = [0,1,2,3,4,5,6,7,8,9]
    const diffClamp = Animated.diffClamp(scrollY, 0, height*0.4)
    const translateY = diffClamp.interpolate({
        inputRange:[0, height*0.4],
        outputRange:[0, -height*0.4]
    })

    return(
        <View style={{flex:1}}>
            <View style={{height:height*0.4}}/>
            <Image source={{uri}} resizeMode='stretch' style={{width:width, height:height*0.45, position:'absolute'}} />
            <Animated.View style={{backgroundColor:'white', borderTopRightRadius:30, borderTopLeftRadius:30, paddingTop:10, transform:[{translateY}]}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <View style={{flexDirection:'row', marginHorizontal:10, flex:6}}>
                        <TouchableOpacity onPress={() =>setButton(0)} style={{borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:button==0?colors.backageIcon:'#f2e7ea', margin:5, paddingHorizontal:30, paddingVertical:8}}>
                            <Text style={{color:button!=0?colors.componentText:'white'}}>{t('all')}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>setButton(1)} style={{borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:button==1?colors.backageIcon:'#f2e7ea', margin:5, paddingHorizontal:30, paddingVertical:8}}>
                            <Text style={{color:button!=1?colors.componentText:'white'}}>free</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>setButton(2)} style={{borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:button==2?colors.backageIcon:'#f2e7ea', margin:5, paddingHorizontal:30, paddingVertical:8}}>
                            <Text style={{color:button!=2?colors.componentText:'white'}}>special</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{flex:1}} onPress={() => props.navigation.navigate('occasionFilter')}>
                            <Image source={require('../../assets/Filter.png')} style={{width:38, height:38}} />
                    </TouchableOpacity>
                </View>
                <Animated.FlatList
                        data={data}
                        renderItem={({item, index}) => <Card key={index} />}
                        keyExtractor={(item) => item}
                        numColumns={2}
                        onScroll={Animated.event(
                            [{nativeEvent: {contentOffset: {y: scrollY}}}],
                            {useNativeDriver: true}
                        )}
                        bounces={false}
                    />
            </Animated.View>
        </View>
    )
}

export default Occasion