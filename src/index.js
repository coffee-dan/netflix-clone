import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from './global-styles'
import { App } from './app'
import { FirebaseContext } from './context/firebase'

// some default info used here, will setup new firestore soon
const config = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messageSenderId: '',
    appId: '',
}

const firebase = window.firebase.initializeApp(config)

// Using fragment to ensure only one parent element is sent to render()
// while still including GlobalStyles
ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>, 
    document.getElementById('root')
);
