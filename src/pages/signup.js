// Signup page
import React, { useState } from 'react'
import * as ROUTES from '../constants/routes'
import { Form } from '../components'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'

export default function Signup() {
    const [firstName, setFirstName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    // here we need form validation
    let isInvalid = firstName === '' || emailAddress === '' || password === ''

    // handleSignup (pass an event)
    const handleSignup = (event) => {
        event.preventDefault()
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {/* Don't fully understand error logic here */}
                    {error && <Form.Error>{error}</Form.Error>}

                    {/* note: method="POST" is used here to ensure form-data
                        is sent as an HTTP post transaction and does not get appended
                        to the url */}
                    <Form.Base onChange={handleSignup} method="POST">
                        <Form.Input 
                            placeholder="First name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />

                        <Form.Input 
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input 
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={ isInvalid } type="submit">
                            Sign Up
                        </Form.Submit>

                        <Form.Text>
                            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
