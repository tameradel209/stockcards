import React from "react";
import {View, TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native'
import {useTheme} from '@react-navigation/native'

const {width, height} = Dimensions.get('window')

const CustomButton = (props) =>{

    const {colors} = useTheme()

    return(
        <TouchableOpacity onPress={props.onPress} style={[styles.button, {backgroundColor:colors.componentBackground, height:height/14, width:width/4*3, borderColor:colors.componentBorder, ...props.style}]}>
            <Text style={{color:colors.nameText, ...props.titleStyle}}>{props.title}</Text>
        </TouchableOpacity>
    )
} 

const styles = StyleSheet.create({
    button:{
        borderWidth:1, 
        borderRadius:100, 
        justifyContent:'center', 
        alignItems:'center', 
    }
})

export default CustomButton