import React from 'react'
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading'

export default function Loading({ src, alt, ...restProps }) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={`/images/users/${src}.png`} alt={ alt } />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
}

// Spinner styled component
// Lockbody styled component - Will be a child of the spinner
// A new CC component that will be the release body