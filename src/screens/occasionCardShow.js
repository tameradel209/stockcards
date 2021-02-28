import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather,Ionicons, MaterialCommunityIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'
import Card from '../components/card'
import { Rating, AirbnbRating } from 'react-native-elements'
import CustomButton from '../components/button'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const {width, height} = Dimensions.get('screen')

const Card1 = (props) =>{

    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()

    return(
        <View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', flex:1, margin:20}}>
                    <View>
                        <Text style={{fontSize:16, color:colors.headerText, fontWeight:'bold'}}>ramadan cards 2021</Text>
                    </View>
                    <View style={{paddingHorizontal:20, paddingVertical:5, backgroundColor:'#17d180', borderRadius:20}}>
                        <Text style={{color:'white'}}>new</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center', flex:1, marginHorizontal:20}}>
                    <View style={{flexDirection:'row', flex:4}}>
                        <Text style={{color:colors.componentText}}>5.00 SR</Text>
                        <Text style={{textDecorationLine:'line-through', marginHorizontal:20, color:'gray'}}>8.00 SR</Text>                            
                    </View>
                    <AirbnbRating count={5} showRating={false} defaultRating={4} size={15} />
                    <Text style={{color:'#8f8f8f'}}>4.0</Text>
                </View>
            </View>
            <View style={{backgroundColor:'#f8f8f8', margin:20, padding:10}}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{margin:5, fontWeight:'bold', color:colors.nameText}}>occasion:</Text>
                    <Text style={{margin:5, color:colors.componentText}}>ramadan</Text>                        
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={{margin:5, fontWeight:'bold', color:colors.nameText}}>sector:</Text>
                    <Text style={{margin:5, color:colors.componentText}}>tourism, environment, </Text>                        
                </View>
            </View>
            <View style={{flexDirection:'row', flexWrap:'wrap', marginHorizontal:20, borderBottomWidth:1, borderColor:colors.bottomBorder, paddingBottom:10}}>
                <View style={{paddingHorizontal:20, paddingVertical:5, backgroundColor:'#9140eb', borderRadius:20, margin:5}}>
                    <Text style={{color:'white'}}>ramadan</Text>
                </View>
                <View style={{paddingHorizontal:20, paddingVertical:5, backgroundColor:'#df922a', borderRadius:20, margin:5}}>
                    <Text style={{color:'white'}}>ramadan month</Text>
                </View>
                <View style={{paddingHorizontal:20, paddingVertical:5, backgroundColor:'#c24998', borderRadius:20, margin:5}}>
                    <Text style={{color:'white'}}>card</Text>
                </View>
                <View style={{paddingHorizontal:20, paddingVertical:5, backgroundColor:'#08b0c7', borderRadius:20, margin:5}}>
                    <Text style={{color:'white'}}>2021</Text>
                </View>
            </View>
            <View style={{margin:20}}>
                <Text style={{fontWeight:'bold', color:colors.headerText}}>similar card</Text>
            </View>
        </View>
    )
}

const OccasionCardShow = (props) =>{
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()
    const [button, setButton] = useState(0)
    const [y, setY] = useState(0)
    const scrollY = useRef(new Animated.Value(0)).current
    const uri='https://res.cloudinary.com/gallarycloud/image/upload/v1611422309/fxh9qz1b7xodj2vszg6p.jpg'

    const data = [0,1,2,3,4,5,6,7,8,9]
    const diffClamp = Animated.diffClamp(scrollY, 0, height*0.2)
    const translateY = diffClamp.interpolate({
        inputRange:[0, height*0.4],
        outputRange:[0, -height*0.4]
    })

    return(
        <View style={{flex:1}}>
            <View style={{height:height*0.4}}/>
            <Image source={{uri}} resizeMode='stretch' style={{width:width, height:height*0.45, position:'absolute'}} />
            <Animated.View style={{backgroundColor:'white', borderTopRightRadius:30, borderTopLeftRadius:30, paddingTop:10, transform:[{translateY}]}}>
                <TouchableOpacity style={{position:'absolute', flexDirection:'row', backgroundColor:'#d40e4c', top:-50, marginHorizontal:20, borderRadius:20, paddingHorizontal:10, paddingVertical:5, alignItems:'center'}}>
                    <Text style={{color:'white', marginHorizontal:10}}>edit card</Text>
                    <MaterialCommunityIcons name='image-edit-outline' size={26} color='white' />
                </TouchableOpacity>
                <View style={{height:height*0.55}}>
                    <Animated.FlatList
                            data={data}
                            ListHeaderComponent={() => <Card1 />}
                            renderItem={({item, index}) => 
                                            <Card 
                                                key={index} 
                                                name='name of the card' 
                                                price='5.00 SR' 
                                                originalPrice='8.00 SR' 
                                                uri={uri} onPress={() => props.navigation.navigate('cardShow')}
                                            />
                                        }
                            keyExtractor={(item) => item}
                            numColumns={2}
                            onScroll={Animated.event(
                                [{nativeEvent: {contentOffset: {y: scrollY}}}],
                                {useNativeDriver: true}
                            )}
                            bounces={false}
                        />                    
                </View>

            </Animated.View>
            <View style={{flexDirection:'row', backgroundColor:colors.componentBackground, width:width, height:height/18, position:'absolute', bottom:0, alignItems:'center', justifyContent:'space-around'}}>
                <MaterialCommunityIcons name='heart-outline' color={colors.headerText} size={34} />
                <CustomButton style={{width:width/3, height:height/20, backgroundColor:colors.backageIcon}} titleStyle={{color:'white'}} title='add to the cart' />
                <Ionicons name='md-share-social-outline' color={colors.headerText} size={34} />
            </View>
        </View>
    )
} 

export default OccasionCardShow