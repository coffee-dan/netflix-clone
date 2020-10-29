// Signin Page
import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

export default function Sigin() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
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

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                setEmailAddress('')
                setPassword('')
                setError('')
                history.push(ROUTES.BROWSE)
            })
            .catch((error) => setError(error.message))
                
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
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
            <FooterContainer />
        </>
    )
}
