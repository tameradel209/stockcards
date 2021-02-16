import React, {useContext} from 'react'
import {View, Text, Dimensions, TouchableOpacity, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import {LocalizationContext} from '../context/langContext'
import {useTheme} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'
import { TextInput } from 'react-native-gesture-handler'

const {width, height} = Dimensions.get('window')

const Card1 = (props) => {

    const uri='https://res.cloudinary.com/gallarycloud/image/upload/v1611422309/fxh9qz1b7xodj2vszg6p.jpg'

    return(
        <View style={{margin:20}}>
            <Image source={{uri}} resizeMode='stretch' style={{width:width-80, height:height/5+30, borderRadius:10}} />
        </View>
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
                <View style={{flex:1, backgroundColor:colors.componentBackground}}>
                    <View style={{alignItems:'center'}}>
                        <View style={{backgroundColor:'#483258', height:height/2-20, width:width+150, borderBottomLeftRadius:width*2,  borderBottomRightRadius:width*2}} />
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
                    <View style={{position:'absolute', flexDirection:'row', paddingHorizontal:20, top:20, alignItems:'center', width:width, justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={() => null}>
                            <Image source={require('../../assets/list.png')} resizeMode='contain' style={{width:20, height:20}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => null}>
                            <Image source={require('../../assets/search.png')} resizeMode='contain' style={{width:20, height:20}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:40}}>
                        <FlatList 
                            data={data}
                            renderItem={({item, index}) => <Card1 key={index} />}
                            keyExtractor={(item) => item}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={{color:'#71233b', fontSize:18, fontWeight:'bold'}}>be distinguish</Text>
                        <Text style={{color:'#3b3b3b'}}>browse all departments easily</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginVertical:30}}>
                        <TouchableOpacity onPress={() => null}>
                            <Image source={require('../../assets/1.png')} resizeMode='contain' style={{width:250, height:300, borderRadius:10}} />                        
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => null}>
                            <Image source={require('../../assets/2.png')} resizeMode='contain' style={{width:250, height:300, borderRadius:10}} />                        
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => null}>
                            <Image source={require('../../assets/3.png')} resizeMode='contain' style={{width:250, height:300, borderRadius:10}} />                        
                        </TouchableOpacity>
                    </ScrollView>

                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => null} style={{position:'absolute', bottom:0, left:locale=='ar'?0:null, right:locale=='en'?0:null, borderRadius:30, width:60, height:60, margin:10, padding:10, justifyContent:'center', alignItems:'center', backgroundColor:colors.backageIcon}}>
                <MaterialCommunityIcons name='bell-ring-outline' size={40} color={'white'} />
            </TouchableOpacity>
        </View> 
    )
}

export default Home