import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import {PersistGate} from 'redux-persist/es/integration/react'
import {Provider} from 'react-redux'
import ConfigureStore from './src/redux/stores/configureStore'
import CardEditor from './src/screens/cardEditor'

const Main = () => {

    const {persistor, store} = ConfigureStore()
  
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <CardEditor />
        </PersistGate>
      </Provider>
    );
  }

  export default Main