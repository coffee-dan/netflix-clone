// Debug page - can only be accessed by directly typing in address bar
// suggested to be used to isolate components for testing problems
// originally used for the <Loading> to fix the animation logic
import React from 'react'
import { Loading } from '../components/'

export default function Debug() {
    return <Loading src='1' alt='testing' />
}
