import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {LocalizationContext} from '../../App'
import {useTheme, useFocusEffect} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons} from 'react-native-vector-icons'
import CustomButton from "../components/button";
import * as Animatable from 'react-native-animatable'

const {height, width} = Dimensions.get('window')


const Row = (props) =>{

    const {colors} = useTheme()
    const {t, locale, setLocale} = useContext(LocalizationContext)

    return(
        <View style={{flexDirection:locale=='en'?'row':'row-reverse', marginHorizontal:10, backgroundColor:props.color, height:height/18, alignItems:'center'}}>
            <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:5, marginHorizontal:5}}>
                <Text style={{fontWeight:'bold', color:colors.nameText, fontSize:16, ...props.titleStyle}}>{props.title}:</Text>
            </View>
            <View style={{alignItems:locale=='en'?'flex-start':'flex-end', flex:6}}>
                <View style={props.textStyle}>
                    <Text style={{...props.valueStyle}}>{props.value}</Text>
                </View>
            </View>
        </View>
    )
}

const CodeCard = (props) =>{

    const {t, locale, setLocale} = useContext(LocalizationContext)

    return(
        <View style={{margin:10}}>
            <Row color={'#8d8d8d'} title={t('code')} value={'PLXG8U'} titleStyle={{color:'#ffffff'}} valueStyle={{color:'#ffffff', fontWeight:'bold'}} />
            <Row color={'#f2e4e4'} title={t('creation code date')} value={'13 october 2020'} />
            <Row color={'#ffffff'} title={t('code')} value={'PLXG8U'} />
            <Row color={'#f2e4e4'} title={t('code')} value={'PLXG8U'} />
            <Row color={'#ffffff'} title={t('code')} value={'PLXG8U'} />
        </View>
    )
}

