import React, {useContext} from 'react'
import {View, Text, Dimensions, TouchableOpacity, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {MaterialCommunityIcons, Feather} from 'react-native-vector-icons'
import {LocalizationContext} from '../context/langContext'
import {useTheme, DrawerActions} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import { TextInput } from 'react-native-gesture-handler'
import CustomButton from '../components/button'
import Constants from 'expo-constants'
import Card from '../components/card'

const {width, height} = Dimensions.get('window')

const Card1 = (props) => {

    const uri='https://res.cloudinary.com/gallarycloud/image/upload/v1611422309/fxh9qz1b7xodj2vszg6p.jpg'

    return(
        <View style={{margin:20}}>
            <Image source={{uri}} resizeMode='stretch' style={{width:width-80, height:height/5+30, borderRadius:10}} />
        </View>
    )
}

const Card2 = (props) =>{
    return(
        <TouchableOpacity onPress={() => null}>
            <Image source={require('../../assets/3.png')} resizeMode='contain' style={{width:250, height:300, borderRadius:10}} />                        
        </TouchableOpacity>
    )
}

const Card3 = (props) => {

    const {t, locale, setLocale} = useContext(LocalizationContext)
    const {colors} = useTheme()
    const uri='https://res.cloudinary.com/gallarycloud/image/upload/v1611422309/fxh9qz1b7xodj2vszg6p.jpg'

    return(
        <Animatable.View animation='flipInY' delay={200} style={{margin:5, alignItems:locale=='en'? 'flex-start': 'flex-end', backgroundColor:'white'}}>
            <View>
                <Image source={{uri}} style={[{height:width/2-10, width:width/2-10, }, locale=='en'? {borderBottomRightRadius:100}: {borderBottomLeftRadius:100}]}/>
            </View>
            <View style={{alignItems:'center', justifyContent:'center', width:width/2-10, paddingVertical:10}}>
                <View>
                    <Text style={{color:'#651830'}}>congratulation</Text>
                </View>
                <View>
                    <Text style={{fontSize:18, color:'#572c3a'}}>name of the card</Text>
                </View>
            </View>
            <View style={{backgroundColor:colors.backageIcon, position:'absolute', borderRadius:3, top:5, left:5, padding:5}}>
                <Text style={{color:'white'}}>30%discount</Text>
            </View>
        </Animatable.View>
    )
}

const Card4 = (props) =>{

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
            <View style={[{backgroundColor:'#ffa51d', borderRadius:3, padding:5, position:'absolute', top:5}, locale=='en'? {left:5} : {right:5}]}>
                <Text style={{color:'white'}}>special</Text>
            </View>
        </Animatable.View>
    )
}

const Card5 = (props) =>{

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
                <Text style={{color:colors.componentText}}>free</Text>
            </View>
            <View style={[{borderRadius:3, backgroundColor:colors.backageIcon, position:'absolute', top:5, padding:5}, locale=='en'? {left:5} : {right:5}]}>
                <Text style={{color:'white'}}>free</Text>
            </View>
        </Animatable.View>
    )
}

