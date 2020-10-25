import React from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
// file-loader static resource imports
import logo from '../../images/misc/logo.svg'

// takes in children to ensure this container is extensible
export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo 
                    to={ROUTES.HOME}
                    src={ logo }
                    alt="Netflix Logo"
                />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
