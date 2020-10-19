import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from './global-styles'
import { App } from './app'

// Using fragment to ensure only one parent element is sent to render()
// while still including GlobalStyles

ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>, 
    document.getElementById('root')
);
