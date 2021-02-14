import React, { useState, useEffect, useMemo, useRef, createContext, useContext } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text, TouchableWithoutFeedback, Image, Button, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import db from './assets/test.json'
import {PersistGate} from 'redux-persist/es/integration/react'
import {Provider} from 'react-redux'
import ConfigureStore from './src/redux/stores/configureStore'
import CardEditor from './src/screens/cardEditor'
import en from './src/lang/en.json'
import ar from './src/lang/ar.json'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ActionTypes from './src/redux/actions/actionTypes'
import {useSelector} from 'react-redux'
import Language from './src/redux/reducers/language';
import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import {NavigationContainer, DefaultTheme, DarkTheme} from '@react-navigation/native'
import BottomTabs from './src/navigation/bottom'

export const LocalizationContext = createContext()

i18n.fallbacks = true;
i18n.translations = { ar, en };

const langObjects = {
    'en': en,
    'ar': ar
}

const CustomDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    customBackground: 'rgb(255, 255, 255)',
    componentBackground: 'rgb(255, 248, 250)',
    componentText: 'rgb(196, 54, 98)',
    nameText:'rgb(49, 20, 30)',
    icon:'rgb(192, 53, 96)',
    componentBorder: 'rgb(255, 0, 127)',
    bottomBorder:'rgb(221, 221, 221)',
    headerText:'rgb(87, 44, 58)',
    backageIcon:'rgb(239, 60, 115)',
    gray:'rgb(151, 151, 151)'
  },
};

const App = () => {

  const [locale, setLocale] = useState(Localization.locale)
  const localizationContext = useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale]
  )

  const {persistor, store} = ConfigureStore()

  const [selectedLang, setSelectedLang] = useState('en')

  useEffect(() =>{
    fetchLanguage = async() => {
      const lang = await AsyncStorage.getItem('language')
      if(lang != null){
        setSelectedLang(lang)
      }
      const value={
        ...langObjects[selectedLang]
    }
      store.dispatch({type:ActionTypes.SETLANGUAGE, lang:selectedLang, value:value})
    }
    fetchLanguage()
  }, [])

  return(
    <LocalizationContext.Provider value={localizationContext}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
      <StatusBar
        StatusBarStyle={{height:100}}
        animated={true}
        backgroundColor="#3f294e"
        barStyle={'light-content'}
        showHideTransition={'fade'}
        hidden={false}
        networkActivityIndicatorVisible={true} />
        <NavigationContainer theme={CustomDefaultTheme}>
          <BottomTabs />
        </NavigationContainer>
      </PersistGate>
    </Provider>
    </LocalizationContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'orange'
  }
});

export default App