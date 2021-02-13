import React, {useContext} from 'react'
import {View, Text, Dimensions, TouchableOpacity, ScrollView, Image, StyleSheet} from 'react-native'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import {LocalizationContext} from '../../App'
import {useTheme} from '@react-navigation/native'

const {width, height} = Dimensions.get('window')

const Item = (props)=>{

    const {colors} = useTheme()

    const {t, locale, setLocale} = useContext(LocalizationContext)

    return(
        <View style={[styles.itemContainer, {borderColor:colors.bottomBorder, alignItems:locale=='en'?'flex-start':'flex-end'}]}>
            <Text style={[styles.itemType, {color:colors.componentText}]}>{props.type}</Text>
            <Text style={[styles.itemName, {color:colors.nameText}]}>{props.name}</Text>
        </View>
    )
}

const PersonalInfo = (props) =>{

    const {colors} = useTheme()

    const {t, locale, setLocale} = useContext(LocalizationContext)

    const info = {
        name:'ahmed hassan',
        email:'tameradel209#icoud.com',
        phone:'01207350507',
        code:'+20',
        image:'file:/data/user/0/host.exp.exponent/cache/ExperienceData/%2540tamer209%252Fstockcards/ImagePicker/1d5d2e76-2d38-4035-ab29-c77c3c4e7e67.jpg'
    }

    return(
        <View style={styles.container}>
            <View style={[styles.item, {backgroundColor:colors.customBackground}]}>
                <Item type={t('full name')} name={'ahmed hassan'} />
                <Item type={t('email')} name={'tameradel209#icoud.com'} />
                <Item type={t('phone number')} name={'01207350507'} />
                <View style={[styles.imageContainer, { alignItems:locale=='en'?'flex-start':'flex-end'}]}>
                    <Text style={[styles.imageText, {color:colors.componentText}]}>{t('image')}</Text>
                    <Image source={require('../../assets/icon.png')} style={styles.image} />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('editPersonalInfo',{info})} style={[styles.button, {backgroundColor:colors.componentBackground, height:height/14, width:width/4*3, borderColor:colors.componentBorder}]}>
                        <Text>{t('edit personal information')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    item:{
        flex:1,
        margin:10, 
    },
    imageContainer:{
        margin:10,
    },
    imageText:{
        marginBottom:10,
    },
    image:{
        width:100,
        height:100
    },
    itemContainer:{
        margin:10,  
        borderBottomWidth:1,
    },
    itemType:{
        marginBottom:5
    },
    itemName:{
        marginBottom:5,
        fontSize:18
    },
    buttonContainer:{
        flex:1, 
        justifyContent:'flex-end', 
        alignItems:'center', 
        margin:10
    },
    button:{
        borderWidth:1, 
        borderRadius:100, 
        justifyContent:'center', 
        alignItems:'center', 
    }
})

export default PersonalInfo