const Home = (props) =>{

    const {t, locale} = useContext(LocalizationContext)
    const {colors} = useTheme()
    const uri='https://res.cloudinary.com/gallarycloud/image/upload/v1611422309/fxh9qz1b7xodj2vszg6p.jpg'
    const data = [0,1,2,3,4,5]

    return(
        <View style={{flex:1}}>
            <ScrollView bounces>
                <View style={{flex:1, backgroundColor:'white'}}>
                    <View style={{alignItems:'center', backgroundColor:colors.componentBackground}}>
                        <View style={{backgroundColor:'#483258', height:height/2-20, width:width+150, borderBottomLeftRadius:width*2,  borderBottomRightRadius:width*2}} />
                    </View>
                    <View style={{paddingTop:40, backgroundColor:colors.componentBackground}}>
                        <FlatList 
                            data={data}
                            renderItem={({item, index}) => <Card1 key={index} />}
                            keyExtractor={(item) => item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{alignItems:'center', backgroundColor:colors.componentBackground}}>
                        <Text style={{color:'#71233b', fontSize:18, fontWeight:'bold'}}>be distinguish</Text>
                        <Text style={{color:'#3b3b3b'}}>browse all departments easily</Text>
                    </View>
                    <View style={{paddingTop:40, backgroundColor:colors.componentBackground}}>
                        <FlatList 
                            data={data}
                            renderItem={({item, index}) => <Card2 key={item} />}
                            keyExtractor={(item) => item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{backgroundColor:'#fcf2f2', marginVertical:20}}>
                        <View style={{alignItems:'center', paddingVertical:30}}>
                            <Text style={{color:'#71233b', fontSize:18, fontWeight:'bold'}}>nearest occasions</Text>
                            <Text style={{color:'#3b3b3b'}}>enjoy the strongest occasion cards</Text>
                        </View>
                        <View>
                            <FlatList 
                                data={data}
                                renderItem={({item, index}) => <Card3 key={item} />}
                                keyExtractor={(item) => item}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                        <View style={{alignItems:'center', marginVertical:20}}>
                            <CustomButton title='explore all occasions' style={{width:width/2, height:45}} />
                        </View>
                    </View>
                    <View style={{backgroundColor:'#fff', marginVertical:20}}>
                        <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <Text style={{color:'#71233b', fontSize:18, fontWeight:'bold'}}>special gift cards</Text>
                            <Text style={{color:'#3b3b3b'}}>more</Text>
                        </View>
                        <View>
                            <FlatList 
                                data={data}
                                renderItem={({item, index}) => 
                                                <Card 
                                                    key={index} 
                                                    name='name of the card' 
                                                    price='5.00 SR' 
                                                    originalPrice='8.00 SR' 
                                                    uri={uri}
                                                    patch={
                                                        <View style={[{backgroundColor:'#ffa51d', borderRadius:3, padding:5, position:'absolute', top:5}, locale=='en'? {left:5} : {right:5}]}>
                                                            <Text style={{color:'white'}}>special</Text>
                                                        </View>
                                                        }
                                                />
                                }
                                keyExtractor={(item) => item}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'#fff', marginVertical:20}}>
                        <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <Text style={{color:'#71233b', fontSize:18, fontWeight:'bold'}}>free gift cards</Text>
                            <Text style={{color:'#3b3b3b'}}>more</Text>
                        </View>
                        <View>
                            <FlatList 
                                data={data}
                                renderItem={({item, index}) => 
                                                <Card 
                                                    key={index} 
                                                    name='name of the card' 
                                                    price='free' 
                                                    uri={uri}
                                                    patch={
                                                        <View style={[{borderRadius:3, backgroundColor:colors.backageIcon, position:'absolute', top:5, padding:5}, locale=='en'? {left:5} : {right:5}]}>
                                                            <Text style={{color:'white'}}>free</Text>
                                                        </View>
                                                        }
                                                />
                                            }
                                keyExtractor={(item) => item}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View style={{marginVertical:10}}>
                        <Image source={require('../../assets/Banner.png')} style={{width:width, height:200}} />
                    </View>
                    <View style={{backgroundColor:'#fff', marginVertical:20}}>
                        <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <Text style={{color:'#71233b', fontSize:18, fontWeight:'bold'}}>ramadan occasion</Text>
                            <Text style={{color:'#3b3b3b'}}>more</Text>
                        </View>
                        <View>
                            <FlatList 
                                data={data}
                                renderItem={({item, index}) => 
                                                <Card 
                                                    key={index} 
                                                    name='name of the card' 
                                                    price='5.00 SR' 
                                                    originalPrice='8.00 SR' 
                                                    uri={uri}
                                                    patch={
                                                        <View style={[{backgroundColor:'#ffa51d', borderRadius:3, padding:5, position:'absolute', top:5}, locale=='en'? {left:5} : {right:5}]}>
                                                            <Text style={{color:'white'}}>special</Text>
                                                        </View>
                                                        }
                                                />
                                            }
                                keyExtractor={(item) => item}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View style={{backgroundColor:'#fff', marginVertical:20}}>
                        <View style={{alignItems:'center', flexDirection:'row', justifyContent:'space-between', padding:10}}>
                            <Text style={{color:'#71233b', fontSize:18, fontWeight:'bold'}}>cards for just born</Text>
                            <Text style={{color:'#3b3b3b'}}>more</Text>
                        </View>
                        <View>
                            <FlatList 
                                data={data}
                                renderItem={({item, index}) => 
                                                <Card 
                                                    key={index} 
                                                    name='name of the card' 
                                                    price='5.00 SR' 
                                                    originalPrice='8.00 SR' 
                                                    uri={uri}
                                                    patch={
                                                        <View style={[{backgroundColor:'#ffa51d', borderRadius:3, padding:5, position:'absolute', top:5}, locale=='en'? {left:5} : {right:5}]}>
                                                            <Text style={{color:'white'}}>special</Text>
                                                        </View>
                                                        }
                                                />
                                            }
                                keyExtractor={(item) => item}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>
                    </View>
                    <View style={{position:'absolute', top:30, padding:40, width:width, alignItems:'center'}}>
                        <Text style={{color:'white', fontWeight:'bold', fontSize:18, textAlign:'center'}}>enter the gift code or discount to enjoy the best cards freely</Text>
                    </View>
                    <View style={{width:width, padding:40, position:'absolute', top:90}}>
                        <TextInput style={{height:50, backgroundColor:'#392448', color:'white', padding:10}} placeholder='enter gift code or discount' placeholderTextColor='white' />
                    </View>
                    <View style={{position:'absolute', top:190, alignItems:'center', width:width, height:width/2, justifyContent:'center'}}>
                        <Image source={require('../../assets/gifts.png')} resizeMode='contain' style={{width:width-80, height:width/2-20}} />
                    </View>
                    <View style={{position:'absolute', flexDirection:'row', paddingHorizontal:20, top:Constants.statusBarHeight+10, alignItems:'center', width:width, justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}>
                            <Image source={require('../../assets/list.png')} resizeMode='contain' style={{width:20, height:20}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => null}>
                            <Image source={require('../../assets/search.png')} resizeMode='contain' style={{width:20, height:20}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => null} style={{position:'absolute', bottom:0, left:locale=='ar'?0:null, right:locale=='en'?0:null, borderRadius:30, width:60, height:60, margin:10, padding:10, justifyContent:'center', alignItems:'center', backgroundColor:colors.backageIcon}}>
                <MaterialCommunityIcons name='bell-ring-outline' size={40} color={'white'} />
            </TouchableOpacity>
        </View> 
    )
}

export default Home