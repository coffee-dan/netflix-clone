// Browse container
import React, { useState } from 'react'
import { Header } from '../components'
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { SelectProfileContainer } from './profiles'
// can work with this container as it does not always show up, especially
// considering infinite scroll
import { FooterContainer } from './footer'

export function BrowseContainer() {
    const [profile, setProfile] = useState({})

    const user = {
        displayName: "dan",
        photoURL: "1"
    }

    return profile.displayName ? (
        <>
            <p>BrowseContainer</p>
            <FooterContainer />
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile}/>
    )
}
