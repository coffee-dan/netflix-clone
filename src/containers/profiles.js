// SelectProfile Container
import React from 'react'
import { Header, Profiles } from '../components'
import * as ROUTES from '../constants/routes'

// \TODO create multi-user support
// suggested that a users object gets passed to SelectProfileContainer
// uses map over the <Profiles.User> element to display them all
export function SelectProfileContainer({ user, setProfile }) {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo 
                        to={ROUTES.HOME} 
                        src="/images/misc/logo.svg"
                        alt="Netflix"
                    />
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User
                        onClick={() => setProfile({
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        })}
                    >    
                        <Profiles.Picture src={ user.photoURL } alt={ `${user.displayName} profile picture` } />
                        <Profiles.Name>{ user.displayName }</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}