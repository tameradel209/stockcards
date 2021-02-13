import React, {useContext, useState, useEffect} from 'react'
import {View, Text, Dimensions, TouchableOpacity, ScrollView, Image, StyleSheet, TextInput, Modal} from 'react-native'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import {LocalizationContext} from '../../App'
import {useTheme} from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import CustomButton from "../components/button";


const {width, height} = Dimensions.get('window')

const Item = (props)=>{

    const {colors} = useTheme()

    const {t, locale, setLocale} = useContext(LocalizationContext)

    return(
        <View style={[styles.itemContainer, {borderColor:colors.bottomBorder, alignItems:locale=='en'?'flex-start':'flex-end'}]}>
            <Text style={[styles.itemType, {color:colors.componentText}]}>{props.type} *</Text>
            <TextInput style={{width:width, fontSize:18, color:colors.nameText}} textAlign={locale=='en'? 'left':'right'} placeholder={t('full name')} value={props.value} onChangeText={props.setValue} />
        </View>
    )
}

const EditPersonalInfo = (props) =>{

    const {info} = props.route.params

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [code, setCode] = useState('')
    const [image, setImage] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

    const {colors} = useTheme()

    const {t, locale, setLocale} = useContext(LocalizationContext)

    useEffect(() => {
        setName(info.name)
        setEmail(info.email)
        setPhone(info.phone)
        setCode(info.code)
        setImage(info.image)
        return () => {
            setName('')
            setEmail('')
            setPhone('')
            setCode('')
        }
    }, [])

    const pickImageFromLibrary = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
        else{
            let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            })
            setImage(result.uri)
            console.log(result)
            setModalVisible(false)
        }
    }

    const pickImageFromCamera = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera permissions to make this work!');
        }
        else{
            let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            })
            setImage(result.uri)
            setModalVisible(false)
        }
    }

    return(
        <View style={styles.container}>
            <View style={[styles.item, {backgroundColor:colors.customBackground}]}>
                <Item value={name} setValue={txt => setName(txt)} type={t('full name')} />
                <Item value={email} setValue={txt => setEmail(txt)} type={t('email')} />
                <Item value={phone} setValue={txt => setPhone(txt)} type={t('phone number')} />
                <View style={[styles.imageContainer, { alignItems:locale=='en'?'flex-start':'flex-end'}]}>
                    <Text style={[styles.imageText, {color:colors.componentText}]}>{t('image')}</Text>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image source={{uri:image}} style={styles.image} />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton title={t('save edits')} />
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                setModalVisible(false)
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <CustomButton style={{margin:5}} title={t('choose photo from gallary')} onPress={() => pickImageFromLibrary()} />
                        <CustomButton style={{margin:5}} title={t('take a photo from camera')} onPress={() => pickImageFromCamera()} />
                        <MaterialCommunityIcons name='close' size={24} style={{position:'absolute', right:10, top:10}} onPress={() => setModalVisible(false)}/>
                    </View>
                </View>
            </Modal>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
})

export default EditPersonalInfo