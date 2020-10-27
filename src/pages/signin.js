import React, { useState } from 'react'
import { Form } from '../components'
import { HeaderContainer } from '../containers/header'

export default function Sigin() {
    // used to capture errors
    const [error, setError] = useState('')

    return (
        <HeaderContainer>
            <Form>
                <Form.Title>Signin</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
            </Form>
        </HeaderContainer>
    )
}