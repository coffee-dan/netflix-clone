// Signin Page
import React, { useState } from 'react'
import * as ROUTES from '../constants/routes'
import { Form } from '../components'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'

export default function Sigin() {
    // used to capture errors
    const [error, setError] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')

    // checks form fields to decide if form is submittable or not
    // this is done by controlling the "disabled" prop of Form.Submit
    let isInvalid = password === '' || emailAddress === ''

    const handleSignin = (event) => {
        event.preventDefault()

        // call in here to firebase to authenticate the user
        // if there's an error, populate the error state
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Signin</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
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
                            Sign In
                        </Form.Submit>

                        <Form.Text>
                            New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer></FooterContainer>
        </>
    )
}