const PackageManagement = (props) =>{

    const [button, setButton] = useState(0)
    const {colors} = useTheme()
    const {t, locale, setLocale} = useContext(LocalizationContext)
    const handleViewRef = ref => this.view = ref

    const rubber = () => this.view.rubberBand(1000)
    const fade = () => this.view.fadeInDown(1000)

    const onPress =(value) =>{
        if(value == button){
            rubber()
        }
        else{
            setButton(value)
            fade()
        }
    }

    return(
        <View style={{backgroundColor:'white'}}>
            <ScrollView>
                <View style={{alignItems:locale=='en'?'flex-start':'flex-end'}}>
                    <Text style={{margin:10, fontWeight:'bold', color:colors.nameText}}>{t('you are now using {}', {package:'masia package for companies'})}</Text>
                    <Text style={{marginHorizontal:10}}>package package package package package package package package package package package package package package package package package </Text>
                </View>

                <View style={{margin:10, paddingVertical:10, backgroundColor:'#f8f8f8'}}>
                    <Text style={{fontWeight:'bold', color:colors.icon, margin:10}}>{t('package details')}</Text>
                    <Row color={'white'} title={t('total package cards')} value={'5 cards'}/>
                    <Row color={'#eeeeee'} title={t('used cards')} value={'2 cards'}/>
                    <Row color={'white'} title={t('remain cards')} value={'3 cards'}/>
                    <Row color={'#eeeeee'} title={t('purchase date')} value={'13 october 2020'}/>
                    <Row color={'white'} title={t('package status')} value={'available'} textStyle={{paddingHorizontal:10, paddingVertical:5, backgroundColor:true?'#d7fedc':'#fed7d7', borderRadius:20}}/>
                    <Row color={'#eeeeee'} title={t('package price')} value={'13 SR'}/>
                </View>

                <View>
                    <View style={{backgroundColor:'#fff5f8', margin:10}}>
                        <View style={{alignItems:locale=='en'?'flex-start':'flex-end'}}>
                            <Text style={{margin:10, fontWeight:'bold', color:'#c43662'}}>{t('getting codes for council directors')}</Text>
                            <Text style={{margin:10, color:'#85314b'}}>{t('you have {} gift codes which can be used {} times for each', {giftCodes:50, useTimes:25})}</Text>
                        </View>
                        <View style={{flexDirection:locale=='en'?'row':'row-reverse'}}>
                            <CustomButton style={{backgroundColor:button==0?'#ef3c73':null, borderColor:'#c43662', width:width/7*3, height:height/17, margin:10}} titleStyle={{color:button==0?'white':'#c43662'}} title={t('used codes list')} onPress={() =>onPress(0)} />
                            <CustomButton style={{backgroundColor:button==1?'#ef3c73':null, borderColor:'#c43662', width:width/7*3, height:height/17, margin:10}} titleStyle={{color:button==1?'white':'#c43662'}} title={t('create a new code')} onPress={() =>onPress(1)} />
                        </View>
                        {button == 0 ?
                        <Animatable.View animation='fadeInDown' ref={handleViewRef}>
                            <View style={{alignItems:locale=='en'?'flex-start':'flex-end', backgroundColor:'#d4edda',marginHorizontal:20, padding:10}}>
                                <Text style={{color:'#0e4e1c'}}>{t('phrase1',{usedCodes:5, totalCodes:25, remainCodes:10})}</Text>
                            </View>
                            <CodeCard />
                            <CodeCard />
                        </Animatable.View>
                        :button == 1 ?
                        <Animatable.View animation='fadeInDown' ref={handleViewRef} style={{flexDirection:locale=='en'?'row':'row-reverse', alignItems:'center'}}>
                            <TouchableOpacity style={{flex:1, alignItems:'center'}}>
                                <MaterialCommunityIcons name='content-copy' size={30} style={{backgroundColor:'#fbe8ee'}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex:1, alignItems:'center'}}>
                            <MaterialCommunityIcons name='reload' size={30} style={{backgroundColor:'#fbe8ee'}} />
                            </TouchableOpacity>
                            <View style={{backgroundColor:'#fbe8ee', padding:10, margin:10, flex:4, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{fontSize:20, fontWeight:'bold', color:'#85314b'}}>JH54KU</Text>
                            </View>
                        </Animatable.View>
                        :
                        null
                        }
                    </View>
                </View>


                <View>
                    <View style={{backgroundColor:'#f5f6ff', margin:10}}>
                        <View style={{alignItems:locale=='en'?'flex-start':'flex-end'}}>
                            <Text style={{margin:10, fontWeight:'bold', color:'#464c82'}}>{t('getting codes for department managers and supervisors')}</Text>
                            <Text style={{margin:10, color:'#21275b'}}>{t('you have {} gift codes which can be used {} times for each', {giftCodes:50, useTimes:25})}</Text>
                        </View>
                        <View style={{flexDirection:locale=='en'?'row':'row-reverse'}}>
                            <CustomButton style={{backgroundColor:button==2?'#367dc4':null, borderColor:'#464c82', width:width/7*3, height:height/17, margin:10}} titleStyle={{color:button==2?'white':'#464c82'}} title={t('used codes list')} onPress={() =>onPress(2)} />
                            <CustomButton style={{backgroundColor:button==3?'#367dc4':null, borderColor:'#464c82', width:width/7*3, height:height/17, margin:10}} titleStyle={{color:button==3?'white':'#464c82'}} title={t('create a new code')} onPress={() =>onPress(3)} />
                        </View>
                        {button == 2 ?
                        <Animatable.View animation='fadeInDown' ref={handleViewRef}>
                            <View style={{alignItems:locale=='en'?'flex-start':'flex-end', backgroundColor:'#d4edda',marginHorizontal:20, padding:10}}>
                                <Text style={{color:'#0e4e1c'}}>{t('phrase1',{usedCodes:5, totalCodes:25, remainCodes:10})}</Text>
                            </View>
                            <CodeCard />
                            <CodeCard />
                        </Animatable.View>
                        :button == 3 ?
                        <Animatable.View animation='fadeInDown' ref={handleViewRef} style={{flexDirection:locale=='en'?'row':'row-reverse', alignItems:'center'}}>
                            <TouchableOpacity style={{flex:1, alignItems:'center'}}>
                                <MaterialCommunityIcons name='content-copy' size={30} style={{backgroundColor:'#e8ecfb'}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex:1, alignItems:'center'}}>
                                <MaterialCommunityIcons name='reload' size={30} style={{backgroundColor:'#e8ecfb'}} />
                            </TouchableOpacity>
                            <View style={{backgroundColor:'#e8ecfb', padding:10, margin:10, flex:4, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{fontSize:20, fontWeight:'bold', color:'#21275b'}}>JH54KU</Text>
                            </View>
                        </Animatable.View>
                        :null
                        }
                    </View>
                </View>


                <View>
                    <View style={{backgroundColor:'#fffceb', margin:10}}>
                        <View style={{alignItems:locale=='en'?'flex-start':'flex-end'}}>
                            <Text style={{margin:10, fontWeight:'bold', color:'#bc8a00'}}>{t('getting codes for employees')}</Text>
                            <Text style={{margin:10, color:'#6e5717'}}>{t('you have {} gift codes which can be used {} times for each', {giftCodes:50, useTimes:25})}</Text>
                        </View>
                        <View style={{flexDirection:locale=='en'?'row':'row-reverse'}}>
                            <CustomButton style={{backgroundColor:button==4?'#bc8a00':null, borderColor:'#bc8a00', width:width/7*3, height:height/17, margin:10}} titleStyle={{color:button==4?'white':'#bc8a00'}} title={t('used codes list')} onPress={() =>onPress(4)} />
                            <CustomButton style={{backgroundColor:button==5?'#bc8a00':null, borderColor:'#bc8a00', width:width/7*3, height:height/17, margin:10}} titleStyle={{color:button==5?'white':'#bc8a00'}} title={t('create a new code')} onPress={() =>onPress(5)} />
                        </View>
                        {button == 4 ?
                        <Animatable.View animation='fadeInDown' ref={handleViewRef}>
                            <View style={{alignItems:locale=='en'?'flex-start':'flex-end', backgroundColor:'#d4edda',marginHorizontal:20, padding:10}}>
                                <Text style={{color:'#0e4e1c'}}>{t('phrase1',{usedCodes:5, totalCodes:25, remainCodes:10})}</Text>
                            </View>
                            <CodeCard />
                            <CodeCard />
                        </Animatable.View>
                        :button == 5 ?
                        <Animatable.View animation='fadeInDown' ref={handleViewRef} style={{flexDirection:locale=='en'?'row':'row-reverse', alignItems:'center'}}>
                            <TouchableOpacity style={{flex:1, alignItems:'center'}}>
                                <MaterialCommunityIcons name='content-copy' size={30} style={{backgroundColor:'#fbf5e8'}} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex:1, alignItems:'center'}}>
                                <MaterialCommunityIcons name='reload' size={30} style={{backgroundColor:'#fbf5e8'}} />
                            </TouchableOpacity>
                            <View style={{backgroundColor:'#fbf5e8', padding:10, margin:10, flex:4, alignItems:'center', justifyContent:'center'}}>
                                <Text style={{fontSize:20, fontWeight:'bold', color:'#6e5717'}}>JH54KU</Text>
                            </View>
                        </Animatable.View>
                        :null
                        }
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default PackageManagement