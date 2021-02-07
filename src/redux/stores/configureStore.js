import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {persistStore, persistCombineReducers} from 'redux-persist'
//import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage'
import UndoRedo from '../reducers/undoRedo'
import Language from '../reducers/language'

const config = {
    key:'root',
    storage: AsyncStorage,
    debug:false
}

const ConfigureStore = () =>{
    const store = createStore(
        persistCombineReducers(config, {
            Language,
            UndoRedo
        }),
        applyMiddleware(thunk)
    )

    const persistor = persistStore(store)

    return { persistor, store}
}

export default ConfigureStore