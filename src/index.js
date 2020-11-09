import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from './global-styles'
import { App } from './app'
import { FirebaseContext } from './context/firebase'
import firebaseConfig from './config.json'

import reportWebVitals from './reportWebVitals';

// import { seedDatabase } from './seed'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// The app will not work without this information. If you are seeing this
//  comment form GitHub you need to get your own firebase config details
const firebase = window.firebase.initializeApp( firebaseConfig )

//  This command along with the accompanying import statement are what hydrate
//   the firestore using the logic provided by the course instructor. This only needs
//   to be run once hence why it is commented out. Also it requires firestore rules
//   that are permissive enough to let it run.
// seedDatabase( firebase )

// Using fragment to ensure only one parent element is sent to render()
// while still including GlobalStyles
ReactDOM.render(
    <React.StrictMode>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </React.StrictMode>, 
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
