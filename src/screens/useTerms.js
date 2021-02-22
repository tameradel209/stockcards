import React, {useContext, useRef, useState, useEffect, useCallback} from 'react'
import {View, Text, Dimensions, TouchableOpacity, Animated, ScrollView, Image, StyleSheet, FlatList} from 'react-native'
import {LocalizationContext} from '../context/langContext'
import {useTheme, useFocusEffect, useIsFocused} from '@react-navigation/native'
import {Feather, MaterialCommunityIcons} from 'react-native-vector-icons'
import * as Animatable from 'react-native-animatable'

const {width, height} = Dimensions.get('window')

const UseTerms = (props) =>{

    const {colors} = useTheme()

    return(
        <ScrollView>
            <View style={{backgroundColor:'white', margin:20}}>
                <View style={{margin:10, borderBottomWidth:1, height:height/18, justifyContent:'center', borderColor:colors.bottomBorder}}>
                    <Text style={{color:'#85314b', fontSize:18}}>terms of use</Text>
                </View>
                <View style={{margin:10, marginBottom:30}}>
                    <Text style={{color:'#5a5a5a'}}>خصوصية زوارنا لها اهمية بالغة بالنسبة لنا . سياسة الخصوصية الموجودة في هذه الوثيقة تمثل الخطوط العريضه لأنواع المعلومات الشخصيه اللتى نجمعهاوكيفية استخدامها من قبلنا ومن قبل معلنينا .</Text>
                </View>
                <View style={{margin:10}}>
                    <Text style={{color:'#85314b'}}>terms</Text>
                </View>
                <View style={{marginHorizontal:10, marginBottom:30}}>
                    <Text style={{color:'#5a5a5a'}}>شأنها في ذلك شأن معظم خوادم المواقع الاخرى ، ومن هنا في موقعنا نستخدم نظام ملفات الدخول. وهذا يشمل بروتوكول الانترنت (عناوين ، نوع المتصفح ، مزود خدمة الانترنت (مقدمي خدمات الانترنت) ، التاريخ / الوقت ، وعدد النقرات لتحليل الاتجاهات وادارة الموقع ).</Text>
                </View>
                <View style={{margin:10}}>
                    <Text style={{color:'#85314b'}}>Conditions for licenses</Text>
                </View>
                <View style={{marginHorizontal:10, marginBottom:30}}>
                    <Text style={{color:'#5a5a5a'}}>تم تزويد مربع البحث الموجود على موقع الويب هذا (“مربع البحث”) بواسطة Google Inc (“Google”). أنت تقر وتوافق على تطبيق سياسة خصوصية Google (الموجودة على http://www.google.com/privacy.html ) على استخدامك “لمربع البحث” وباستخدامك “لمربع البحث” تمنح Google الموافقة على استخدام بياناتك الشخصية وفقًا لسياسة الخصوصية .</Text>
                </View>
                <View style={{margin:10}}>
                    <Text style={{color:'#85314b'}}>edit or copy resources</Text>
                </View>
                <View style={{marginHorizontal:10, marginBottom:30}}>
                    <Text style={{color:'#5a5a5a'}}>نستخدم تقنية الكوكيز لتخزين المعلومات عن تفضيلات الزوار ، الى جانب سجل خاص للمستخدم تسجل فيه معلومات محددة عن الصفحات التي تم الوصول اليها او زيارتها ) ، بهذه الخطوة فاننا نعرف مدى اهتمامات الزوار واي المواضيع الاكثر تفضيلا من قبلهم حتى نستطيع بدورنا تطوير محتوانا المعرفي المناسب لهم.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default UseTerms