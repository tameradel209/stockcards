import React, {useState, useEffect, useContext, createContext} from 'react'
import * as RNLocalize from 'react-native-localize'
import App from '../../App'
import en from '../lang/en.json'
import ar from '../lang/ar.json'
import { Button } from 'react-native'

const MyContext = createContext()

const langObjects = {
    'en': en,
    'ar': ar
}

export const LangeuageContext = ({childern}) =>{

    const [selectedLang, setSelectedLang] = useState('en')

    useEffect(() =>{
        const currentLang = RNLocalize.findBestAvailableLanguage(Object.keys(langObjects))
        setSelectedLang(currentLang ? currentLang.languageTag : 'en')
    }, [])

    const value={
        ...langObjects[selectedLang]
    }
    return(
        <MyContext.Provider value={value} >
            <App />
        </MyContext.Provider>
    )
}

export const useLanguages = () => useContext(MyContext)