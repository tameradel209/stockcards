import * as ActionTypes from '../actions/actionTypes'
import en from '../../lang/en.json'
import ar from '../../lang/ar.json'

const initialState = {lang:'en', value:en, LTR:true}

const Language = (state = initialState, action) =>{
    switch(action.type){
        case ActionTypes.SETLANGUAGE :
            return {...state, lang:action.lang, value:action.value, LTR: action.lang == 'en' ? true : false}
        default :
            return state
    }
}

export default Language