// Signup page
import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext} from '../context/firebase'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import * as ROUTES from '../constants/routes'

export default function Signup() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [firstName, setFirstName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    // here we need form validation
    let isInvalid = firstName === '' || emailAddress === '' || password === ''

    // handleSignup (pass an event)
    // much of this is firebase specific authentication logic
    // \TODO allow users to upload their own profile photo
    const handleSignup = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor( Math.random() * 5 ) + 1,
                })
                .then(() => {
                    // would clear out form values so information does not persist except that React
                    // handles that on its own by unmounting the component thus clearing fields
                    history.push(ROUTES.BROWSE)
                })
            )
            .catch(( error ) => {
                // firstName is never cleared as it is not information that would ever cause an 
                // error and it is also not information that needs to be kept secret
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
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
                    <Form.Base onSubmit={ handleSignup } method="POST">
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
